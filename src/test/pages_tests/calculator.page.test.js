import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CalculatorPage from '../../Pages/CalculatorPage';

describe('Testing Calculator Page', () => {
  it('Calculator Page rendered as expected', () => {
    render(
      <Router>
        <CalculatorPage />
      </Router>,
    );
    screen.getByText("Let's do some math!");
  });
});
