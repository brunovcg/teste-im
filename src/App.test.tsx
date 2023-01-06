import { render, screen } from '@testing-library/react';
import Home from '@/pages/home/Home';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Home />);
    const textElement = screen.getByText(/home/i);
    expect(textElement).toBeInTheDocument();
  });
});
