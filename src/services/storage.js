export const setData = (data) => {
  localStorage.setItem("card", JSON.stringify(data));
};

export const getData = () => {
  let data = localStorage.getItem("card");
  return JSON.parse(data);
};

export const removeItem = () => {
  localStorage.removeItem("card");
};
