import {useState,useEffect} from 'react';
const url = 'http://jsonplaceholder.typicode.com/users';

export const UseEffectClass = () => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    useEffect(() => { 
    // console.log('component is mounted')
    // return () => { 
    //     console.log('component has unmounted')
    // }
     fetch(url)
      .then(res => res.json())
      .then(json =>{ 
        console.log(json)
        setData(json)
        setLoading(false)
      })
      .catch(err => { 
        setLoading(false)
        setError(true)
      })
    },[])

    if(loading) return 'is loading...'
    // if(error) return 'a client error just occurred'
  return (
    <div>
      class on use effect
      { 
       data?.map(user => ( 
        <div className="bg-gray-200 m-2" key = {user.id}>
           <h3>{user.name}</h3>
           <h3>{user.email}</h3>
           <h3>{user.username}</h3>
        </div>
       ) )
      }
    </div>
  );
}

