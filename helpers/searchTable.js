export const searchTable = (searchAble, searchQuery) => {
  console.log(searchQuerys);
  const results = searchAble.filter((item) => {
    var key = [item.customerDetails.metadata.name];
    searchAble.some(() =>
      key[0].toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return results.length > 0 ? results : searchAble;
};
