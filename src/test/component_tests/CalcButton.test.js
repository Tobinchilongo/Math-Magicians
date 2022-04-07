import React from 'react';
import { render, screen } from '@testing-library/react';
import CalcButton from '../../Components/CalculatorBtn';
import calculate from '../../Logic.js/Calculate';

describe('Testing Calculator Button', () => {
  test('Check if a single Calculator Button renders Correctly', () => {
    const calcObj = {
      total: null,
      next: null,
      operation: null,
    };

    render(
      <CalcButton text="9" onClick={() => calculate(calcObj, '9')} mathObj={calcObj} />,
    );
    screen.getByText('9');
  });
});
