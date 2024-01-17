import {ComponentStory} from '@storybook/react';
import ProgressStep from 'components/@common/ProgressStep';

const meta = {
  title: 'components/ProgressStep',
  component: ProgressStep,
};

export default meta;

type Story = ComponentStory<typeof ProgressStep>;

const Template: Story = args => <ProgressStep {...args} />;

export const Step1 = Template.bind({});
Step1.args = {
  stepCount: 5,
  currentStep: 1,
};

export const Step3 = Template.bind({});
Step3.args = {
  stepCount: 5,
  currentStep: 3,
};
