export function removeDuplicates(nums: number[]): number {
	if (nums.length === 0) { return 0; }

	let idx = 1;
	let lst = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === lst) {
			continue;
		} else {
			nums[idx] = nums[i]!;
			lst = nums[i];
			idx += 1;
		}
	}

	/*
	 * Don't need to increment index
	 * coz after last substitution there
	 * will be another idx += 1
	 */
	return idx;
}
