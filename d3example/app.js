var svg = d3.select('body').append('svg')
  .attr('width', 720)
  .attr('height', 120)

var circleData = [
  {cx: 40, cy: 60, r: 10, fill: 'steelBlue', text: 'hello world'},
  {cx: 80, cy: 60, r: 10},
  {cx: 120, cy: 60, r: 10}
];

var circles = svg.selectAll('circle')
  .data(circleData)
  .enter()
  .append('circle')
  .each(function(d, i) {
    for(var key in d) {
      this.setAttribute(key, d[key]);  //use .setAttribute instead of .attr
    }
  })
