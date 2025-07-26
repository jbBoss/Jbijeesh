// Card.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('should be visible on the screen', () => {
    const { getByTestId } = render(
      <Card
        title="Test Title"
        description="Test description"
        imageSrc="https://placehold.co/150x100"
      />
    );
    expect(getByTestId('card')).toBeVisible();
  });

  it('should have reduced opacity and no interaction when disabled', () => {
    const { getByTestId } = render(
      <Card
        title="Disabled Card"
        description="Disabled state"
        imageSrc="https://placehold.co/150x100?text=Disabled"
        disabled
      />
    );
    const card = getByTestId('card');
    expect(card).toHaveStyle('opacity: 0.5');
    expect(card).toHaveStyle('pointer-events: none');
  });
});
