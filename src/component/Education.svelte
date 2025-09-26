<script lang="ts">
	import type { Duration } from '$lib/career';
	import { Format } from '../util/format';

	const education: { name: string; department: string; duration: Duration }[] = [
		{
			name: '아주대학교',
			department: '디지털미디어학과 / 졸업',
			duration: { start: new Date('2019-03'), end: new Date('2023-07') }
		}
	];
</script>

<section class="flex w-full flex-col justify-center gap-8">
	<h2 class="text-xl font-semibold text-lime-500">Education</h2>

	<div class="w-full divide-y divide-gray-200/70">
		{#each education as item (item.name)}
			<article class="grid grid-cols-1 gap-4 py-12 first:pt-0 md:grid-cols-12">
				<div class="md:col-span-4 lg:col-span-3">
					<div class="text-lg font-semibold text-gray-900">{item.name}</div>

					<div class="mt-5 text-sm text-gray-500">
						{`${Format.date(item.duration.start)} - ${Format.date(item.duration.end)}`}
					</div>
				</div>

				<div class="md:col-span-8 lg:col-span-9">
					<div class="pb-5 text-[15px] leading-7 text-gray-700">
						<div>{item.department}</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
