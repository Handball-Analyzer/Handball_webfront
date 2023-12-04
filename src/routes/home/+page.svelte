<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../../components/Sidebar.svelte';
	import type { PageData, ActionData } from './$types';
	import { page } from '$app/stores';
	export let data: PageData;
	const teamsFromUser = data.userInTeam;
	const teamList = data.teamlist;
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="sidebarLeft">
		<select class="select">
			<option>--Select a Team--</option>
			{#each teamList as Team}
				<option value={Team.teamID}>{Team.teamDesc}</option>
			{/each}
		</select>
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="default">

			<div class="grid grid-cols-6 grid-rows-6 gap-1 w-[97%] h-full m-5">
				<div class="col-span-2 col-start-1 row-start-1"><h2 class="h2"> Wellcome {$page.data.session?.user?.name}</h2></div>
				<div class="col-start-3 row-start-1"></div>
				<div class="col-span-3 row-span-1 col-start-4 row-start-1 flex flex-col">
					<div class="card m-1 h-2/5 flex justify-center content-center items-center w-full">
						<div>Last game: VFL Waiblingen 22 : 12 TSV Schmiden</div>
					</div>
					<div class="card m-1 h-2/5 flex justify-center content-center items-center w-full">
						<div> Next Game: VFL Waiblingen -- : -- TSV Schmiden</div>
					</div>
				</div>
				<div class="col-span-3 row-span-5 col-start-1 row-start-2 bg-error-500">15</div>
				<div class="col-span-3 row-span-5 col-start-4 row-start-2">
					<h3 class=" m-2 h3">Next Trainings</h3>
				</div>
				
				
				
			</div>
	</svelte:fragment>
</AppShell>
