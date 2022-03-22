import { render, screen } from '@testing-library/react';
import Quote from '../../Pages/Quote';

describe('Testing Quote Page', () => {
  it('Check if Quote Renders Correctly', () => {
    render(<Quote />);
    screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston');
  });
});
