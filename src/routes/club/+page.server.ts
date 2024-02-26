import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

// Load function
export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	if (!session?.user) throw redirect(303, '/');
	console.log("test")
	return {};
	
}) satisfies PageServerLoad;
