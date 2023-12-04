import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import axios from 'axios';
import type { teamMember } from '$lib/types/TeamMember';
import type { UUID } from 'crypto';

// Load function
export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	if (!session?.user) throw redirect(303, '/')

	type TeamDescription = {
		teamID: UUID
		teamDesc: String
	}

	let userInTeam:teamMember[]
	let teamList:TeamDescription[] =[] ;


	const searchTerm = 'Möbel'; // Ihre Variable mit Umlauten
	const url = `http://localhost:8080/teamMember/allTeamsByUser/${session.user.email}`;
	console.log(url)
	const respone = await fetch(url)
	userInTeam = await respone.json()

	//console.log(userInTeam)

	userInTeam.forEach(function(Team){
		let bezeichnung = ""+Team.team.gender + Team.team.age_group + " "+ Team.team.season+ " "+ Team.team.club.name 
		let teamDesc:TeamDescription = {
			teamID: Team.team.id,
			teamDesc: bezeichnung
		}
		teamList.push(teamDesc)
	});
	console.log(teamList)

	return {
		userInTeam: userInTeam,
		teamlist:teamList
	};
}) satisfies PageServerLoad;
