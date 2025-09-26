<script lang="ts">
	import { career } from '$lib/career';
	import { Format } from '../util/format';

	export let projects = career.flatMap((c) => c.project.map((p) => ({ ...p, company: c.company })));
</script>

<section class="flex w-full flex-col justify-center gap-8">
	<h2 class="text-xl font-semibold text-lime-500">Project</h2>

	<div class="w-full divide-y divide-gray-200/70">
		{#each projects as item (item.name)}
			<article class="grid grid-cols-1 gap-4 py-12 first:pt-0 md:grid-cols-12">
				<!-- 좌측: 프로젝트명 / 기간 (+회사) -->
				<div class="md:col-span-4 lg:col-span-3">
					<div class="text-lg font-semibold text-gray-900">{item.name}</div>
					{#if item.company}
						<div class="text-sm text-gray-500">{item.company}</div>
					{/if}
					<div class="mt-5 text-sm text-gray-500">
						{`${Format.date(item.duration.start)} - ${Format.date(item.duration.end)}`}
					</div>
				</div>

				<!-- 우측: 소개 / 스킬 / 경험 -->
				<div class="md:col-span-8 lg:col-span-9">
					{#if item.intro?.length}
						<div class="pb-5 text-[15px] leading-7 text-gray-700">
							{#each item.intro as line}
								<div>{line}</div>
							{/each}
						</div>
					{/if}

					{#if item.skills.length}
						<div class="flex flex-wrap gap-2">
							{#each item.skills as s}
								<span
									class="rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-700"
									>{s}
								</span>
							{/each}
						</div>
					{/if}

					{#if item.experience?.length}
						<div class="pt-12">
							<div class="text-md mb-2 font-semibold">Experience</div>
							<ul class="list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-gray-700">
								{#each item.experience as exp}
									<li>{exp}</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>
