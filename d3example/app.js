// <g> for adding text to a circle: http://stackoverflow.com/questions/13615381/d3-add-text-to-circle
// wrap text: http://bl.ocks.org/mbostock/7555321
// pan and zoom: http://bl.ocks.org/mbostock/6123708
// g pan example: http://jsfiddle.net/EwGPu/1/

var nodeData = [
  {x: 40, y: 60, width: 100, height: 50, fill: 'white', stroke: 'steelBlue', 'stroke-width': 2, text: 'hello world'},
  {x: 80, y: 90, width: 100, height: 50, fill: 'white', stroke: 'steelBlue', 'stroke-width': 2, text: 'hello world 2 hello world 2'},
  {x: 120, y: 120, width: 100, height: 50, fill: 'white', stroke: 'steelBlue', 'stroke-width': 2, text: 'hello world 3 hello world 3 hello world 3'}
];

var width = $('body').width();
var height = $('body').height();

var drag = d3.behavior.drag()
  .origin(function(d) { return d; })
  .on("dragstart", dragstarted)
  .on("drag", dragged)
  .on("dragend", dragended);

function dragstarted(d) {
  d3.event.sourceEvent.stopPropagation();
  d3.select(this).classed("dragging", true);
}

function dragged(d) {
  // d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
  d.x += d3.event.dx;
  d.y += d3.event.dy;
  d3.select(this).attr("transform", function(d) {return translate(d)});
}

function dragended(d) {
  d3.select(this).classed("dragging", false);
}

var zoom = d3.behavior.zoom()
  .scaleExtent([.1, 10])
  .on('zoom', zoomed)

var svg = d3.select('body').append('svg')
  .append('g')
  .call(zoom)

var rect = svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all");

var container = svg.append('g');

function zoomed(prevScale) {
  container.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
  //Not working below. I presume scale must affect translate.
  // prevScale = prevScale || 1;
  // var invertedMousewheelScale = prevScale - (d3.event.scale - prevScale);
  // container.attr("transform", "translate(" + d3.event.translate + ") scale(" + invertedMousewheelScale + ")");
  // prevScale = d3.event.scale;
}

var nodes = container.selectAll('rect')
  .data(nodeData)

var nodeGroup = nodes.enter()
  .append('g')
  .attr('transform', function(d) {return translate(d)})
  .call(drag)

nodeGroup
  .append('rect')
  .each(function(d, i) {
    for(var key in d) {
      if(key !== 'x' && key !=='y') {
        this.setAttribute(key, d[key]);  // use .setAttribute instead of .attr
      }
    }
  })

/*
// Save for possible later use with tspan to wrap text
nodeGroup
  .append('text')
  .text(function(d) {return d.text})
*/

nodeGroup
  .append('foreignObject')
  .attr('width', function(d) {return d.width})
  .attr('height', function(d) {return d.height})
  .append('xhtml:body')
  .each(function(d, i) {
    var currText = d.text;
    $(this).html("<div style='width:" + d.width + "px;'>" + currText + "</div>")
  })

function translate(d) {
  return "translate(" + d.x + "," + d.y + ')'
}
