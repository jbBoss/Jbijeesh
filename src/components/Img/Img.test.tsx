// src/components/Img/Img.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Img from './Img';

describe('Img Component', () => {
  it('should render the image', () => {
    const { getByTestId } = render(
      <Img src="https://example.com/test.jpg" alt="Test Image" />
    );
    const img = getByTestId('img');
    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', 'https://example.com/test.jpg');
    expect(img).toHaveAttribute('alt', 'Test Image');
  });

  it('should appear greyed out and have reduced opacity when disabled', () => {
    const { getByTestId } = render(
      <Img
        src="https://example.com/disabled.jpg"
        alt="Disabled"
        disabled
      />
    );
    const img = getByTestId('img');
    expect(img).toHaveStyle('opacity: 0.5');
    expect(img).toHaveStyle('filter: grayscale(100%)');
    expect(img).toHaveStyle('cursor: not-allowed');
  });
});
