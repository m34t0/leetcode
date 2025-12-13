import { describe, test, expect } from 'bun:test';
import { isPowerOfFour } from './power-of-four';

function judge(num: number, result: boolean): boolean {
	if (num === 0) { return result === false; }

	const powersOfFour: number[] = [];

	for (let i = 1; i < 1000; i++) {
		powersOfFour.push(Math.pow(4, i));
	}

	return powersOfFour.includes(num) === result;
}

describe('isPowerOfFour', () => {
	test('16, result is true', () => {
		/*
		 * If judge returns true, it means that
		 * isPowerOfFour impl is right.
		 * For those, who is confused by .toBeTrue()
		 */
		expect(judge(16, isPowerOfFour(16))).toBeTrue();
	});

	test('28, result is false', () => {
		expect(judge(28, isPowerOfFour(28))).toBeTrue();
	});

	test('64, result is true', () => {
		expect(judge(64, isPowerOfFour(64))).toBeTrue();
	});

	test('from 256 to 4294967296, results is all true', () => {
		for (let i = 4; i <= 16; i++) {
			const num = Math.pow(4, i);

			expect(judge(num, isPowerOfFour(num))).toBeTrue();
		}
	});

	test('0, result is false', () => {
		expect(judge(0, isPowerOfFour(0))).toBeTrue();
	});
});
