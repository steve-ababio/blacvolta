import nodemailer, { SentMessageInfo } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { readFile } from "fs/promises";
import path from "path";
import { formatMoney } from "@/app/utils/utils";
import { OrderReceiptPayload } from "@/app/types/types";

const TEMPLATE_PATH = path.join(
    process.cwd(),
    "app",
    "lib",
    "email",
  );

export class EmailService {
    private transporter: nodemailer.Transporter<SentMessageInfo>;
    constructor(){
        this.transporter = this.createTransport();
    }
    private renderManagerEmail(htmlContent: string,orderPayload:OrderReceiptPayload) {
        const escapeHtml = (s: string | number | undefined) =>
        String(s ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

        const placeholder = "https://via.placeholder.com/50?text=No+Image";

        const itemsHtml = orderPayload.items
            .map((item: any) => {
            const rawUrl = item?.product?.imageUrls?.[0];
            const imageUrl = rawUrl ? encodeURI(rawUrl) : placeholder;
            const alt = escapeHtml(item?.product?.name ?? "Product image");
            return `<tr>
                <td><img src="${imageUrl}" alt="${alt}" width="50" height="50" style="display:block;object-fit:cover"/></td>
                <td>${escapeHtml(item?.product?.name)}</td>
                <td>${escapeHtml(item?.quantity)}</td>
                <td>${escapeHtml(formatMoney(item.unitPrice, orderPayload.order.currency))}</td>
                <td>${escapeHtml(formatMoney(item.unitPrice * item.quantity, orderPayload.order.currency))}</td>
            </tr>`;
            })
          .join("");
          const html = htmlContent
          .replace("{{order.id}}", orderPayload.order.id)
          .replace("{{order.createdAt}}", new Date(orderPayload.order.createdAt).toLocaleString())
          .replace("{{order.status}}", orderPayload.order.status)
          .replace("{{order.subTotal}}", formatMoney(orderPayload.order.subTotal, orderPayload.order.currency))
          .replace("{{order.totalAmount}}", formatMoney(orderPayload.order.subTotal, orderPayload.order.currency))
          .replace("{{order.paymentStatus}}", orderPayload.order.paymentStatus)
          .replace("{{order.totalAmount}}", formatMoney(orderPayload.order.subTotal, orderPayload.order.currency))
          .replace("{{guest.name}}", orderPayload.guest.name)
          .replace("{{guest.email}}", orderPayload.guest.email)
          .replace("{{guest.phoneNumber}}", orderPayload.guest.phoneNumber || "-")
          .replace("{{order.items}}", itemsHtml)
          .replace("{{address.street}}", orderPayload.address.street)
          .replace("{{address.city}}", orderPayload.address.city)
          .replace("{{address.state}}", orderPayload.address.state)
          .replace("{{address.postalCode}}", orderPayload.address.postalCode)
          .replace("{{address.country}}", orderPayload.address.country);
      
        return html;
      }
    private renderOrderReceiptEmail(htmlContent: string,orderPayload:OrderReceiptPayload) {
        const escapeHtml = (s: string | number | undefined) =>
            String(s ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    
            const placeholder = "https://via.placeholder.com/50?text=No+Image";
    
            const itemsHtml = orderPayload.items
                .map((item: any) => {
                const rawUrl = item?.product?.imageUrls?.[0];
                const imageUrl = rawUrl ? encodeURI(rawUrl) : placeholder;
                const alt = escapeHtml(item?.product?.name ?? "Product image");
                return `<tr>
                    <td><img src="${imageUrl}" alt="${alt}" width="100" height="100" style="display:block;object-fit:cover"/></td>
                    <td>${escapeHtml(item?.product?.name)}</td>
                    <td>${escapeHtml(item?.quantity)}</td>
                    <td>${escapeHtml(formatMoney(item.unitPrice, orderPayload.order.currency))}</td>
                    <td>${escapeHtml(formatMoney(item.unitPrice * item.quantity, orderPayload.order.currency))}</td>
                </tr>`;
                })
              .join("");
        const html = htmlContent
            .replace("{{guest.name}}", orderPayload.guest.name)
            .replace("{{order.id}}", orderPayload.order.id)
            .replace("{{order.createdAt}}", new Date(orderPayload.order.createdAt).toLocaleString())
            .replace("{{order.paymentStatus}}", orderPayload.order.paymentStatus)
            .replace("{{order.items}}", itemsHtml)
            .replace("{{order.subTotal}}", formatMoney(orderPayload.order.subTotal, orderPayload.order.currency))
            .replace("{{order.totalAmount}}", formatMoney(orderPayload.order.subTotal, orderPayload.order.currency))
            .replace("{{address.street}}", orderPayload.address.street)
            .replace("{{address.city}}", orderPayload.address.city)
            .replace("{{address.state}}", orderPayload.address.state)
            .replace("{{address.postalCode}}", orderPayload.address.postalCode)
            .replace("{{address.country}}", orderPayload.address.country)
            .replace("{{year}}", new Date().getFullYear().toString());

        return html;
    }   
    
    private createTransport(){
      const transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST, 
          port: Number(process.env.MAIL_PORT),
          secure: true,
          auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
          },
      });
      return transporter;
    }
    async sendOrderReceiptEmail(email:string,subject:string,htmlFileUrl: string,payload:any){
        let htmlContent = await this.getHtmlContent(htmlFileUrl);
        htmlContent = this.renderOrderReceiptEmail(htmlContent,payload);
        await this.sendEmail(email,subject,htmlContent);
    }
    async sendStoreManagerEmail(email:string,subject:string,htmlFileUrl: string,payload:any){
        let htmlContent = await this.getHtmlContent(htmlFileUrl);
        const managerEmail = process.env.STORE_MAIL as string;
        htmlContent = this.renderManagerEmail(htmlContent,payload);
        await this.sendEmail(managerEmail,subject,htmlContent);
    }
    private async sendEmail(email:string,subject:string,htmlContent:string,imageattachments?:Mail.Attachment[],){
        const messageStatus = await this.transporter.sendMail({
            from: 'Blacvolta<booking.blacvolta>', // sender address
            to: email,
            subject,
            html:htmlContent, // plain text body,
            attachments:imageattachments
        });
        if (!messageStatus) {
            return Promise.reject(new Error('Failed to send email'));
        }
        return Promise.resolve();
    }
    
    private async getHtmlContent(filename: string): Promise<string> {
      try {
          return await readFile(path.join(TEMPLATE_PATH, filename), 'utf8');
      } catch (error) {
          console.error(`Failed to load template: ${filename}`, error);
          throw new Error('Html template loading failed');
      }
    }

}