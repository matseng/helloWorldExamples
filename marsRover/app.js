// The first line contains integer N, the number of bytes in the original file.
// The second line contains integer L, the latency of the connection in seconds.
// The third line contains integer B, the bandwidth of the connection in bytes per second.
// The fourth line contains integer C, the number of chunks.
// C lines follow, each formatted as A,B, with integer A being the byte index of the start of the chunk, and integer B being the byte index of the end of the chunk. These are zero-indexed byte intervals [A, B), meaning that they contain all byte indices i, such that A <= i < B.
var input1 = {
  N: 2000,
  L: 15,
  B: 10,
  C: 7,
  chunks: [
    [0,200],
    [200,400],
    [400,600],
    [600,800],
    [800,1000],
    [1000,2000],
    [0,1800]],
  solution: null
};

var input2 = {
  N: 2000,
  L: 5,
  B: 10,
  C: 7,
  chunks: [
    [0,200],
    [200,400],
    [400,600],
    [600,800],
    [800,1000],
    [1000,2000],
    [0,1800]],
  solution: null
}

calculateMinimumDownloadTime(input1);
calculateMinimumDownloadTime(input2);
console.log('Expect minimum download time for input1 to equal 340s: ', input1.solution.time, input1.solution.time === 340);
console.log('Expect minimum download time for input2 to equal 260s: ', input2.solution.time, input2.solution.time === 340);

/*
Recursive method to find the download time of subsets of chunks
*/

function calculateMinimumDownloadTime(input) {
  var solutions = [];
  var time;
  var recur = function(result, bag, index) {
    var length = bag.length;
    for(var i = index; i < length; i++) {
      var chunk = bag[i];
      if((result.length === 0 && chunk[0] === 0) || doesOverlapOnce(getLastElement(result), chunk)) {
        result.push(chunk);
        if(getLastElement(result)[1] === input.N){
          time = getTotalTransferTime(input, result);
          // console.log("  " + time);
          solutions.push({'chunks': result.slice(), 'time': time});
        } else if (bag.length > 0) {
          recur(result, bag, i + 1);
        }
        result.pop();
      }
    }
  }
  sortChunks(input.chunks);
  recur([], input.chunks, 0);
  sortByMinimumTime(input, solutions);
};

/*
HELPER METHODS:
*/

function sortByMinimumTime(input, solutions) {
  solutions.sort(function(a, b){
    return a.time > b.time;  //sorts in ascending order
  });
  input.solution = solutions[0] || null;
};

function sortChunks(arr) {
  arr.sort(function(a, b) {
    var a0 = a[0];
    var b0 = b[0];
    return b0 < a0;  //sorts is ascending order
  });
};

function doesOverlapOnce(subject, target) {
  if(!subject || !target) return false;
  var subjectTail = subject[0];
  var subjectHead = subject[1];
  var targetTail = target[0];
  var targetHead = target[1];
  if(subjectTail < targetTail && targetTail <= subjectHead && subjectHead < targetHead) {
    return true;
  }
  return false;
}

function getLastElement(arr) {
  return arr[arr.length - 1];
};

function getTotalTransferTime(input, chunks) {
  var latencyDuration, bandwidthTransferDuration;
  latencyDuration = 2 * input.L * chunks.length;
  bandwidthTransferDuration = getTotalImageSize(chunks) / input.B;
  return latencyDuration + bandwidthTransferDuration;
};

function getTotalImageSize(chunks) {
  var sum = 0;
  for(var i = 0; i < chunks.length; i++) {
    sum = sum + (chunks[i][1] - chunks[i][0]);
  }
  return sum;
};

