class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.minStack.length === 0 || val <= this.getMin()){
            this.minStack.push(val)
        }
        return this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.hasElements(this.stack)){
            const popElement = this.stack.pop()
            if(popElement === this.getMin()){
                this.minStack.pop();
            }
            return popElement
        }
        return null
    }

    /**
     * @return {number}
     */
    top() {
        if (this.hasElements(this.stack)){
            return this.stack[this.stack.length - 1]
        }
        return null
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.hasElements(this.minStack)){
            return this.minStack[this.minStack.length - 1]
        }
        return null
    }

    hasElements(stack){
        return stack.length > 0;
    }

}
