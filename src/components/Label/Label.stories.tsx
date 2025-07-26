// src/components/Label/Label.stories.tsx
import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Label from './Label';


interface LabelProps {
  text: string;
  htmlFor: string;
  disabled?: boolean;
}

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    htmlFor: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};


const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Username',
  htmlFor: 'username',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Password',
  htmlFor: 'password',
  disabled: true,
};
