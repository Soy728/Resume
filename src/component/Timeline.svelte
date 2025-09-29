<script lang="ts">
	import { Format } from '../util/format';
	import { getTimeline, type TimelineRow } from './Timeline';

	let { row }: { row: TimelineRow[] } = $props();

	const AXIS_HEIGHT = 28;
	const BAR_HEIGHT = 32;
	const LANE_GAP = 6;

	const data = getTimeline(row);
</script>

<div class="relative w-full overflow-x-hidden">
	<div class="relative" style={`height:${(AXIS_HEIGHT + BAR_HEIGHT) * data.packed.length + 16}px`}>
		<div class="absolute inset-x-0 top-0 h-[28px] border border-gray-200/70 bg-gray-200/30">
			{#each data.ticks as t}
				{@const p = ((t - data.min) / (data.max - data.min)) * 100}
				<div class="absolute top-0 bottom-0 border-gray-200" style={`left:${p}%`}></div>
				<div class="absolute top-0 px-1 pt-1 text-xs text-gray-500" style={`left:${p}%`}>
					{Format.date(t)}
				</div>
			{/each}
		</div>

		{#each data.packed as lane, index}
			{#each lane as l}
				<div
					class="absolute rounded-md border border-black/5 bg-gray-200/80 shadow-xs"
					style={`left:${l.x * 100}%; width:${l.width * 100}%;
                 top:${AXIS_HEIGHT + index * (BAR_HEIGHT + LANE_GAP) + 6}px;
                 height:${BAR_HEIGHT}px;`}
				>
					<div
						class="flex h-full w-full items-center justify-center overflow-hidden text-xs font-medium"
					>
						{l.row.name}
					</div>
				</div>
			{/each}
		{/each}
	</div>
</div>
