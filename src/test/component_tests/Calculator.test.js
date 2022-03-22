import { render, screen } from '@testing-library/react';
import Calculator from '../../Components/Calculator';

describe('Testing Calculator Component', () => {
  it('Check if Calculator Buttons render Correctly', () => {
    render(
      <Calculator />,
    );
    screen.getByText('+');
    screen.getByText('5');
    screen.getByText('+/-');
    screen.getByText('.');
  });
});
