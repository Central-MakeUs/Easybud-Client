import {ComponentStory} from '@storybook/react';
import TextField from 'components/@common/TextField';

const meta = {
  title: 'component/TextField',
  component: TextField,
};

export default meta;

type Story = ComponentStory<typeof TextField>;

const Template: Story = args => <TextField {...args} />;

export const DefaultStatus = Template.bind({});
DefaultStatus.args = {
  value: '',
};

export const FilledStatus = Template.bind({});
FilledStatus.args = {
  value: '입력 완료',
};
