export function sortBy(data: any[], sortOrder?: "Ascending" | "Descending") {
  if (!data) return data;

  const sortedData = [...data];
  sortedData.sort((a: any, b: any) => {
    if (sortOrder === "Ascending") {
      if (a[sortOrder.substring(1)] < b[sortOrder.substring(1)]) {
        return -1;
      }
    }
    if (sortOrder === "Descending") {
      if (b[sortOrder.substring(1)] < a[sortOrder.substring(1)]) {
        return -1;
      }
    }
    return 0;
  });
  return sortedData;
}
