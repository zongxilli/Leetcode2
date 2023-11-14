numIslands = (grid) => {
	// write your code here
	let count = 0;

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid.length; y++) {
			if (grid[x][y] === 1) {
				count++;
				mark(grid, x, y);
			}
		}
	}

	return count;
};

const mark = (grid, x, y) => {
	grid[x][y] = -1;

	if (x - 1 >= 0 && grid[x - 1][y] === 1) mark(grid, x - 1, y);
	if (x + 1 < grid.length && grid[x + 1][y] === 1) mark(grid, x + 1, y);
	if (y - 1 >= 0 && grid[x][y - 1] === 1) mark(grid, x, y - 1);
	if (y + 1 < grid[0].length && grid[x][y + 1] === 1) mark(grid, x, y + 1);
};

const input = [
	[1, 1, 0, 0, 0],
	[0, 1, 0, 0, 1],
	[0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1],
];

console.log(numIslands(input));

