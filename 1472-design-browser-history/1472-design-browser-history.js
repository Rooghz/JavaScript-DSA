var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.currentIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    if(this.history.length <= this.currentIndex) {
        this.history.push("");
    }
    this.currentIndex = this.currentIndex + 1;

    this.history[this.currentIndex] = url;
    // ew :(
    this.history.length = this.currentIndex + 1;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.currentIndex = Math.max(0, this.currentIndex - steps);
    return this.history[this.currentIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.currentIndex = Math.min(this.history.length - 1, this.currentIndex + steps);
    return this.history[this.currentIndex];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */