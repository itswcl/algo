
var HitCounter = function () {
    // initial the map for count each counter
    this.map = new Map()
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
    // check the map has the counter or not
    this.map.has(timestamp)
        ? this.map.set(timestamp, this.map.get(timestamp) + 1)
        // default as counter once for first time
        : this.map.set(timestamp, 1)
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
    // count the hits
    let hits = 0;
    // initial start count based on 300 second
    // if the time over 300 ex. 305 then we'll get 305-300+1 = 6 (outside of 300 range)
    // if the time less then 300 ex. 299 then we'll start from 1 (within range)
    let start = timestamp >= 300 ? timestamp - 300 + 1: 1
    // then we'll hits on counter
    for(let i = start; i <= timestamp; i++) {
        // if any timestamp exist in counter we'll add to hits
        if (this.map.has(i)) hits += this.map.get(i)
    }
    return hits;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */