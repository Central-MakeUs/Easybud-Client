import {ComponentStory} from '@storybook/react';
import TextField from 'components/@common/TextField';

const meta = {
  title: 'components/TextField',
  component: TextField,
};

export default meta;

type Story = ComponentStory<typeof TextField>;

const Template: Story = args => <TextField {...args} />;

export const DefaultStatus = Template.bind({});
DefaultStatus.args = {};

export const FilledStatus = Template.bind({});
FilledStatus.args = {
  defaultValue: '입력 완료',
};
