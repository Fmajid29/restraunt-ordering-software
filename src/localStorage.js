export const getToken = () => {
  return localStorage.getItem("access_token");
};
export const deleteToken = () => {
  localStorage.removeItem("access_token");
};
