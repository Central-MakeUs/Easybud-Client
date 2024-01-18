import {ComponentStory} from '@storybook/react';
import BottomSheet from 'components/@common/BottomSheet';
import TextField from 'components/@common/TextFields/TextField';

const meta = {
  title: 'components/BottomSheet',
  component: BottomSheet,
};

export default meta;

type Story = ComponentStory<typeof BottomSheet>;

const Template: Story = args => <BottomSheet {...args} />;

export const DefaultBottomSheet = Template.bind({});
DefaultBottomSheet.args = {
  isBottomSheetOpen: true,
  setIsBottomSheetOpen: () => {},
  children: <TextField />,
};
