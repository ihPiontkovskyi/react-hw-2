export const StudentsManager = ({
  items,
  sortBy,
  order,
  children: render,
  search,
  searchField,
}) => {
  const nextItems = items
    .filter(item => String(item[searchField]).includes(search))
    .sort((a, b) => (a[sortBy] > b[sortBy]) * (order === 'desc' ? -1 : 1));

  return render(nextItems);
};

export default StudentsManager;
