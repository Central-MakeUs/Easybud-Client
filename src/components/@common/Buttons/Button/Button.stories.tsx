import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from 'components/@common/Buttons/Button';

const meta = {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export default meta;

type Story = ComponentStory<typeof Button>;

const Template: Story = args => <Button {...args} />;

export const FullWidthPrimary = Template.bind({});
FullWidthPrimary.args = {
  variant: 'primary',
  children: '내용',
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  variant: 'primary',
  disabled: true,
  children: '내용',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: '내용',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: '내용',
};
