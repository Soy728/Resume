import { format } from 'date-fns';
export namespace Format {
	type DateType = number | string | Date | undefined;

	export function date(date: DateType): string {
		if (!date) return '';
		if (date === 'in-progress') return 'now';
		return format(new Date(date), 'yyyy.MM');
	}

	export function toEpoch(date: DateType) {
		if (!date) return 0;
		return date === 'in-progress' ? Date.now() : new Date(date).getTime();
	}

	export function ellipsis(value: string | undefined, length: number) {
		if (!value) {
			return '';
		}
		return value.length > length ? `${value.substring(0, length)}...` : value;
	}

	export function ellipsisCenter(value: string | undefined, length: number) {
		if (!value) {
			return '';
		}
		return value.length > length
			? `${value.substring(0, length / 2)}...${value.substring(
					value.length - length / 2,
					value.length
				)}`
			: value;
	}
}
