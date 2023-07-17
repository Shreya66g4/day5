function spotlightMap(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const result = [];
  
    for (let i = 0; i < numRows; i++) {
      const row = [];
  
      for (let j = 0; j < numCols; j++) {
        let sum = 0;
        for (let x = i - 1; x <= i + 1; x++) {
          for (let y = j - 1; y <= j + 1; y++) {
            if (x >= 0 && x < numRows && y >= 0 && y < numCols) {
              sum += grid[x][y];
            }
          }
        }
  
        row.push(sum);
      }
  
      result.push(row);
    }
  
    return result;
  }
  const grid1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(spotlightMap(grid1));
  const grid2 = [
    [2, 6, 1, 3, 7],
    [8, 5, 9, 4, 0]
  ];
  console.log(spotlightMap(grid2));

  const grid3 = [[3]];
  console.log(spotlightMap(grid3));
  