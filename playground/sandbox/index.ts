import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	// await client.del('car'); // *** in case of error, need to use this line

	// *** similar to this, but easier to read > HSET car color red year 1950
	await client.hSet('car', {
		color: 'red',
		year: 1950
	});

	// *** get data
	const data = await client.hGetAll('car');
	console.log(data);
};

run();
