import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: 1950
	});

	// ***
	const data = await client.hGetAll('car#12321312321321');
	console.log(data); // {}

	// *** the check below is meaningless
	if (!data) {
		console.log('Car not found!!!');
		return;
	}
};

run();
