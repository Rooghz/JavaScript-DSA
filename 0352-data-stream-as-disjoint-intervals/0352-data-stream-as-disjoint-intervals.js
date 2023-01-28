var SummaryRanges = function() {
    this.stream = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    this.stream.push(value);
    this.stream.sort((a,b) => a-b);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    const sol = [];
    let start = this.stream[0];
    let end = this.stream[0];
    for (let i=1; i<this.stream.length; i++) {
        if (this.stream[i] == end + 1 || this.stream[i] == end) {
            end = this.stream[i];
        } 
        else {
            sol.push([start, end]);
            start = this.stream[i];
            end = this.stream[i];
        }
    }
    sol.push([start, end]);

    return sol;
};
