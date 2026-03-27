import crypto from "crypto"; 
export const verifyPaystackSignature = (rawBody: string, signature: string, secret: string): boolean => {
    const hash = crypto.createHmac('sha512', secret).update(rawBody).digest('hex');
    return hash === signature;
};

export function htmlToText(html: string): string {
    return html
    .replace(/<[^>]*>/g, "")        // remove tags
    .replace(/&amp;/g, "&")         // decode common entities
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  }