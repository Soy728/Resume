<script lang="ts">
	import { Format } from '../util/format';
	import { getTimeline, type TimelineRow } from './Timeline';

	let { row }: { row: TimelineRow[] } = $props();

	const AXIS_HEIGHT = 28;
	const BAR_HEIGHT = 32;

	const data = getTimeline(row);
</script>

<div class="relative w-full overflow-x-hidden rounded-lg">
	<div class="relative" style={`height:${AXIS_HEIGHT + BAR_HEIGHT + 16}px`}>
		<div class="absolute inset-x-0 top-0 h-[28px] border-b border-gray-200 bg-white/70">
			{#each data.ticks as t}
				{@const p = ((t - data.min) / (data.max - data.min)) * 100}
				<div class="absolute top-0 bottom-0 border-l border-gray-200" style={`left:${p}%`}></div>
				<div class="absolute top-0 px-1 pt-1 text-xs text-gray-500" style={`left:${p}%`}>
					{Format.date(t)}
				</div>
			{/each}
		</div>

		{#each data.bars as b (b.row.name)}
			<div
				class="absolute rounded-md border border-black/5 bg-gray-200/80 shadow-sm transition-shadow select-none hover:shadow-md"
				style={`left:${b.x * 100}%; width:${b.width * 100}%; top:${AXIS_HEIGHT + 6}px; height:${BAR_HEIGHT}px;`}
				title={`${b.row.name} (${new Date(b.start).toLocaleString()} – ${new Date(b.end).toLocaleString()})`}
			>
				<div
					class="flex h-full w-full items-center justify-center overflow-hidden text-xs font-medium"
				>
					{b.row.name}
				</div>
			</div>
		{/each}
	</div>
</div>
