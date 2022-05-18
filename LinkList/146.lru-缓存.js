/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.cache = new Map()
  this.max = capacity
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // 如果缓存中有 删除老节点，设置新节点
  if (this.cache.has(key)) {
      this.cache.delete(key)
  } else if (this.cache.size >= this.max) {
      // 如果没有 且 cache 的尺寸大于等于 最大尺寸 删除头节点
      this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/