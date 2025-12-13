import { describe, test, expect } from 'bun:test';
import { removeElement } from './remove-element.ts';

// k is length of nums without removed element
function judge(nums: number[], k: number, expected: number[]) {
	if (k === 0) { return expected.length === 0; }

	const sortedNums = [...nums.slice(0, k)].sort((a, b) => a - b);
	const sortedExpected = [...expected].sort((a, b) => a - b);

	for (const [index, value] of Object.entries(sortedNums)) {
		if (value !== sortedExpected[Number(index)]) { return false; }
	}

	return true;
}

describe('removeElement', () => {
	/*
	 * Order of elements in resulting array
	 * isn't important. Judge will sort both
	 * result and expected arrays to make
	 * judgement easier
	 */
	test('[1,2,3], 3, result is [1,2]', () => {
		const nums = [1, 2, 3];
		const val = 3;
		const expected = [1, 2];

		expect(judge(nums, removeElement(nums, val), expected)).toBeTrue();
	});

	test('[1,3,4,4,6,5,10,3,4,4], 4, result (sorted) is [1,3,3,5,6,10]', () => {
		const nums = [1, 3, 4, 4, 6, 5, 10, 3, 4, 4];
		const val = 4;
		const expected = [1, 3, 3, 5, 6, 10];

		expect(judge(nums, removeElement(nums, val), expected)).toBeTrue();
	});

	test('[5,5,7,8,3,3,21,21,37,3,9,9], 3, result (sorted) is [5,5,7,8,9,9,21,21,37]', () => {
		const nums = [5, 5, 7, 8, 3, 3, 21, 21, 37, 3, 9, 9];
		const val = 3;
		const expected = [5, 5, 7, 8, 9, 9, 21, 21, 37];

		expect(judge(nums, removeElement(nums, val), expected)).toBeTrue();
	});

	test('[], 9, result is []', () => {
		expect(judge([], removeElement([], 9), [])).toBeTrue();
	});

	test('[7,7,7,7], 7, result is []', () => {
		const nums = [7, 7, 7, 7];
		const val = 7;
		const expected: number[] = [];

		expect(judge(nums, removeElement(nums, val), expected)).toBeTrue();
	});

	test('[4,5], 5, result is [4]', () => {
		const nums = [4, 5];
		const val = 5;
		const expected = [4];

		expect(judge(nums, removeElement(nums, val), expected)).toBeTrue();
	});
});
