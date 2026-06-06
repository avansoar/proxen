'use client';

import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { siteConfig } from '../../siteConfig';
import { getAllServices } from '../../data/services-data';

// ─────────────────────────────────────────────────────────────────────────────
//  EMAILJS CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_6w6rszi';
const EMAILJS_TEMPLATE_ID = 'template_rwyydej';
const EMAILJS_PUBLIC_KEY  = 'CTIe8UGQcD6A58wwY';

// ─────────────────────────────────────────────────────────────────────────────
//  RECAPTCHA CONFIG — Replace with your actual Site Key from Google
// ─────────────────────────────────────────────────────────────────────────────
const RECAPTCHA_SITE_KEY = '6LdervssAAAAAF5_11T2srL0G2KlrFrrfPCU_QdQ';
// ─────────────────────────────────────────────────────────────────────────────

interface FormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  recaptcha?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormData = {
  fullName: '',
  businessName: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

function validate(data: FormData, recaptchaToken: string | null): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[+\d\s\-()]{7,20}$/.test(data.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (!data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.service) {
    errors.service = 'Please select a service.';
  }
  if (!recaptchaToken) {
    errors.recaptcha = 'Please complete the CAPTCHA verification.';
  }

  return errors;
}

export default function ContactusArea() {
  const [formData, setFormData]           = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors]               = useState<FormErrors>({});
  const [touched, setTouched]             = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitStatus, setSubmitStatus]   = useState<SubmitStatus>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaTouched, setRecaptchaTouched] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name as keyof FormData]) setErrors(validate(updated, recaptchaToken));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData, recaptchaToken));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaTouched(true);
    // Clear recaptcha error as soon as user completes it
    if (token) {
      setErrors((prev) => ({ ...prev, recaptcha: undefined }));
    }
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    setErrors((prev) => ({ ...prev, recaptcha: 'CAPTCHA expired. Please verify again.' }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ fullName: true, phone: true, email: true, service: true });
    setRecaptchaTouched(true);

    const validationErrors = validate(formData, recaptchaToken);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitStatus('loading');
    setServerMessage('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          fullName:     formData.fullName,
          businessName: formData.businessName || 'N/A',
          phone:        formData.phone,
          email:        formData.email,
          service:      formData.service,
          message:      formData.message,
          reply_to:     formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSubmitStatus('success');
      setFormData(INITIAL_FORM);
      setTouched({});
      setErrors({});
      setRecaptchaToken(null);
      setRecaptchaTouched(false);
      recaptchaRef.current?.reset();
    } catch (err: unknown) {
      console.error('EmailJS error:', err);
      setSubmitStatus('error');
      setServerMessage('Failed to send your message. Please try again or email us directly at business@proxen.ca');
      // Reset captcha on error so user can retry
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  };

  const handleReset = () => {
    setSubmitStatus('idle');
    setServerMessage('');
    recaptchaRef.current?.reset();
    setRecaptchaToken(null);
    setRecaptchaTouched(false);
  };

  return (
    <>
      <div className="contact-page-wrapper">

        {/* ── Top Blue Header ── */}
        <section className="contact-header-section">
          <div className="header-content">
            <h1>Let's talk</h1>
            <p>Connect With Us, We're Here to Help</p>
          </div>
        </section>

        {/* ── Main Card ── */}
        <section className="contact-body-section">
          <div className="contact-card-container">

            {/* Left: Info Panel */}
            <div className="contact-info-panel">
              <div className="info-top">
                <h2>Contact Information</h2>
                <p>Say something to start a live chat!</p>
              </div>
              <div className="info-illustration">
                <img
                  src="https://images.prismic.io/proxen/ahAjZLK9tuLqEEcy_contactimage.png?auto=format,compress"
                  alt="Contact Envelope"
                />
              </div>
              <div className="info-bottom">
                <h3>{siteConfig?.email || 'business@proxen.ca'}</h3>
                <div className="social-icons">
                  <a href={siteConfig?.social?.facebook || '#'} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href={siteConfig?.social?.instagram || '#'} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href={siteConfig?.social?.linkedin || '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="decorative-circle-1"></div>
            </div>

            {/* Right: Form Panel */}
            <div className="contact-form-panel">

              {/* ── Success Screen ── */}
              {submitStatus === 'success' && (
                <div className="feedback-state">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round" width="44" height="44">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="9 12 11.5 14.5 15 10"/>
                    </svg>
                  </div>
                  <h3>Message Sent! 🎉</h3>
                  <p>Thanks for reaching out. We'll get back to you within 1–2 business days.</p>
                  <button className="submit-btn reset-btn" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              )}

              {/* ── Form ── */}
              {submitStatus !== 'success' && (
                <form onSubmit={handleSubmit} noValidate>

                  {submitStatus === 'error' && (
                    <div className="error-banner">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        width="18" height="18" style={{ flexShrink: 0 }}>
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <span>{serverMessage}</span>
                    </div>
                  )}

                  <div className="form-grid">
                    {/* Full Name */}
                    <div className={`form-group${errors.fullName && touched.fullName ? ' has-error' : ''}`}>
                      <label htmlFor="fullName">FULL NAME <span className="req">*</span></label>
                      <input id="fullName" name="fullName" type="text" placeholder="John Smith"
                        value={formData.fullName} onChange={handleChange} onBlur={handleBlur}
                        autoComplete="name" disabled={submitStatus === 'loading'} />
                      {errors.fullName && touched.fullName && (
                        <span className="field-error">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Business Name */}
                    <div className="form-group">
                      <label htmlFor="businessName">BUSINESS NAME</label>
                      <input id="businessName" name="businessName" type="text"
                        placeholder="Your business (Optional)"
                        value={formData.businessName} onChange={handleChange}
                        autoComplete="organization" disabled={submitStatus === 'loading'} />
                    </div>

                    {/* Phone */}
                    <div className={`form-group${errors.phone && touched.phone ? ' has-error' : ''}`}>
                      <label htmlFor="phone">PHONE NUMBER <span className="req">*</span></label>
                      <input id="phone" name="phone" type="tel" placeholder="+1 09876 54321"
                        value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                        autoComplete="tel" disabled={submitStatus === 'loading'} />
                      {errors.phone && touched.phone && (
                        <span className="field-error">{errors.phone}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className={`form-group${errors.email && touched.email ? ' has-error' : ''}`}>
                      <label htmlFor="email">EMAIL ADDRESS <span className="req">*</span></label>
                      <input id="email" name="email" type="email" placeholder="your@business.com"
                        value={formData.email} onChange={handleChange} onBlur={handleBlur}
                        autoComplete="email" disabled={submitStatus === 'loading'} />
                      {errors.email && touched.email && (
                        <span className="field-error">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div className={`form-group full-width mt-20${errors.service && touched.service ? ' has-error' : ''}`}>
                    <label htmlFor="service">SERVICE REQUIRED <span className="req">*</span></label>
                    <div className="select-wrapper">
                      <select id="service" name="service" value={formData.service}
                        onChange={handleChange} onBlur={handleBlur}
                        disabled={submitStatus === 'loading'}>
                        <option value="" disabled hidden>Select a Service</option>
                        {getAllServices().map((s) => (
                          <option key={s.slug} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    {errors.service && touched.service && (
                      <span className="field-error">{errors.service}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className={`form-group full-width mt-20${errors.message && touched.message ? ' has-error' : ''}`}>
                    <label htmlFor="message">MESSAGE</label>
                    <textarea id="message" name="message" rows={4}
                      placeholder="Tell us about your project or how we can help..."
                      value={formData.message} onChange={handleChange} onBlur={handleBlur}
                      disabled={submitStatus === 'loading'} />
                    {errors.message && touched.message && (
                      <span className="field-error">{errors.message}</span>
                    )}
                  </div>

                  {/* ── reCAPTCHA v2 ── */}
                  <div className={`recaptcha-wrapper${errors.recaptcha && recaptchaTouched ? ' recaptcha-error' : ''}`}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={handleRecaptchaChange}
                      onExpired={handleRecaptchaExpired}
                    />
                    {errors.recaptcha && recaptchaTouched && (
                      <span className="field-error recaptcha-field-error">{errors.recaptcha}</span>
                    )}
                  </div>

                  <button type="submit" className="submit-btn" disabled={submitStatus === 'loading'}>
                    {submitStatus === 'loading' ? (
                      <span className="btn-loading">
                        <span className="spinner" /> Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>

                </form>
              )}

              <div className="form-watermark">PROXEN</div>
            </div>

          </div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-page-wrapper {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: #f6f7f9;
          min-height: 100vh;
        }

        input, input[type=date], input[type=email], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], textarea {
          height: 45px;
        }

        /* Header */
        .contact-header-section {
          background-color: #086CFE;
          color: #fff;
          text-align: center;
          padding: 160px 20px 140px;
        }
        .header-content h1 { font-size: 48px; font-weight: 600; margin: 0 0 10px; color: #fff; }
        .header-content p  { font-size: 18px; font-weight: 400; margin: 0; opacity: 0.9; }

        /* Body */
        .contact-body-section {
          display: flex;
          justify-content: center;
          padding: 0 20px 80px;
          margin-top: -80px;
        }

        /* Card */
        .contact-card-container {
          display: flex;
          flex-direction: row;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          max-width: 1100px;
          width: 100%;
          overflow: hidden;
          padding: 24px;
          gap: 40px;
        }

        /* Left panel */
        .contact-info-panel {
          flex: 0 0 42%;
          background: #f2f4f8;
          border-radius: 12px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          min-height: 500px;
        }
        .info-top { position: relative; z-index: 2; }
        .info-top h2 { color: #086CFE; font-size: 32px; font-weight: 700; margin: 0 0 12px; letter-spacing: -0.5px; }
        .info-top p  { color: #4a5568; font-size: 16px; font-weight: 500; margin: 0; }
        .info-illustration {
          position: relative; z-index: 2;
          display: flex; justify-content: center; align-items: center;
          flex-grow: 1; margin: 30px 0;
        }
        .info-illustration img {
          max-width: 90%; height: auto; object-fit: contain;
          filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
        }
        .info-bottom { position: relative; z-index: 2; }
        .info-bottom h3 { color: #000; font-size: 28px; font-weight: 700; margin: 0 0 20px; letter-spacing: -0.5px; }
        .social-icons { display: flex; gap: 16px; }
        .social-icons a {
          color: #086CFE;
          transition: opacity 0.2s, transform 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .social-icons a:hover { opacity: 0.8; transform: translateY(-2px); }
        .decorative-circle-1 {
          position: absolute; width: 300px; height: 300px;
          background: #fff; border-radius: 50%;
          bottom: -50px; right: -80px; z-index: 1; opacity: 0.4;
        }

        /* Right panel */
        .contact-form-panel {
          flex: 1;
          padding: 30px 20px 30px 0;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Error banner */
        .error-banner {
          display: flex; align-items: center; gap: 10px;
          background: #fff5f5; border: 1px solid #fc8181;
          border-radius: 8px; padding: 12px 16px;
          color: #c53030; font-size: 14px; font-weight: 500;
          margin-bottom: 20px; position: relative; z-index: 2;
        }

        /* Grid */
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 24px; row-gap: 24px; }
        .form-group { display: flex; flex-direction: column; position: relative; z-index: 2; }
        .full-width { grid-column: 1 / -1; }
        .mt-20 { margin-top: 24px; }

        .form-group label {
          font-size: 12px; font-weight: 700; color: #2d3748;
          margin-bottom: 10px; letter-spacing: 0.5px; text-transform: uppercase;
        }
        .req { color: #e53e3e; margin-left: 2px; }

        /* Inputs */
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%; padding: 14px 16px;
          border: 1.5px solid #e2e8f0; border-radius: 8px;
          font-size: 15px; color: #2d3748; background: #fff;
          outline: none; transition: all 0.2s; font-family: inherit;
          box-sizing: border-box;
        }
        .form-group textarea { resize: vertical; min-height: 110px; line-height: 1.6; }
        .form-group input::placeholder,
        .form-group textarea::placeholder { color: #a0aec0; font-weight: 400; }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #086CFE;
          box-shadow: 0 0 0 3px rgba(13,110,253,0.15);
        }
        .form-group input:disabled,
        .form-group select:disabled,
        .form-group textarea:disabled { opacity: 0.6; cursor: not-allowed; background: #f9fafb; }
        .form-group.has-error input,
        .form-group.has-error select,
        .form-group.has-error textarea {
          border-color: #e53e3e;
          box-shadow: 0 0 0 3px rgba(229,62,62,0.1);
        }
        .field-error { font-size: 12px; color: #e53e3e; margin-top: 5px; font-weight: 500; }

        /* Select arrow */
        .select-wrapper { position: relative; }
        .select-wrapper::after {
          content: ''; position: absolute; right: 16px; top: 50%;
          transform: translateY(-50%); width: 16px; height: 16px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a0aec0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat; background-size: contain;
          pointer-events: none; transition: transform 0.2s;
        }
        .select-wrapper:focus-within::after { transform: translateY(-50%) rotate(180deg); }
        .form-group select { appearance: none; cursor: pointer; }
        .form-group select option[value=""] { color: #a0aec0; }

        /* reCAPTCHA */
        .recaptcha-wrapper {
          margin-top: 24px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }
        .recaptcha-error > div {
          outline: 1.5px solid #e53e3e;
          border-radius: 4px;
        }
        .recaptcha-field-error {
          margin-top: 2px;
        }

        /* Button */
        .submit-btn {
          width: 100%; background: #086CFE; color: #fff;
          font-size: 16px; font-weight: 600; padding: 16px;
          border: none; border-radius: 8px; margin-top: 32px;
          cursor: pointer; transition: all 0.2s;
          position: relative; z-index: 2; font-family: inherit;
        }
        .submit-btn:hover:not(:disabled) {
          background: #0b5ed7; transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(13,110,253,0.25);
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
        .btn-loading { display: flex; align-items: center; justify-content: center; gap: 10px; }
        .spinner {
          display: inline-block; width: 18px; height: 18px;
          border: 2.5px solid rgba(255,255,255,0.35); border-top-color: #fff;
          border-radius: 50%; animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .reset-btn { margin-top: 20px; max-width: 240px; }

        /* Success state */
        .feedback-state {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center;
          padding: 20px; position: relative; z-index: 2; flex: 1;
        }
        .success-icon {
          width: 80px; height: 80px; background: #f0fff4; color: #38a169;
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; margin-bottom: 20px;
        }
        .feedback-state h3 { font-size: 26px; font-weight: 700; color: #2d3748; margin: 0 0 12px; }
        .feedback-state p  { font-size: 15px; color: #4a5568; margin: 0; max-width: 320px; }

        /* Watermark */
        .form-watermark {
          position: absolute; bottom: 10px; right: 0;
          font-size: 110px; font-weight: 900; color: #f7fafc;
          z-index: 1; pointer-events: none; user-select: none;
          letter-spacing: 4px; line-height: 1;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .contact-card-container { flex-direction: column; gap: 10px; padding: 20px; }
          .contact-form-panel { order: 1; padding: 10px; }
          .contact-info-panel { order: 2; min-height: auto; }
          .info-illustration img { max-height: 250px; }
          .form-watermark { font-size: 70px; bottom: 5px; right: 10px; }
        }

        @media (max-width: 600px) {
          .contact-header-section { padding: 100px 20px; }
          .contact-body-section { margin-top: -60px; }
          .header-content h1 { font-size: 36px; }
          .form-grid { grid-template-columns: 1fr; row-gap: 15px; }
          .form-group label { margin-bottom: 0px; }
          .contact-info-panel { padding: 30px 20px; }
          .info-top h2 { font-size: 26px; }
          .info-bottom h3 { font-size: 22px; }
          .recaptcha-wrapper { align-items: center; }
        }
      `}} />
    </>
  );
}