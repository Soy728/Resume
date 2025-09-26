<script lang="ts">
	const stacks = [
		{ name: 'Svelte', img: '/asset/svelte.png' },
		{ name: 'React', img: '/asset/react.png' },
		{ name: 'TypeScript', img: '/asset/typescript.png' },
		{ name: 'JavaScript', img: '/asset/javascript.png' },
		{ name: 'Sass', img: '/asset/scss.png' },
		{ name: 'Tailwind', img: '/asset/tailwind.png' },
		{ name: 'Firebase', img: '/asset/firebase.png' },
		{ name: 'Nest.js', img: '/asset/nestjs.png' },
		{ name: 'Node.js', img: '/asset/nodejs.png' },
		{ name: 'Redis', img: '/asset/redis.png' },
		{ name: 'Github', img: '/asset/github.png' },
		{ name: 'Vite', img: '/asset/vite.png' }
	];
</script>

<div class="flex w-full flex-col justify-center gap-8 pt-20">
	<div class="text-xl font-semibold text-lime-500">기술 스택 및 도구</div>
	<div class="grid grid-cols-2 gap-6 md:grid-cols-6">
		{#each stacks as stack}
			<div
				class="flex flex-col items-center justify-center rounded-lg bg-white/20 p-4 shadow-sm transition-transform hover:shadow-md"
			>
				<img src={stack.img} alt={stack.name} class="mb-4 h-10 w-10 object-contain" />
				<span class="text-xs font-normal text-gray-500">{stack.name}</span>
			</div>
		{/each}
	</div>
</div>
