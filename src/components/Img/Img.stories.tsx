// src/components/Img/Img.stories.tsx
import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Img from './Img';


interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
}

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};


const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.shutterstock.com/image-photo/closeup-portrait-fluffy-purebred-cat-600nw-2447243735.jpg',
  alt: 'Placeholder image',
  width: '300px',
  height: '200px',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://www.shutterstock.com/image-photo/closeup-portrait-fluffy-purebred-cat-600nw-2447243735.jpg',
  alt: 'Disabled image',
  width: '300px',
  height: '200px',
  disabled: true,
};
