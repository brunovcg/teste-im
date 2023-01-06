import { render, screen } from '@testing-library/react';
import Home from '@/pages/home/Home';

//?   Using test.only('mytest', ()=>{.....}), it will only test this one
//?   Using test.skip('mytest', ()=>{.....}), it will skip this one
//?   Describe used for grouping, can use the methods .only or .skip as well
//?   We can use Describe nested, creating sub-groups
//?   Test suites is each file, not the describe.
//?   test can be replaced for it.  ( fit => replace test.only   xit => test.skip)

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Home />);
    const textElement = screen.getByText(/home/i);
    expect(textElement).toBeInTheDocument();
  });
});

