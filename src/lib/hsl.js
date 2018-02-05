export const hslToCss = function (hslArray) {
    const [hue, sat, lum] = hslArray

    return `hsl(${hue}, ${sat}%, ${lum}%)`
}