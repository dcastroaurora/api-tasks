export const getPagination = (size, page) => {
  const limit = size ? +size : 3;
  const offset = page > 0 ? (page - 1) * limit : 0;
  return { limit, offset };
};
