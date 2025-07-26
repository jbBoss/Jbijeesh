// src/components/RadioButton/RadioButton.tests.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  it('should render and be visible', () => {
    const { getByTestId } = render(
      <RadioButton
        id="test-radio"
        label="Test Radio"
        name="test"
        value="test1"
        checked={false}
        onChange={() => {}}
      />
    );
    expect(getByTestId('radio-wrapper')).toBeVisible();
  });

  it('should be greyed out and not clickable when disabled', () => {
    const { getByTestId } = render(
      <RadioButton
        id="disabled-radio"
        label="Disabled"
        name="test"
        value="disabled"
        checked={false}
        onChange={() => {}}
        disabled
      />
    );
    const wrapper = getByTestId('radio-wrapper');
    const input = getByTestId('radio-input') as HTMLInputElement;

    expect(wrapper).toHaveStyle('opacity: 0.5');
    expect(wrapper).toHaveStyle('cursor: not-allowed');
    expect(input.disabled).toBe(true);
  });
});
