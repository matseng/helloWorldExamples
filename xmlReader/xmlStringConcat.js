// xmlStringConcat.js




function X2J(str) {
  // var obj = {};
  // obj[getTagName]
  this.str = str;
  // this.this.parse();

}

X2J.prototype = {

  getTagName: function() {
    return /<\/*(\w+)>/.exec(this.str)[1];
  },

  getContents: function() {
    return /.*>([.\w\s]*)<.*/.exec(this.str)[1];
  },

  getTags: function() {
    // return /<\/*\w+>/.exec(this.str);
    console.log("hello world");
    var tagNameArr;
    var reg = /<\/*(\w+)>/g;
    var count = 0;
    var stack = [];
    while( (tagNameArr = reg.exec(this.str)) !== null) {
      // console.log(++count);
      // console.log(tagNameArr[0]);
      var tagName = tagNameArr[0];
      if(isOpeningTag(tagName)) {
        stack.push(tagName);
      } else {

      }

    }
    return count;
  },
  parse: function() {
    var obj = {};
    obj[this.getTagName()] = this.getContents();
    return obj;
  }
}

function isOpeningTag(tag) {
  var reg = /<\w+>/;
  return reg.test(tag);
};

function isClosingTag(tag) {
  var reg = /<\/\w+>/;
  return reg.test(tag);
};

function splitXmlString(str) {
  var reg = /<[^>]+>|[\w\s]+|.+/g;  //best so far, but not sure how to do . OR'd with \s
  // var str = "<node data='good'>contents here</node><edge type='line'>edge data</edgePartial \n newline here";
  var result = [];
  var currArr;
  var currStr;
  console.log("hello world");
  while( (currArr = reg.exec(str)) !== null) {
    currStr = currArr[0];
    console.log(currStr);
    result.push(currStr);
  }
  return result;
};









































