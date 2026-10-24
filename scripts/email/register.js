
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { z } from 'zod';
import { registerEmail } from '../../src/services/email.service.js';

const rl = createInterface({ input: stdin, output: stdout });

const emailSchema = z.object({
	address: z.email('Invalid email address'),
});

try {
	const address = await rl.question('Email address: ');

	const result = emailSchema.safeParse({ address: address.trim() });

	if (!result.success) {
		for (const error of result.error.issues) {
			console.error(`${error.path.join('.')}: ${error.message}`);
		}

		process.exitCode = 1;
	} else {
		await registerEmail(result.data);
	}
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}