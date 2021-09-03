/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    
    this.stack = [];
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  
   this.stack.push({
       val: val,
       currMin: this.stack.length > 0 ? Math.min(val, this.stack[this.stack.length - 1].currMin) : val,
   })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
   return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
    return this.stack[this.stack.length - 1].currMin;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

