import { listEmails } from '../../src/services/email.service.js';

try {
	const emails = await listEmails();
	console.log(emails.map((email) => email.toJSON()));
} catch (error) {
	console.error(error);
	process.exitCode = 1;
}
