// Card.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';


import Card from './Card';
import { CardProps } from './Card.types';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Mountain View',
    description: 'A beautiful scenic view of the mountains during sunrise.',
    imageSrc: 'https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2012/09/funny-baby-faces.jpg',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Locked Card',
    description: 'This card is disabled.',
    imageSrc: 'https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2012/09/funny-baby-faces.jpg',
    disabled: true,
  },
};
