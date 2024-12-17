/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows=grid.length;
    const cols=grid[0].length;

    const directions=[[1,0],[0,1],[-1,0],[0,-1]];
    let queue=[];
    let freshCount=0;

    // traversing the matrix to store all the rotten oranges in a queue
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(grid[r][c]==2){
                queue.push([r,c]);
            }
            else if(grid[r][c]==1){
                freshCount++;
            }
        }
    }

    // Performing BFS to rot adjacent fresh oranges
    let minutes=0;
    while(queue.length >0 && freshCount > 0){
        const nextQueue=[];
        for(let [x,y] of queue){
            for(let [dx,dy] of directions){
                const newX= x + dx;
                const newY= y + dy;
                if(newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY]==1){
                    grid[newX][newY]=2;
                    freshCount--;
                    nextQueue.push([newX,newY]);
                }
            }
        }
         queue=nextQueue;
         minutes++;
    }
    return freshCount==0 ? minutes: -1;
};