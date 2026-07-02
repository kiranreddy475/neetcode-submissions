class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //row
        for(let row=0;row<9;row++){
            let seen=new Set();
            for(let col=0;col<9;col++){
                let value=board[row][col];
                if(value ===".") continue;
                if(seen.has(value)) return false;

                seen.add(value);
            }
        }
        //col
        for(let col=0;col<9;col++){
            let seen=new Set();
            for(let row=0;row<9;row++){
                let value=board[row][col];
                if(value ===".") continue;
                if(seen.has(value)) return false;

                seen.add(value);
            }
        }

        //3 x 3
        for(let startrow=0;startrow<9;startrow +=3){
            for(let startcol=0;startcol<9;startcol +=3){
                let seen=new Set();

                for(let row=startrow;row<startrow+3;row++){
                    for(let col=startcol;col<startcol+3;col++){
                        let value=board[row][col];
                        if(value ===".") continue
                        if(seen.has(value)) return false
                        seen.add(value)
                    }
                }
            }
        }
        return true
    }
}
