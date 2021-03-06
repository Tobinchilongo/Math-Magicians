// import { render, screen } from '@testing-library/react';
import operate from '../Logic.js/Operate';

describe('Testing Operate.js', () => {
  it('should sum two numbers expect "11"', () => {
    const sum = operate(6, 5, '+');
    expect(sum).toMatch('11');
  });
  it('should multiple two numbers expect "1035"', () => {
    const multiple = operate(23, 45, 'x');
    expect(multiple).toMatch('1035');
  });
  it('substract two numbers expect "-22"', () => {
    const multiple = operate(23, 45, '-');
    expect(multiple).toMatch('-22');
  });
  it('should divid two numbers expect "100"', () => {
    const multiple = operate(4500, 45, '÷');
    expect(multiple).toMatch('100');
  });
  it('Can not divided by zero', () => {
    const multiple = operate(45, 0, '÷');
    expect(multiple).toMatch("Can't divide by 0.");
  });
  it('calculate modulo of two numbers', () => {
    const mod = operate(44, 5, '%');
    expect(mod).toMatch('4');
  });
  it('should display Unknown operation ', () => {
    expect(() => operate(45, 56, '&')).toThrow(/Unknown operation '&'/);
  });
});
