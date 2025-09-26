import type { Duration } from '$lib/career';
import { Format } from '../util/format';

export type TimelineRow = { name: string; description: string; duration: Duration };
export function getTimeline(rows: TimelineRow[]) {
	const { min, max } = getMinMax(rows);

	const bars = measureBars({ rows, min, max });
	const ticks = [0, 0.25, 0.5, 0.75, 1].map((p) => min + p * (max - min));

	return { min, max, bars, ticks };
}
function getMinMax(rows: TimelineRow[]) {
	const min = Math.min(...rows.map((v) => Format.toEpoch(v.duration.start)));
	const max = Math.max(...rows.map((v) => Format.toEpoch(v.duration.end)));

	return { min, max };
}

function scaleX(arg: { data: number; min: number; max: number }) {
	const { data, min, max } = arg;

	const span = max - min;
	const t = (data - min) / span;

	return t;
}

function measureBars(arg: { rows: TimelineRow[]; min: number; max: number }) {
	const { rows, min, max } = arg;

	return rows.map((r) => {
		const start = r.duration.start.getTime();
		const end = Format.toEpoch(r.duration.end);
		const x0 = scaleX({ data: start, min, max });
		const x1 = scaleX({ data: end, min, max });
		return { row: r, x: x0, width: x1 - x0, start, end };
	});
}
