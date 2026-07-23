class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        seen = set()
        
        for row in range(9):
            for col in range(9):
                num = board[row][col]
                if num == ".":
                    continue
                
                row_tag = f"{num} in row {row}"
                col_tag = f"{num} in col {col}"
                ref_tag = f"{num} in {row//3}-{col//3}"

                if ref_tag in seen or col_tag in seen or row_tag in seen:
                    return False

                seen.add(row_tag)
                seen.add(col_tag)
                seen.add(ref_tag)

        return True


                

                


        