import {RecoilRoot} from 'recoil';
import {ComponentStory} from '@storybook/react';
import SelectForm from 'components/@common/SelectForm';

const meta = {
  title: 'components/SelectForm',
  component: SelectForm,
};

export default meta;

type Story = ComponentStory<typeof SelectForm>;

const Template: Story = args => (
  <RecoilRoot>
    <SelectForm {...args} />
  </RecoilRoot>
);

export const GraySelectForm = Template.bind({});
GraySelectForm.args = {
  label: '소분류',
  placeholder: '소분류를 선택하세요',
};

export const PrimarySelectForm = Template.bind({});
PrimarySelectForm.args = {
  label: '대분류',
  placeholder: '대분류를 선택하세요',
  variant: 'primary',
};
