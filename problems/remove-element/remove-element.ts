export function removeElement(nums: number[], val: number): number {
	let k = nums.length;
	let i = 0;
	let j = nums.length - 1;

	while (i <= j) {
		if (nums[i] === val) {
			k -= 1;

			while (nums[j] === val) {
				if (i === j) { return k; }

				j -= 1;
				k -= 1;
			}

			nums[i] = nums[j]!;
			j -= 1;
		}

		i += 1;
	}

	return k;
}
