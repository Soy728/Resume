<script lang="ts">
	import Career from '../component/Career.svelte';
	import Contact from '../component/Contact.svelte';
	import Education from '../component/Education.svelte';
	import Greeting from '../component/Greeting.svelte';
	import Intro from '../component/Intro.svelte';
	import Project from '../component/Project.svelte';
	import Skill from '../component/Skill.svelte';
</script>

<div class="flex min-h-screen w-full justify-center bg-gradient-to-b from-emerald-50 to-white">
	<div class="flex w-[1024px] flex-col gap-40 p-10 pt-28">
		<Greeting />
		<Intro />

		<Skill />

		<Career />
		<Project />
		<Education />

		<Contact />
	</div>
</div>
