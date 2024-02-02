export type DebitCreditEntity = {
  accountId: number;
  accountType: {
    typeName: string;
    typeState: string;
  };
  primaryCategoryId: number;
  primaryCategoryContent: string;
  secondaryCategoryId: number;
  secondaryCategoryContent: string;
  tertiaryCategoryId: number;
  tertiaryCategoryContent?: string | null;
  amount: number;
};
