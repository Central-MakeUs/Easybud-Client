import {ComponentStory} from '@storybook/react';
import CommonBottomSheet from 'components/@common/BottomSheet';

const meta = {
  title: 'components/BottomSheet',
  component: CommonBottomSheet,
};

export default meta;

type Story = ComponentStory<typeof CommonBottomSheet>;

const Template: Story = args => <CommonBottomSheet {...args} />;

export const DefaultBottomSheet = Template.bind({});
