import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Credentials from '@auth/core/providers/credentials';
import { redirect } from '@sveltejs/kit';

import type { Handle } from '@sveltejs/kit';
import type { User } from '@auth/core/types';


export const handle = SvelteKitAuth(async (event) => {
	const authOptions = {
		providers: [
			Credentials({
				credentials: {
					email: { label: 'Email' },
					password: { label: 'Password', type: 'password' }
				},
				async authorize(credentials) {
					let response_user: any;
					let jsonUser: any;
					let result: boolean = false;
					const req_url = 'http://localhost:8080/user/login/' + credentials.email;
					try {
						response_user = await fetch(req_url);
						jsonUser = await response_user.json();
					} catch (error) {
						redirect(303, '/auth/signin');
					}

					if (credentials.password == jsonUser.password) {
						result = true;
					}
					

					if (result && jsonUser.active == true && jsonUser.role != 'Admin') {
						return {
							email: jsonUser.email,
							name: jsonUser.firstname + " " +jsonUser.lastname
						} as User;
					} else {
						return null;
					}
				}
			})
		],
		secret: 'test',
		trustHost: true
	};
	return authOptions;
}) satisfies Handle;
