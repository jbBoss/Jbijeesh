import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  const { getByTestId } = render(<Button label="Click Me" />);
  expect(getByTestId('button')).toBeVisible();
});

test('Button is greyed out when disabled', () => {
  const { getByTestId } = render(<Button label="Click Me" disabled />);
  const button = getByTestId('button');
  expect(button).toHaveStyle('background-color: #ccc');
});
