export const loginUser = async (credentials) => {
  return await (
    await fetch("http://localhost:5000/api/v1/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
  ).json();
};
