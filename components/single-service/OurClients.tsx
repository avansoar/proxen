// OurClients.tsx


export interface Client {
  src: string;
  alt: string;
}

interface OurClientsProps {
  title?: string;
  description?: string;
  clients?: Client[];
  accentText?: string;
  eyebrow?: string;
  className?: string;
}

// Default 16 images extracted from BrandAreaHomeTwo, split perfectly for 2 rows
const defaultClients: Client[] = [
  // Row 1
  { src: "https://images.prismic.io/proxen/abf4T7bci2UF6C4h_WegotitExpress.png?auto=format,compress", alt: "Wegotit Express" },
  { src: "https://images.prismic.io/proxen/abf4Trbci2UF6C4g_VIsionExcllence.png?auto=format,compress", alt: "Vision Excellence" },
  { src: "https://images.prismic.io/proxen/abf4Tbbci2UF6C4f_Technex.png?auto=format,compress", alt: "Technex" },
  { src: "https://images.prismic.io/proxen/abf4TLbci2UF6C4e_RBKonkrete.png?auto=format,compress", alt: "RB Konkrete" },
  { src: "https://images.prismic.io/proxen/abf4S7bci2UF6C4d_MotorOne.png?auto=format,compress", alt: "Motor One" },
  { src: "https://images.prismic.io/proxen/abf4Srbci2UF6C4b_MadeInIndia.png?auto=format,compress", alt: "Made In India" },
  { src: "https://images.prismic.io/proxen/abf4Sbbci2UF6C4a_IX%26renovate.png?auto=format,compress", alt: "IX & Renovate" },
  { src: "https://images.prismic.io/proxen/abf4SLbci2UF6C4Z_HRBuildingSupplies.png?auto=format,compress", alt: "HR Building Supplies" },
  // Row 2
  { src: "https://images.prismic.io/proxen/abf4R7bci2UF6C4Y_HeatFlow.png?auto=format,compress", alt: "Heat Flow" },
  { src: "https://images.prismic.io/proxen/abf4Rrbci2UF6C4X_Gretzky.png?auto=format,compress", alt: "Gretzky" },
  { src: "https://images.prismic.io/proxen/abf4Rbbci2UF6C4W_FutureDynamics.png?auto=format,compress", alt: "Future Dynamics" },
  { src: "https://images.prismic.io/proxen/abf4Q7bci2UF6C4U_Friendly.png?auto=format,compress", alt: "Friendly" },
  { src: "https://images.prismic.io/proxen/abf4Qrbci2UF6C4T_FreshlyBake.png?auto=format,compress", alt: "Freshly Bake" },
  { src: "https://images.prismic.io/proxen/abf4Qbbci2UF6C4S_Elysian.png?auto=format,compress", alt: "Elysian" },
  { src: "https://images.prismic.io/proxen/abf4QLbci2UF6C4R_Chachawow.png?auto=format,compress", alt: "Chachawow" },
  { src: "https://images.prismic.io/proxen/abf4P7bci2UF6C4Q_Auckland.png?auto=format,compress", alt: "Auckland" },
];

export default function OurClients({
  title = "Trusted by ambitious brands",
  description = "We partner with forward-thinking companies across industries to deliver exceptional digital experiences.",
  clients = defaultClients,
  accentText = "building their digital presence.",
  eyebrow = "Our Clients",
  className = ""
}: OurClientsProps) {
  
  // Split clients evenly into two rows
  const halfway = Math.ceil(clients.length / 2);
  const row1Clients = clients.slice(0, halfway);
  const row2Clients = clients.slice(halfway);

  return (
    <section className={`spp-ourclients-section ${className}`}>
      <div className="spp-container">
        {/* Section Header */}
        <div className="spp-ourclients-header">
          <div className="spp-ourclients-eyebrow">
            <span className="spp-ourclients-eyebrow-dot"></span>
            {eyebrow}
          </div>
          <h2 className="spp-ourclients-title">
            {title} <span className="spp-ourclients-accent">{accentText}</span>
          </h2>
          <p className="spp-ourclients-desc">{description}</p>
        </div>
      </div>

      {/* Infinite Marquee Area */}
      <div className="spp-ourclients-marquee-wrapper">
        
        {/* Track 1: Moves Left */}
        <div className="spp-ourclients-marquee">
          <div className="spp-ourclients-track track-left">
            {[...row1Clients, ...row1Clients].map((client, index) => (
              <div key={`row1-${index}`} className="spp-ourclients-card">
                <img src={client.src} alt={client.alt} className="spp-ourclients-logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Moves Right (or slower left) */}
        <div className="spp-ourclients-marquee">
          <div className="spp-ourclients-track track-right">
            {[...row2Clients, ...row2Clients].map((client, index) => (
              <div key={`row2-${index}`} className="spp-ourclients-card">
                <img src={client.src} alt={client.alt} className="spp-ourclients-logo" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}