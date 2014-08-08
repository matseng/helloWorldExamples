describe('xml string concatenator', function() {
  var openingTag = "<myOpeningTag>";
  var closingTag = "</myClosingTag>";
  var xmlStr = "<node>contents here</node>";
  it('should should detect a tag', function() {
    expect(isTag(openingTag)).toEqual(true);
    expect(isTag(closingTag)).toEqual(true);
    expect(isTag("</Partial")).toEqual(false);
    expect(isTag("<Partial")).toEqual(false);
  });
  it('should detect a opening tag', function() {
    expect(isOpeningTag(openingTag)).toEqual(true);
  });  
  it('should detect a closing tag', function() {
    expect(isClosingTag(closingTag)).toEqual(true);
  });
  it('should get the tag name', function() {
    expect(getTagName(openingTag)).toEqual('myOpeningTag');
    expect(getTagName(closingTag)).toEqual('myClosingTag');
    expect(getTagName(xmlStr)).toEqual('node');
  });
  it('should get the contents', function() {
    expect(getContents(xmlStr)).toEqual('contents here');
  }); 
  xit('should build a simple json object', function() {
    expect(xml2json(xmlStr)).toEqual({node: 'contents here'});
  });

  // var xmlStr = "<node>Complete</node><node>Partial<";
  xit('should get the mod (remainder) for an incomplete node string ', function() {
    expect(parse(xmlStr).mod).toEqual("<node>Partial<");
  });

});
