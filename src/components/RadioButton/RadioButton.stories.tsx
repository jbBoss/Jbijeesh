// src/components/RadioButton/RadioButton.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => {
  const [selected, setSelected] = useState(args.checked ? args.value : '');

  return (
    <RadioButton
      {...args}
      checked={selected === args.value}
      onChange={setSelected}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'radio1',
  label: 'Option 1',
  name: 'example',
  value: 'option1',
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'radio2',
  label: 'Disabled Option',
  name: 'example',
  value: 'option2',
  checked: false,
  disabled: true,
};
