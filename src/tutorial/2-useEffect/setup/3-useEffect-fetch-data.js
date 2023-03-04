import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(users)
        console.log(data);
        setLoading(false);
        setUsers(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(`{${err}
        'Internet error occured'`);
      });
  }, []);

  // useEffect(()=>{
  //   fetch()
  // })
  if (loading){ console.log("Loading in progress");
  return <h2>Loading...</h2>;}

  if (error) return <h2>Error fetching data</h2>;
  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { login, id } = user;
          return (
            <li key={id}>
              <img src={user.avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={user.html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
