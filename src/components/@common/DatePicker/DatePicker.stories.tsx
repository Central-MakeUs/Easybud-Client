import {ComponentStory} from '@storybook/react';
import DatePicker from 'components/@common/DatePicker';

const meta = {
  title: 'components/DatePicker',
  component: DatePicker,
};

export default meta;

type Story = ComponentStory<typeof DatePicker>;

const Template: Story = () => <DatePicker />;

export const DefaultDatePicker = Template.bind({});
