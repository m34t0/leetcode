import { describe, test, expect } from 'bun:test';
import { ifDoubleExists } from './if-double-exists';

function judge(result: boolean, expected: boolean) {
	return result === expected;
}

describe('ifDoubleExists', () => {
	test('[0,1,5,2,10], true', () => {
		expect(judge(ifDoubleExists([0, 1, 5, 2, 10]), true)).toBeTrue();
	});

	test('[0,4,5,15,8,16], true', () => {
		expect(judge(ifDoubleExists([0, 4, 5, 15, 8, 16]), true)).toBeTrue();
	});

	test('[-6,7,9,19,-12,26,55,0,-5], true', () => {
		expect(judge(ifDoubleExists([-6, 7, 9, 19, -12, 26, 55, 0, -5]), true)).toBeTrue();
	});

	test('[64,2,89,6,4,3,6], true', () => {
		expect(judge(ifDoubleExists([64, 2, 89, 6, 4, 3, 6]), true)).toBeTrue();
	});

	test('[2,2,6,5], false', () => {
		expect(judge(ifDoubleExists([2, 2, 6, 5]), false)).toBeTrue();
	});

	test('[], false', () => {
		expect(judge(ifDoubleExists([]), false)).toBeTrue();
	});

	test('[1,1,1,1], false', () => {
		expect(judge(ifDoubleExists([1, 1, 1, 1]), false)).toBeTrue();
	});
});
