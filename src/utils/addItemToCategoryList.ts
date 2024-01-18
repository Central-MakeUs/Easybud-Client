export const addItemToCategoryList = <ItemType extends string>(
  array: ItemType[],
  item: ItemType,
): ItemType[] => {
  return [...array, item];
};
