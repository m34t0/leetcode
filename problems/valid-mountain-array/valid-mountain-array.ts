export function validMountainArray(arr: number[]): boolean {
	if (arr.length < 3) return false;

	let asc = false;
	let desc = false;
	let lst = arr[0]!;

	for (let i = 1; i < arr.length; i++) {
		const curr = arr[i]!;

		if (lst < curr) {
			asc = true;
		}

		if (lst > curr) {
			desc = true;
		}

		if (lst === curr) return false;

		if (!desc && lst > curr) return false;

		if (desc && lst < curr) return false;

		lst = curr;
	}

	return desc && asc;
}
