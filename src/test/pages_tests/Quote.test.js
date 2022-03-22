import { render, screen } from '@testing-library/react';
import Quote from '../../Pages/Quote';

describe('home component rendered as expected', () => {
  it('home component rendered as expected', () => {
    render(<Quote />);
    screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston');
  });
});
