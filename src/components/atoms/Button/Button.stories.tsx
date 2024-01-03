// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'components/atoms/Button/Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
