import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

interface EmailInterface {
  to: string,
  subject: string,
  html: string
}

export default class mailer {

  private transporter:Mail;

  private fromEmail:string;

  constructor(host:string, port:number, secure:boolean) {
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
    });
  }

  /**
   * sendEmail
   */
  public async sendEmail(email:EmailInterface) {
    const { to, subject, html } = email;

    try {
      await this.transporter.sendMail({
        from: this.fromEmail,
        to,
        subject,
        html
      })
    } catch (error) {
      console.error(error)
    }
  }
}
