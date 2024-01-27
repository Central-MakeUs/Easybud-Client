import {ComponentStory} from '@storybook/react';
import DefaultTextField from 'components/@common/TextFields/DefaultTextField';

const meta = {
  title: 'components/DefaultTextField',
  component: DefaultTextField,
};

export default meta;

type Story = ComponentStory<typeof DefaultTextField>;

const Template: Story = args => <DefaultTextField {...args} />;

export const DefaultStatus = Template.bind({});
DefaultStatus.args = {
  placeholder: '이름',
  label: '이름',
};
