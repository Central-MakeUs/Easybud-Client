import {ComponentStory} from '@storybook/react';
import Calculator from 'components/@common/Calculator';

const meta = {
  title: 'components/Calculator',
  component: Calculator,
};

export default meta;

type Story = ComponentStory<typeof Calculator>;

const Template: Story = () => <Calculator />;

export const DefaultCalculator = Template.bind({});
