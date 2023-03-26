import { client } from '../redis/client';

// *** list of all routes that we want to cache
const cacheRoutes = ['/about', '/privacy', '/auth/signin', '/auth/signup'];

export const getCachedPage = (route: string) => {
	// check if the route we want to access is in the cache list or not
	if (cacheRoutes.includes(route)) {
		client.get('pagecache#' + route); // get the cache version
	}

	return null;
};

export const setCachedPage = (route: string, page: string) => {
	if (cacheRoutes.includes(route)) {
		return client.set('pagecache#' + route, page, {
			EX: 2 // expire in 2s, just to test > in real app > maybe 1 or 2 days
		});
	}
};
