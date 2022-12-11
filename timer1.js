const timer = function() {
  const arr = process.argv;
  const newArr = arr.slice(2).map(x => Number(x)).filter(x => x >= 0);

  if (arr.length === 2 || newArr.length === 0) {
    return;
  }
  
  for (const num of newArr) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, num * 1000);
  }
};

timer();