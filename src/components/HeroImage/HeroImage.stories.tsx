// src/components/HeroImage/HeroImage.stories.tsx
import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    imageUrl: { control: 'text' },
    heading: { control: 'text' },
    subheading: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://i.pinimg.com/474x/66/4c/2a/664c2a7bfbb970b0aa56355bc284cfa7.jpg',
  heading: 'Welcome to the UI Library',
  subheading: 'Explore our reusable components.',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: 'https://i.pinimg.com/474x/66/4c/2a/664c2a7bfbb970b0aa56355bc284cfa7.jpg',
  heading: 'Restricted Access',
  subheading: 'This content is currently disabled.',
  disabled: true,
};
