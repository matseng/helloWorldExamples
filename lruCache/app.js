function LinkedList() {
  this.tail = null;
  this.head = null;
}

function Node(name, data) {
  this.name = name;
  this.data = data;
  this.prev = null;
  this.next = null;
};

function LRU() {
  this.linkedList = new LinkedList(),
  this.lookup = {};
  this.count = 0;
  this.max = 2000;
}

LRU.prototype.get = function(name) {
  if(name in this.lookup) {
    var currNode = this.lookup[name];
    var prevNode = currNode.prev;
    var nextNode = currNode.next;
    if(!prevNode) {  //accessed tail node, need to increment tail
      var newTail = nextNode;
      newTail.prev = null;
      this.linkedList.tail = newTail;
    }
    if (prevNode) {
      prevNode.next = nextNode;
    } 
    if(!nextNode) {
      prevNode.next = currNode;
      currNode.prev = prevNode;
      this.linkedList.head = currNode;
    }
    if(nextNode) {
      nextNode.prev = prevNode;
    }

    var oldHead = this.linkedList.head;
    oldHead.next = currNode;
    currNode.prev = oldHead;
    currNode.next = null;
    this.linkedList.head = currNode;
    return currNode;
  }
  return null;
}

LRU.prototype.put = function(name, data) {
  var node = new Node(name, data);
  var oldHead = this.linkedList.head;
  this.linkedList.head = node;
  this.lookup[name] = node;
  if(this.count === 0) {
    this.linkedList.tail = node;
  } else {
    oldHead.next = node;
    node.prev = oldHead;
    if (this.count >= this.max) {
      var oldTail = this.linkedList.tail;
      delete this.lookup[oldTail.name];
      var newTail = this.linkedList.tail.next;
      newTail.prev = null;
      this.linkedList.tail = newTail;
      this.count -= 1;
    }
  }
  this.count += 1;  
}

var lru = new LRU();
lru.put('football', 'tv-show-data');
lru.put('basketball', 'tv-show-data');
lru.put('soccer', 'tv-show-data');

lru.get('football');

var expected = 'basketball'
if(this.linkedList.tail.name !== expected)
  console.log('Expected' + expected + "got" + this.linkedList.tail.name);

expected = 'football';
if(this.linkedList.head.name !== expected)
  console.log('Expected' + expected + "got" + this.linkedList.head.name);

// console.log(lru);

// var football = new Node('football');




// linkedList.tail = football;
// linkedList.head = football;

// lookup[football.value] = football;



