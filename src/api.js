export const getApi = async (data) => {
  let res = await fetchData();
  return await res.filter((item) => data.includes(item.id + ""));
};

const fetchData = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [];
    });
};
