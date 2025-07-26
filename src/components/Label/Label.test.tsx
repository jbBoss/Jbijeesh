// src/components/Label/Label.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  it('should be visible and display correct text', () => {
    const { getByTestId } = render(<Label text="Email Address" />);
    const label = getByTestId('label');
    expect(label).toBeVisible();
    expect(label).toHaveTextContent('Email Address');
  });

  it('should be greyed out and cursor not-allowed when disabled', () => {
    const { getByTestId } = render(<Label text="Disabled" disabled />);
    const label = getByTestId('label');
    expect(label).toHaveStyle('opacity: 0.6');
    expect(label).toHaveStyle('cursor: not-allowed');
    expect(label).toHaveStyle('color: #888');
  });
});
