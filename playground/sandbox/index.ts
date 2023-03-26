import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: 1950
	});

	// ***
	const data = await client.hGetAll('car#12321312321321');
	console.log(data);

	// *** we should use another check
	if (Object.keys(data).length === 0) {
		console.log('Car not found!!!');
		return;
	}
};

run();
