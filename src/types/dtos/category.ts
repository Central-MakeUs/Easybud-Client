export type CategoryListDTO = {
  primaryCategoryId: number;
  primaryCategoryContent: string;
  secondaryCategoryId: number;
  secondaryCategoryContent: string;
  tertiaryCategoryId: number;
  tertiaryCategoryContent: string;
  isDefault: boolean;
}[];
