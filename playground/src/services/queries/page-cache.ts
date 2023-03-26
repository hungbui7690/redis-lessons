import { client } from '../redis/client';
import { pageCacheKey } from '../keys'; // ***

const cacheRoutes = ['/about', '/privacy', '/auth/signin', '/auth/signup'];

export const getCachedPage = (route: string) => {
	if (cacheRoutes.includes(route)) {
		client.get(pageCacheKey(route)); // ***
	}

	return null;
};

export const setCachedPage = (route: string, page: string) => {
	if (cacheRoutes.includes(route)) {
		// ***
		return client.set(pageCacheKey(route), page, {
			EX: 2
		});
	}
};
