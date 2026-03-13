import { describe, test, expect } from 'bun:test';
import { validMountainArray } from './valid-mountain-array';

function judge(result: boolean, expected: boolean) {
	return result === expected;
}

describe('validMountainArray', () => {
	describe('exceptions', () => {
		test('arr.length < 3, false', () => {
			expect(judge(validMountainArray([]), false)).toBeTrue();
			expect(judge(validMountainArray([1]), false)).toBeTrue();
			expect(judge(validMountainArray([1, 2]), false)).toBeTrue();
		});
	});

	test('[0, 1, 2, 3, 1, 0], result is true', () => {
		expect(
			judge(validMountainArray([0, 1, 2, 3, 1, 0]), true),
		).toBeTrue();
	});

	test('[0, 5, 0], result is true', () => {
		expect(
			judge(validMountainArray([0, 5, 0]), true),
		).toBeTrue();
	});

	test('[7, 9, 13, 15, 16, 3, 2], result is true', () => {
		expect(
			judge(validMountainArray([7, 9, 13, 15, 16, 3, 2]), true),
		).toBeTrue();
	});

	test('[0, 1, 2, 3, 3, 5, 3, 2, 1], result is false', () => {
		expect(
			judge(validMountainArray([0, 1, 2, 3, 3, 5, 3, 2, 1]), false),
		).toBeTrue();
	});

	test('[0, 3, 3, 5, 3], result is false', () => {
		expect(
			judge(validMountainArray([0, 3, 3, 5, 3]), false),
		).toBeTrue();
	});

	test('[0, 0, 0, 0], result is false', () => {
		expect(
			judge(validMountainArray([0, 0, 0, 0]), false),
		).toBeTrue();
	});

	test('[1, 1, 1, 1], result is false', () => {
		expect(
			judge(validMountainArray([1, 1, 1, 1]), false),
		).toBeTrue();
	});

	test('[1, 3, 5, 5, 2, 1], result is false', () => {
		expect(
			judge(validMountainArray([1, 3, 5, 5, 2, 1]), false),
		).toBeTrue();
	});

	test('[0, 1, 2, 7, 3, 3, 2, 0], result is false', () => {
		expect(
			judge(validMountainArray([0, 1, 2, 7, 3, 3, 2, 0]), false),
		).toBeTrue();
	});

	test('[0, 3, 1, 7, 5, 1, 0], result is false', () => {
		expect(
			judge(validMountainArray([0, 3, 1, 7, 5, 1, 0]), false),
		).toBeTrue();
	});

	test('[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], result is false', () => {
		expect(
			judge(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), false),
		).toBeTrue();
	});

	test('[9, 8, 7, 6, 5, 4, 3, 2, 1, 0], result is false', () => {
		expect(
			judge(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), false),
		).toBeTrue();
	});
});
