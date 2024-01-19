import {ComponentStory} from '@storybook/react';
import KeyNote from 'components/@common/KeyNote';

const meta = {
  title: 'components/KeyNote',
  component: KeyNote,
};

export default meta;

type Story = ComponentStory<typeof KeyNote>;

const Template: Story = () => <KeyNote />;

export const DefaultKeyNote = Template.bind({});
