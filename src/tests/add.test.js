const add = (a, b) => a+b+1;

test('should add two numbers', ()=> {
  const result = add(3,5);
  expect(result).toBe(8);
}); 