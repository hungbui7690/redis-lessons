import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	// *** the instructor code, he stills can store nested object, but we cannot > the problem appears in his code is when he set the owner = null > null.toString() === err > we need to use || to check for that
	await client.hSet('car', {
		color: 'red',
		year: 1950,
		owner: null || '',
		service: undefined || ''
		// engine: {}, // *** instructor still can store this > engine: [object Object]
	});

	const data = await client.hGetAll('car');
	console.log(data);
};

run();
