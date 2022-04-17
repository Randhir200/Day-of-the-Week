// Wednesday
// 8

// output - Thursday

function runProgram(input) {
  input = input.trim().split('\n');
  var day = input[0].trim();
  var n = +input[1];
  var arr = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  var dayInd = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == day) {
      dayInd = i;
    }
  }
  var newDay = n % 7;
  if (newDay + dayInd < 7) {
    console.log(arr[newDay + dayInd]);
  } else {
    console.log(arr[(newDay + dayInd) % 7]);
  }
}
if (process.env.USER === '') {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
