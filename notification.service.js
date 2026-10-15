import nodemailer from 'nodemailer';
import env from '../config/env.js';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: env.gmailUser,
		pass: env.gmailAppPassword,
	},
});

async function sendEmail({ to, subject, text }) {
	return transporter.sendMail({
		from: env.gmailUser,
		to,
		subject,
		text,
	});
}

export default sendEmail;
