export function onScroll() {
  console.log('scroll');
}

export function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
