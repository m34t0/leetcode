export function isPowerOfFour(n: number): boolean {
	if (n === 0) { return false; }

	const log = Math.log(n) / Math.log(4);

	return Number.isInteger(log);
}
