import { describe, test, expect } from 'bun:test';
import { removeDuplicates } from './remove-duplicates';

// k is length of nums without removed elements
function judge(nums: number[], k: number, expected: number[]) {
	return k === expected.length && nums.slice(0, expected.length).every((num, index) => num === expected[index]);
}

describe('removeDuplicates', () => {
	/*
	 * Result is representing first elements
	 * without duplicates. Elements after
	 * k don't matter. k is representing the
	 * length of array without duplicates
	 */
	test('[0,0,0,0,0], result is [0], return 1', () => {
		const nums = [0, 0, 0, 0, 0];
		const expected = [0];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[0,0,0,1], result is [0,1], return 2', () => {
		const nums = [0, 0, 0, 1];
		const expected = [0, 1];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[0,0,0,1,1,1], result is [0,1], return 2', () => {
		const nums = [0, 0, 0, 1, 1, 1];
		const expected = [0, 1];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[0,0,0,1,1,1,2,2], result is [0,1,2], return 3', () => {
		const nums = [0, 0, 0, 1, 1, 1, 2, 2];
		const expected = [0, 1, 2];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[0,0,0,1,1,1,2,2,4], result is [0,1,2,4], return 4', () => {
		const nums = [0, 0, 0, 1, 1, 1, 2, 2, 4];
		const expected = [0, 1, 2, 4];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[1,2,2,3,3,5], result is [1,2,3,5], return 4', () => {
		const nums = [1, 2, 2, 3, 3, 5];
		const expected = [1, 2, 3, 5];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[1,2,3], result is [1,2,3], return 3', () => {
		const nums = [1, 2, 3];
		const expected = [1, 2, 3];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[7,8,9,10,10,10,11,12,12], result is [7,8,9,10,11,12], return 6', () => {
		const nums = [7, 8, 9, 10, 10, 11, 12, 12];
		const expected = [7, 8, 9, 10, 11, 12];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[1,5,9,9,9,22,22,23,30], result is [1,5,9,22,23,30], return 6', () => {
		const nums = [1, 5, 9, 9, 9, 22, 22, 23, 30];
		const expected = [1, 5, 9, 22, 23, 30];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});

	test('[], result is [], return 0', () => {
		const nums: number[] = [];
		const expected: number[] = [];

		const result = removeDuplicates(nums);

		expect(judge(nums, result, expected)).toBeTrue();
	});
});
