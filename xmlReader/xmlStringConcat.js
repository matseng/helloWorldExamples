// xmlStringConcat.js

function parse(strObj) {
  return strObj;
}

function isOpeningTag(tag) {
  var reg = /<\w+>/;
  return reg.test(tag);
}

function isClosingTag(tag) {
  var reg = /<\/\w+>/;
  return reg.test(tag);
}

function getTagName(tag) {
  return /<\/*(\w+)>/.exec(tag)[1];
}

function getContents(tag) {
  return /.*>([.\w\s]*)<.*/.exec(tag)[1];
}

function isTag(tag) {
  return /<\/*\w+>/.test(tag);
}
