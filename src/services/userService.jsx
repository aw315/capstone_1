export const getUserByEmail = async (email) => {
    const response = await fetch(`http://localhost:8088/users?email=${email}`);
  
    const data = await response.json();
    console.log(email)
    return data;
  };
  
  export const createNewUser = async (user) => {
    await fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };