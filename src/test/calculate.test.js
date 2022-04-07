import calculate from '../Logic.js/Calculate';

describe('Testing Calculate.js', () => {
  test('on AC Pressed', () => {
    expect(calculate({
      total: 9,
      next: 4,
      operation: '+',
    }, 'AC')).toEqual(
      {
        total: null,
        next: null,
        operation: null,
      },
    );
  });

  test('A number is pressed', () => {
    const { next } = calculate({ total: null, next: null, operation: null }, '9');
    expect(next).toEqual('9');
  });

  test('Add two numbers', () => {
    const { total } = calculate({ total: 9, next: 6, operation: '+' }, '=');
    expect(total).toEqual('15');
  });

  test('Subtract two numbers', () => {
    const { total } = calculate({ total: 9, next: 6, operation: '-' }, '=');
    expect(total).toEqual('3');
  });

  test('Multiply two numbers', () => {
    const { total } = calculate({ total: 9, next: 6, operation: 'x' }, '=');
    expect(total).toEqual('54');
  });

  test('Divide two numbers', () => {
    const { total } = calculate({ total: 9, next: 3, operation: '÷' }, '=');
    expect(total).toEqual('3');
  });

  test('Change Sign', () => {
    const { next } = calculate({ total: null, next: 6, operation: null }, '+/-');
    expect(next).toEqual('-6');
  });
});
