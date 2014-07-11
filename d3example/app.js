// <g> for adding text to a circle: http://stackoverflow.com/questions/13615381/d3-add-text-to-circle
// wrap text: http://bl.ocks.org/mbostock/7555321
// pan and zoom: http://bl.ocks.org/mbostock/6123708
// g pan example: http://jsfiddle.net/EwGPu/1/


var circleData = [
  {cx: 40, cy: 60, r: 10, fill: 'steelBlue', text: 'hello world'},
  {cx: 80, cy: 90, r: 10, text: 'hello world 2'},
  {cx: 120, cy: 120, r: 10, text: 'hello world 3'}
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
  // d3.select(this).attr("cx", d.cx = d3.event.x).attr("cy", d.cy = d3.event.y);
  d.cx += d3.event.dx;
  d.cy += d3.event.dy;
  d3.select(this).attr("transform", function(d) {return translate(d)});
}

function dragended(d) {
  d3.select(this).classed("dragging", false);
}

var zoom = d3.behavior.zoom()
  .scaleExtent([.1, 10])
  .on('zoom', zoomed)


var svg = d3.select('body').append('svg')
  // .attr('width', 720)  //defined in css
  // .attr('height', 360)
  .append('g')
  .call(zoom)

var rect = svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all");
  
var container = svg.append('g');

function zoomed(prevScale) {
  // prevScale = prevScale || 1;
  // var invertedMousewheelScale = prevScale - (d3.event.scale - prevScale);
  container.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
  // container.attr("transform", "translate(" + d3.event.translate + ") scale(" + invertedMousewheelScale + ")");
  // prevScale = d3.event.scale;
}

var circles = container.selectAll('circle')
  .data(circleData)

var circleGroup = circles.enter()
  .append('g')
  .attr('transform', function(d) {return translate(d)})
  .call(drag)

circleGroup
  .append('circle')
  .each(function(d, i) {
    for(var key in d) {
      if(key !== 'cx' && key !=='cy') {
        this.setAttribute(key, d[key]);  // use .setAttribute instead of .attr
      }
    }
  })

circleGroup
  .append('text')
  .text(function(d) {return d.text})


function translate(d) {
  return "translate(" + d.cx + "," + d.cy + ')'
}
