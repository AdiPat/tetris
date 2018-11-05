export const random = (lst) => {
    return lst[Math.floor((Math.random() * lst.length))];
};

export const indexToOffset = (startOffset, index, step) => {
        return startOffset + index * step; 
};

export const offsetToIndex = (totalSpan, step) => {
    return totalSpan / step;
}

// rotates the matrix clockwise around the bottom left element
export const rotateMatrix  = (matrix) => {
    const oldRows = matrix.length;
    const oldCols = matrix[0].length;
    const newRows = oldCols;
    const newCols = oldRows;
    let newMat = [];
    for(let i=0; i < newRows; i++) {
        let row = [];
        for(let j=0; j < newCols; j++)
            row.push(0);
        newMat.push(row);
    }
    
    let new_j = newCols-1;
    for(let i=0; i<oldRows; i++) {
        let new_i = 0;
        const row = matrix[i];
        let j = 0;
        for(let item of row) {
            newMat[new_i+j][new_j] = item;
            j++;
        }
        new_j--;
    }
    
//    for(let i = 0; i < matrix[0].length; i++) {
//        for(let j = matrix.length - 1; j >= 0; j--) {
//            newMat[i][j] = matrix[j][i];
//        }
//    }
    
    
    return newMat;
};