import {ComponentStory} from '@storybook/react';
import Transaction from 'components/@common/Transaction';

const meta = {
  title: 'components/Transaction',
  component: Transaction,
};

export default meta;

type Story = ComponentStory<typeof Transaction>;

const Template: Story = args => <Transaction {...args} />;

export const DefaultTransaction = Template.bind({});
DefaultTransaction.args = {
  category: 'cost',
  keyNote: '쿠팡',
  date: '2023.04.21',
  debitList: [
    {
      name: '현금',
      amount: '100,000원',
    },
    {
      name: '카카오페이',
      amount: '200,000원',
    },
    {
      name: '카카오페이',
      amount: '100,000원',
    },
  ],
  creditList: [
    {
      name: '미수금',
      amount: '100,000원',
    },
  ],
};
