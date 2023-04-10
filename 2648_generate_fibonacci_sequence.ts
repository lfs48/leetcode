function* fibGenerator(): Generator<number, any, number> {
    let a = 0;
    let b = 1;
  while (true) {
    yield a;
    let temp = a;
    a = a + b;
    b = temp;
  }
};