// xmlStringConcat.js




function X2J(str) {
  // var obj = {};
  // obj[getTagName]
  this.str = str;
  // this.this.parse();

}

X2J.prototype = {
  isOpeningTag: function () {
    var reg = /<\w+>/;
    return reg.test(this.str);
  },

  isClosingTag: function () {
    var reg = /<\/\w+>/;
    return reg.test(this.str);
  },

  getTagName: function() {
    return /<\/*(\w+)>/.exec(this.str)[1];
  },

  getContents: function() {
    return /.*>([.\w\s]*)<.*/.exec(this.str)[1];
  },

  isTag: function() {
    return /<\/*\w+>/.test(this.str);
  },
  parse: function() {
    var obj = {};
    obj[this.getTagName()] = this.getContents();
    return obj;
  }
}
