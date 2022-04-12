export const searchTable = (searchAble, searchQuery) => {
  // console.log(searchQuery);
  // const results = searchAble.filter((item) => {
  // var key = [item.customerDetails.metadata.name];
  // var key = [item.orderNo];
  // searchAble.filter(
  // (item) => item.orderNo.toString() == searchQuery.toLowerCase();
  // );
  const tableColumns = ["orderNo"];

  const results = searchAble.filter((item) =>
    tableColumns.some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchQuery.toString().toLowerCase())
    )
  );

  // console.log(key);

  // });
  return results;
};
