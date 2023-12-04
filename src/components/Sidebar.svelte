<script>
// @ts-nocheck

	import { AppShell } from '@skeletonlabs/skeleton';
    import FaCogs from 'svelte-icons/fa/FaCogs.svelte';
	import FaComments from 'svelte-icons/fa/FaComments.svelte'
	import FaUser from 'svelte-icons/fa/FaUser.svelte'
	import FaHome from 'svelte-icons/fa/FaHome.svelte'
	import FaGamepad from 'svelte-icons/fa/FaGamepad.svelte'
	import FaClipboard from 'svelte-icons/fa/FaClipboard.svelte'
	import IoMdPeople from 'svelte-icons/io/IoMdPeople.svelte'
	import FaRegBuilding from 'svelte-icons/fa/FaRegBuilding.svelte'
	import IoMdStats from 'svelte-icons/io/IoMdStats.svelte'
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/"class=""><div class="icon mr-2"><FaHome/></div>Home</a></li>
		<li><a href="/club" class=""><div class="icon mr-2"><FaRegBuilding/></div>Club</a></li>
		<li><a href="/team" class=""><div class="icon mr-2"><IoMdPeople/></div>Teams</a></li>
		<li><a href="/statistic" class=""><div class="icon mr-2"><IoMdStats/></div>Statistics</a></li>
		<li><a href="/training" class=""><div class="icon mr-2"><FaClipboard/></div>Training</a></li>
		<li><a href="/game"class=""><div class="icon mr-2"><FaGamepad/></div>Game</a></li>
		<li><a href="/message"class=""><div class="icon mr-2"><FaComments/></div>Messages</a></li>
        <li><a href="/profil"class=""><div class="icon mr-2"><FaUser/></div>Profil</a></li>
		<li><a href="/settings" class=""><div class="icon mr-2"><FaCogs/></div>Settings</a></li>
	</ul>
</nav>

<style>
    .icon{
        width: 28px;
        height: 28px;
    }
</style>