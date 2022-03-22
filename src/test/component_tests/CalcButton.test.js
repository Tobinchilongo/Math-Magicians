import renderer from 'react-test-renderer';
import React from 'react';
import CalcButton from '../../Components/CalculatorBtn';
import calculate from '../../Logic.js/Calculate';

describe('Testing Calculator Button', () => {
  test('Click a Button on Calculator', () => {
    const calcObj = {
      total: 0,
      next: null,
      operation: null,
    };

    const tree = renderer
      .create(<CalcButton text="9" onClick={() => calculate(calcObj, '9')} mathObj={calcObj} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
