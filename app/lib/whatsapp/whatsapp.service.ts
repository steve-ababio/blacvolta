// import { OrderReceiptPayload } from "@/app/types/types";

// export class WhatsappService {
//     private client:any;
//     constructor(){
//         // this.client = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

//     }
//     async sendStoreManagerNotification(data: OrderReceiptPayload) {
//         const message = `
//         🛒 New Order: ${data.order.id}
//         Customer: ${data.guest.name}
//         Phone: ${data.guest.phoneNumber || "-"}
//         Total: ${data.order.currency} ${(data.order.totalAmount/100).toFixed(2)}
//         Payment: ${data.order.paymentStatus}
//       `;
      
//         await client.messages.create({
//           from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
//           to: `whatsapp:${process.env.STORE_MANAGER_NUMBER}`,
//           body: message,
//         });
//     }

// }