<script lang="ts">
	import { career as _career } from '$lib/career';
	import { Format } from '../util/format';
	import { type TimelineRow } from './Timeline';
	import Timeline from './Timeline.svelte';

	const career = _career;
	const timelineData: TimelineRow[] = career.map((c) => ({
		name: c.company,
		description: c.department,
		duration: c.duration
	}));
</script>

<section class="flex w-full flex-col justify-center gap-8 pt-20">
	<h2 class="text-xl font-semibold text-lime-500">Career</h2>

	<Timeline row={timelineData} />

	<div class="w-full divide-y divide-gray-200/70 rounded-xl bg-white/0">
		{#each career as item (item.company)}
			<article class="grid grid-cols-1 gap-4 py-6 md:grid-cols-12">
				<div class="md:col-span-4 lg:col-span-3">
					<div class="font-semibold text-gray-900">{item.company}</div>
					<div class="mt-1 text-sm text-gray-500">
						{`${Format.date(item.duration.start)} - ${Format.date(item.duration.end)}`}
					</div>
				</div>

				<div class="md:col-span-8 lg:col-span-9">
					{#if item.department}
						<div class="text-md font-medium">{item.department}</div>
					{/if}

					{#if item.intro && item.intro.length}
						<ul class="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-gray-700">
							{#each item.intro as line}
								<li>{line}</li>
							{/each}
						</ul>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>
