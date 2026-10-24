import Email from '../models/email.js';

// Register an email
export async function registerEmail(data) {
	const email = await Email.create(data);
	console.log(`Email registered: ${email.address}`);
}

// Retrieve list of emails
export async function listEmails() {
	const emails = await Email.findAll();
	console.log(`Retrieved ${emails.length} registered emails`);
	return emails;
}

// Retrieve the email
export async function getEmail(emailId) {
	const email = await Email.findByPk(emailId);

	if (!email) {
		console.error(`Email not found: ${emailId}`);
		return;
	}

	console.log(`Retrieved email: ${email.address}`);
}

// Update the email
export async function updateEmail(emailId, data) {
	const email = await Email.findByPk(emailId);

	if (!email) {
		console.error(`Email not found: ${emailId}`);
		return;
	}

	await email.update(data);
	console.log(`Email updated: ${email.address}`);
}

// Delete the email
export async function deleteEmail(emailId) {
	const email = await Email.findByPk(emailId);

	if (!email) {
		console.error(`Email not found: ${emailId}`);
		return;
	}

	await email.destroy();
	console.log(`Email deleted: ${email.address}`);
}
