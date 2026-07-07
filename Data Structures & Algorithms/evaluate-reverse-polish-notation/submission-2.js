class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    let stack = []
    let valueA = null
    let valueB = null

    for(let i = 0; i < tokens.length; i++){
        if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/"){
            switch(tokens[i]){
                case "+":
                    valueA = stack.pop()
                    valueB = stack.pop()
                    stack.push(valueA + valueB)
                    break
                case "-":
                    valueA = stack.pop()
                    valueB = stack.pop()
                    stack.push(valueB - valueA)
                    break
                case "*":
                    valueA = stack.pop()
                    valueB = stack.pop()
                    stack.push(valueB * valueA)
                    break
                case "/":
                    valueA = stack.pop()
                    valueB = stack.pop()
                    stack.push(Math.trunc(valueB / valueA))
                    break
            }
        } else {
            stack.push(parseInt(tokens[i]))
        }
    }

    return stack.pop()
    }
}
