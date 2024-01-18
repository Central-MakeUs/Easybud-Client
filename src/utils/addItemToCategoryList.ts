export const addItemToCategoryList = <ItemType>(
  array: ItemType[],
  item: ItemType,
): ItemType[] => {
  return [...array, item];
};
