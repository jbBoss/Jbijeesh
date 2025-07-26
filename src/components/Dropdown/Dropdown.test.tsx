// src/components/Dropdown/Dropdown.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const options = ['One', 'Two', 'Three'];

  it('should be visible on the screen', () => {
    const { getByTestId } = render(
      <Dropdown
        options={options}
        selected="One"
        onChange={() => {}}
      />
    );
    expect(getByTestId('dropdown')).toBeVisible();
  });

  it('should be greyed out and unclickable when disabled', () => {
    const { getByTestId } = render(
      <Dropdown
        options={options}
        selected="Two"
        onChange={() => {}}
        disabled
      />
    );
    const dropdown = getByTestId('dropdown');
    expect(dropdown).toHaveStyle('background-color: #f0f0f0');
    expect(dropdown).toHaveStyle('cursor: not-allowed');
  });
});
