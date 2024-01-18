import {ComponentStory} from '@storybook/react';
import TextField from 'components/@common/TextFields/TextField';

const meta = {
  title: 'components/TextField',
  component: TextField,
};

export default meta;

type Story = ComponentStory<typeof TextField>;

const Template: Story = args => <TextField {...args} />;

export const DefaultStatus = Template.bind({});
DefaultStatus.args = {
  placeholder: '이름',
  label: '이름',
};
