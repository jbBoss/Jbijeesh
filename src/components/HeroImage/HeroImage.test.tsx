// src/components/HeroImage/HeroImage.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  it('should render and be visible', () => {
    const { getByTestId } = render(
      <HeroImage
        imageUrl="https://example.com/image.jpg"
        heading="Test Heading"
        subheading="Test Subheading"
      />
    );
    expect(getByTestId('hero-image')).toBeVisible();
  });

  it('should apply grayscale and reduced opacity when disabled', () => {
    const { getByTestId } = render(
      <HeroImage
        imageUrl="https://example.com/image.jpg"
        heading="Disabled"
        subheading="This is disabled"
        disabled
      />
    );
    const hero = getByTestId('hero-image');
    expect(hero).toHaveStyle('filter: grayscale(100%)');
    expect(hero).toHaveStyle('opacity: 0.6');
  });
});
