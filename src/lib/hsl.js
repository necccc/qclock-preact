export function hslToCss (hslArray) {
	const [hue, sat, lum] = hslArray;

	return `hsl(${hue}, ${sat}%, ${lum}%)`;
}