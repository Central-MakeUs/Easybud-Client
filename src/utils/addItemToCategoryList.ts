export const addItemToCategoryList = <
  ItemType extends Record<PropertyKey, unknown>,
>(
  array: ItemType[],
  item: ItemType,
): ItemType[] => {
  return [...array, item];
};
