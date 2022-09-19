import {useState} from 'react'


export const FunctionalForm = () => {
        const [user,setUser] = useState({ 
          email:'',
          password:'',
          firstname:'',
          lastname:'',
          phone_number:'',
          date_of_birth:'',
          username:'',
          role:'',
        })

  return (
    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto">
      <form action="" class="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4" 
      onSubmit = {e => {
        e.preventDefault();
      
        console.log(user);

        fetch("https://staging.netvaluepay.com/api/v1/auth/signup/",{ 
          method:"POST",
          body:JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(res => res.json())
        .then(data => console.log(data))
      
        // setUser({ 
        //     email:'',
        //     password:'',
        //     firstname:'',
        //     lastname:'',
        //     phone_number:'',
        //     date_of_birth:'',
        //     username:'',
        //     role:'',
        // })
         } }
      >
        <p class="text-lg font-medium">Sign in to your account</p>
  
        <div>
          <label for="email" class="text-sm font-medium">Email</label>
  
          <div class="mt-1">
            <input
            value = {user.email}
            onChange = {e => setUser({email:e.target.value})}
              type="email"
              id="email"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
  
            
          </div>
        </div>
        <div>
          <label for="email" class="text-sm font-medium">firstName</label>
  
          <div class="mt-1">
            <input
            value = {user.firstname}
            onChange = {e => setUser({...user,firstname:e.target.value})}
              type="text"
              id="firstname"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
  
            
          </div>
        </div>
        <div>
          <label for="email" class="text-sm font-medium">lastname</label>
  
          <div class="mt-1">
            <input
            value = {user.lastname}
            onChange = {e => setUser({...user,lastname:e.target.value})}
              type="text"
    
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
  
            
          </div>
        </div>
        <div>
          <label for="email" class="text-sm font-medium">username</label>
  
          <div class="mt-1">
            <input
            value = {user.username}
            onChange = {e => setUser({...user,username:e.target.value})}
              type="text"
           
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
  
            
          </div>
        </div>
        <div>
          <label for="email" class="text-sm font-medium">phone number</label>
  
          <div class="mt-1">
            <input
            value = {user.phone_number}
            onChange = {e => setUser({...user,phone_number:e.target.value})}
              type="text"
           
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
  
            
          </div>
        </div>
        <div>
          <label  class="text-sm font-medium">D.o.b</label>
  
          <div class="mt-1">
            <input
            value = {user.date_of_birth}
            onChange = {e => setUser({...user,date_of_birth:e.target.value})}
              type="text"
             
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
  
            
          </div>
        </div>
        <div>
          <label for="email" class="text-sm font-medium">role</label>
  
          <div class="mt-1">
            <input
            value = {user.role}
            onChange = {e => setUser({...user,role:e.target.value})}
              type="text"
         
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
  
            
          </div>
        </div>
  
        <div>
          <label for="password" class="text-sm font-medium">Password</label>
  
          <div class=" mt-1">
            <input
            value = {user.password}
            onChange = {e => setUser({...user,password:e.target.value})}
              type="password"
              id="password"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
            />
          </div>
        </div>
  
        <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
          Sign in
        </button>

      </form>
    </div>
  </div>
  
  );
}


