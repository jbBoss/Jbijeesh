// src/components/Text/Text.stories.tsx
import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Text from './Text';


interface TextProps {
  content: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
};


const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is some sample text.',
  size: 'medium',
  disabled: false,
};

export const LargeText = Template.bind({});
LargeText.args = {
  content: 'This is large text.',
  size: 'large',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'This text is disabled.',
  size: 'medium',
  disabled: true,
};
