import { MailAdapter, SendEmailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "0ef57e8c17f6d8",
		pass: "f9dcd68b6b088a"
	}
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendEmailData) {
        transport.sendMail({
        	from: 'Equipe Feedget <report@feedget.com>',
        	to: 'Flávio Henrique <f.henrique.n.l@gmail.com>',
        	subject,
        	html: body,
        })
    }
}