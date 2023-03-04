import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false)
  const [ loading, setLoading] = useState(true)

  const getUsers = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUsers(users);
    // console.log(users);
  };

  
  useEffect(() => {
    // getUsers();
    const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setLoading(false)
      setUsers(data)
      setError(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log("Error occured");
    }
  };
    getData();
  }, []);

  if (loading) return <h2>Loading....</h2>;

  if (error) return <h2>Error just occured</h2>;


  return (
    <>
      {/* <h3>github users</h3> */}
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
