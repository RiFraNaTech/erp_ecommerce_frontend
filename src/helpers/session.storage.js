export const setUserToken = (userToken) => {
  if (!userToken) return;
  localStorage.setItem("token", userToken);
};

export const getUserToken = () => {
  const tokenString = localStorage.getItem("token");
  return tokenString;
};
