import {KeyOfPalette} from 'styles/types';

export type TransactionListVariant = 'default' | 'recent';

export type GraphDataType = {y: number; label: string};

export type FirstLabelType = '수익' | '비용';

export type LabelTextColor = {
  label1TextColor: KeyOfPalette;
  label2TextColor: KeyOfPalette;
  label3TextColor: KeyOfPalette;
};
