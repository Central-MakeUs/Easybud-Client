import {ComponentStory} from '@storybook/react';
import SelectForm from 'components/@common/SelectForm';

const meta = {
  title: 'components/SelectForm',
  component: SelectForm,
};

export default meta;

type Story = ComponentStory<typeof SelectForm>;

const Template: Story = args => <SelectForm {...args} />;

export const DefaultSelectForm = Template.bind({});
DefaultSelectForm.args = {
  label: '대분류',
  placeholder: '선택하세요',
  options: [
    {name: '현금', id: '1'},
    {name: '보통예금', id: '2'},
    {name: '정기예금', id: '3'},
    {name: '유가증권', id: '4'},
    {name: '기타유동자산', id: '5'},
    {name: '유형자산', id: '6'},
    {name: '기타비유동자산', id: '7'},
    {name: '항목 추가하기', id: '8'},
  ],
};
