import {ComponentStory} from '@storybook/react';
import AmountTextField from 'components/@common/TextFields/AmountTextField';

const meta = {
  title: 'components/AmountTextField',
  component: AmountTextField,
};

export default meta;

type Story = ComponentStory<typeof AmountTextField>;

const Template: Story = args => <AmountTextField {...args} />;

export const DefaultStatus = Template.bind({});
DefaultStatus.args = {
  defaultCurrentBalance: '-8500000',
};
