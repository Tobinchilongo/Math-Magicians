import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../../Components/Navigation';

describe('Navigation component render', () => {
  it('Navigation component render', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    screen.getByText('Math Magicians');
  });
});
