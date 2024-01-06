import {ComponentMeta, ComponentStory} from '@storybook/react';

import SocialLoginButton from 'components/@common/Buttons/SocialLoginButton';

const meta = {
  title: 'components/Button',
  component: SocialLoginButton,
} as ComponentMeta<typeof SocialLoginButton>;

export default meta;

type Story = ComponentStory<typeof SocialLoginButton>;

const Template: Story = args => <SocialLoginButton {...args} />;

export const Kakao = Template.bind({});
Kakao.args = {
  variant: 'kakao',
};

export const Apple = Template.bind({});
Apple.args = {
  variant: 'apple',
};
