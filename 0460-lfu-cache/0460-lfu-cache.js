var LFUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.cnt = new Map()
    this.lfu = 0
};

LFUCache.prototype.get = function(key) {
    if ( this.cache.has(key) ) {
        let item = this.cache.get(key)
        this.cnt.get(item[1]).delete(key)
        if ( item[1] == this.lfu && !this.cnt.get(item[1]).size ) this.lfu = item[1]+1
        if ( !this.cnt.get(++item[1]) ) this.cnt.set( item[1], new Set() )
        this.cnt.get(item[1]).add(key)
        return item[0]
    } else return -1
};

LFUCache.prototype.put = function(key, value) {
    if ( !this.capacity ) return
    else if ( this.cache.has(key) ) {
        let item = this.cache.get(key)
        this.cnt.get(item[1]).delete(key)
        if ( item[1] == this.lfu && !this.cnt.get(item[1]).size ) this.lfu = item[1]+1
        item[0] = value
        if ( !this.cnt.get(++item[1]) ) this.cnt.set( item[1], new Set() )
        this.cnt.get(item[1]).add(key)
    } else {
        if ( this.cache.size == this.capacity )
            this.cache.delete(this.cnt.get(this.lfu).values().next().value),
            this.cnt.get(this.lfu).delete(this.cnt.get(this.lfu).values().next().value)
        this.cache.set( key, [ value, this.lfu = 1 ] )
        if ( !this.cnt.get(1) ) this.cnt.set( 1, new Set() )
        this.cnt.get(1).add(key)
    } 
};