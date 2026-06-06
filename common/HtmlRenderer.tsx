// import HtmlRenderer from "../../common/HtmlRenderer";


import React from "react";
import DOMPurify from "dompurify";

interface HtmlRendererProps {
  html: string | null | undefined;
  tag?: keyof JSX.IntrinsicElements; // 'div', 'p', 'h1', 'section', etc
  className?: string;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({
  html,
  tag: Tag = "div",
  className = "",
}) => {
  // Safe initialization of DOMPurify for SSR compatibility
  const sanitizedHtml =
    typeof window !== "undefined" && DOMPurify && typeof DOMPurify.sanitize === "function"
      ? DOMPurify.sanitize(html || "")
      : (html || "");

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default HtmlRenderer;
