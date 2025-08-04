export const sortedListByOrder = (order: string) => (arr: any) => arr.sort((a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return order === 'desc' ? -1 : 1;
  }
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return order === 'desc' ? 1 : -1;
  }
  return 0;
});