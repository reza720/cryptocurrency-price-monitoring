import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { deleteEmail } from '../../src/services/email.service.js';

const rl = createInterface({ input: stdin, output: stdout });

try {
	const emailId = await rl.question('Email UUID: ');
	await deleteEmail(emailId);
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}
