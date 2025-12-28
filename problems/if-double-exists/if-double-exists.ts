export function ifDoubleExists(nums: number[]): boolean {
	/* { [number]: 1 */
	const hash: Record<number, 1> = {};

	for (const num of nums) {
		if (num % 2 === 0) {
			if (hash[num / 2]) {
				return true;
			}
		}

		if (hash[num * 2]) {
			return true;
		}

		hash[num] = 1;
	}

	return false;
}
