import React from 'react';
import Button from './Button';
// import { logDOMEvent } from '@storybook/blocks';



export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export const Default = (args: any) => <Button {...args} />;
Default.args = {
  label: 'Click on Me!',
  disabled: false,
  // onClick: logDOMEvent('click'),
};

export const Disabled = (args: any) => <Button {...args} />;
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};
