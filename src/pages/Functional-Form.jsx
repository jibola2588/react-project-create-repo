import {useState} from 'react'


export const FunctionalForm = () => {
//    const [email,setEmail] = useState('')
//    const [password,setPassword] = useState('')

        const [user,setUser] = useState({ 
       email :" ",
       password: '',
        })

  return (
    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto">
      <form action="" class="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4" 
      onSubmit = {e => {
        e.preventDefault();
        // console.log({email,password});
        console.log(user);
        // setEmail('')
        // setPassword('')
        setUser({ 
            email:'',
            password:''
        })
         } }
      >
        <p class="text-lg font-medium">Sign in to your account</p>
  
        <div>
          <label for="email" class="text-sm font-medium">Email</label>
  
          <div class="relative mt-1">
            <input
            // value = {email}
            value = {user.email}
            // onChange = {e => setEmail(e.target.value)}
            onChange = {e => setUser({email:e.target.value})}
              type="email"
              id="email"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
  
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
  
        <div>
          <label for="password" class="text-sm font-medium">Password</label>
  
          <div class="relative mt-1">
            <input
            // value = {password}
            value = {user.password}
             // onChange = {e => setPassword(e.target.value)}
            onChange = {e => setUser({...user,password:e.target.value})}
              type="password"
              id="password"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
            />
  
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
  
        <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
          Sign in
        </button>
  
        <p class="text-sm text-center text-gray-500">
          No account?
          <a class="underline" href="">Sign up</a>
        </p>
      </form>
    </div>
  </div>
  
  );
}

