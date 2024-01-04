import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from 'components/Button';

const meta = {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export default meta;

type Story = ComponentStory<typeof Button>;

const Template: Story = args => <Button {...args} />;

export const Button1 = Template.bind({});
Button1.args = {
  variant: 'primary',
  fullWidth: true,
  isActive: true,
  children: '내용',
};

export const Button2 = Template.bind({});
Button2.args = {
  variant: 'primary',
  fullWidth: true,
  isActive: false,
  children: '내용',
};

export const Button3 = Template.bind({});
Button3.args = {
  variant: 'primary',
  fullWidth: false,
  isActive: true,
  children: '내용',
};

export const Button4 = Template.bind({});
Button4.args = {
  variant: 'secondary',
  fullWidth: false,
  isActive: true,
  children: '내용',
};
