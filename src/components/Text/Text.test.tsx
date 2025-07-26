// src/components/Text/Text.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  it('should be visible with correct content', () => {
    const { getByTestId } = render(<Text content="Hello, world!" />);
    const text = getByTestId('text');
    expect(text).toBeVisible();
    expect(text.textContent).toBe('Hello, world!');
  });

  it('should be greyed out and have not-allowed cursor when disabled', () => {
    const { getByTestId } = render(<Text content="Disabled" disabled />);
    const text = getByTestId('text');
    expect(text).toHaveStyle('opacity: 0.6');
    expect(text).toHaveStyle('cursor: not-allowed');
    expect(text).toHaveStyle('color: #999');
  });
});
