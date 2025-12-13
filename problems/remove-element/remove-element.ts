export function removeElement(nums: number[], val: number): number {
	let l = nums.length;
	let i = 0;
	let j = nums.length - 1;

	while (i <= j) {
		if (nums[i] === val) {
			l -= 1;

			while (nums[j] === val) {
				if (i === j) { return l; }

				j -= 1;
				l -= 1;
			}

			nums[i] = nums[j]!;
			j -= 1;
		}

		i += 1;
	}

	return l;
}
