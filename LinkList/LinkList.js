
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkNodeList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(val) {
    const node = new Node(val)
    let cur = this.head
    if (this.head) {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    } else {
      // 如果没有 head 那么将创建的 node 节点赋值给 head ，初始链表的第一个元素
      this.head = node
    }
    this.length++
  }

  size () {
    return this.length
  }

  toString() {
    let str = ''
    // 链表为空，直接返回空字符串
    if (!this.head) return str
    // 否则 缓存第一个元素
    let cur = this.head
    // 初始化第一个值
    str = `${cur.val}`
    // 遍历链表
    while (cur.next) {
      const next = cur.next
      str = `${str},${next.val}`
      cur = cur.next
    }
    return str
  }
}

const linkList = new LinkNodeList()
linkList.append(1)
linkList.append(7)
linkList.append(3)

console.log(linkList.toString())
