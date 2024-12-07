
var MinStack = function() {
    this.elements=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.elements.length===0){
        this.elements.push({value:val,min:val});
    }
    else{
        this.elements.push({
        value:val,
        min: Math.min(val,this.elements[this.elements.length-1].min),
    });
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   this.elements.pop(); 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.elements.length) return this.elements[this.elements.length-1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.elements.length) return this.elements[this.elements.length-1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */