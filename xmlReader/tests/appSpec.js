describe('xml string concatenator', function() {
  describe('basic xml parsing of a single node', function() {
    var openingTag = "<myOpeningTag>";
    var closingTag = "</myClosingTag>";
    var xmlStr = "<node>contents here</node>";
    var x2j = new X2J(xmlStr);
    var json = x2j.parse();

    it('should get the tag name', function() {
      expect(x2j.getTagName()).toEqual('node');
    });
    it('should get the contents', function() {
      expect(x2j.getContents()).toEqual('contents here');
    }); 
    it('should build a simple json object', function() {
      expect(json).toEqual({node: 'contents here'});
    });
  });
  describe('splitXmlString', function() {
    var xmlStr = "<node>contents here</node>";
    var arr = ["<node>", "contents here", "</node>"];
    it('should split an xml string around the tags', function() {
      expect(splitXmlString(xmlStr)).toEqual(arr);
  });
});
  describe('basic xml parsing of a 2 parallel nodes', function() {
    var xmlStr = "<node>contents here</node><edge>edge data</edge>";
    var x2j = new X2J(xmlStr);
    var json = x2j.parse();

    it('should detect the correct number of tags', function() {
      expect(x2j.getTags()).toEqual(4);
    });
    it('should build a simple json object', function() {
      expect(json).toEqual({node: 'contents here', edge: 'edge data'});
    });
  });



  xit('should get the mod (remainder) for an incomplete node string ', function() {
    expect(parse(xmlStr).mod).toEqual("<node>Partial<");
  });

});
