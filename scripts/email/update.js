
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { z } from 'zod';
import { updateEmail } from '../../src/services/email.service.js';

const rl = createInterface({ input: stdin, output: stdout });

const emailSchema = z.object({
	emailId: z.string().uuid('Invalid email UUID'),
	address: z.email('Invalid email address'),
});

try {
	const emailId = await rl.question('Email UUID: ');
	const address = await rl.question('New email address: ');

	const result = emailSchema.safeParse({
		emailId: emailId.trim(),
		address: address.trim(),
	});

	if (!result.success) {
		for (const error of result.error.issues) {
			console.error(`${error.path.join('.')}: ${error.message}`);
		}

		process.exitCode = 1;
	} else {
		const { emailId, ...data } = result.data;
		await updateEmail(emailId, data);
	}
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}