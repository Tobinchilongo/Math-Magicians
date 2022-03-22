import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Nav from '../../Components/Navigation';

describe('Navigation component render', () => {
  it('Navigation component render', () => {
    render(<Router>
      <Nav />
    </Router>);
    screen.getByText('Math Magicians');
  });
});
