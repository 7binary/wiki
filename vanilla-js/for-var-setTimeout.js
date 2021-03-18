for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // WRONG ONE! 3 3 3
  });
}

for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // Solved! 0 1 2
  });
}

for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);  // Solved! 0 1 2
    });
  })(i);
}
