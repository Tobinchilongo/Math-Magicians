import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../../Components/Navigation';

describe('Testing navigation Component', () => {
  it('Navigation component render', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    screen.getByText('Math Magicians');
  });
});
