function quickestPath(board: { ladders: number[][]; snakes: number[][] }): number[] {
    const { ladders, snakes } = board;
    const boardSize = 100;
    const visited = new Set<number>(); //collect visited position 

    //collect [position,path]
    const queue: [number, number[]][] = [[1, []]]; 
  
    while (queue.length > 0) {
      const [position, path] = queue.shift()!; //get data to position,path
  
      if (position === boardSize) { //position = 100
        return path;
      }

      visited.add(position);

      // use dice 
      for (let dice = 1; dice <= 6; dice++) {
        const newPosition = position + dice;
  
        //ladder
        for (const [start, end] of ladders) {
          if (start === newPosition) {
            queue.push([end, [...path, dice]]);
            break;
          }
        }
  
        //snake
        for (const [start, end] of snakes) {
          if (start === newPosition) {
            queue.push([end, [...path, dice]]);
            break;
          }
        }
  
        if (!visited.has(newPosition) && newPosition <= boardSize) {
          queue.push([newPosition, [...path, dice]]); //set new position
        }
      }
    }
  
    return [];
  }
  
  const result = quickestPath({
    ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
    snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]],
  });
  
  console.log(result); // [2, 5, 6, 6, 1]
  