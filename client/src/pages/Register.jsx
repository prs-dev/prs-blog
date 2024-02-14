import { Button, Label, TextInput } from 'flowbite-react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AUTH_URL } from '../Constants'
import { toast } from 'react-hot-toast'
import {useUserState, useUserDispatch, loading, success, loadError, loadingSuccess} from '../Context/UserContext'

const Register = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const state = useUserState()
  const dispatch = useUserDispatch()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      dispatch(loading())
      const res = await axios.post(`${AUTH_URL}/register`, data)
      toast.success("User registered successfully.")
      setData({
        username: '',
        email: '',
        password: ''
      })
      // toast('testing')
      dispatch(loadingSuccess())
    } catch (error) {
      // toast.error(error.message)
      dispatch(loading())
      const {response: {data: {message}}} = error
      // console.log("error", message)
      toast.error(message)
      dispatch(loadError(message))
    }
  } 

  console.log(data)
  return (
    <div className='flex items-center justify-center h-full bg-gradient-to-b from-teal-400'>
      {/* {toast.show && <Toast status={toast.status} text={toast.text}/>} */}
      {/* <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-400'>test</div> */}
      {/* <div className='bg-gradient-to-r from-teal-400 to-teal-800 h-full flex items-center justify-center'> */}
      <div className="h-[70%] w-[30%] border border-teal-700 p-10 rounded-md shadow-md flex justify-between flex-col gap-4">
        <div className="flex flex-col items-center">
        <h1 className='px-8 text-4xl font-semibold text-white p-[6px]'>Register</h1>
        <p className='text-sm text-white'>Please enter username, email, password to register</p>
        </div>
        <div className="">
        <div className='flex items-center justify-center gap-2 border-2 p-2'>
        <h1 className=' rounded-[7px] bg-gradient-to-l from-[#03858a] px-8 text-2xl font-semibold text-gray-900 p-[6px]'>Prs<span className='text-slate-100'>.dev</span></h1>
        <h1 className='text-2xl text-white'>Blog</h1>
      </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className=" flex flex-col gap-4 w-full">
        <Label>Username</Label>
        <TextInput className='w-full' value={data.username} type='text' id='username' placeholder='@' onChange={handleChange}/>
        <Label>Email</Label>
        <TextInput className='w-full' value={data.email} type='email' id='email' placeholder='name@company.com' onChange={handleChange}/>
        <Label>Password</Label>
        <TextInput className='w-full' value={data.password} type='password' id='password' placeholder='****' onChange={handleChange}/>
        </div>
        <Button isProcessing={state.loading} type='submit' gradientDuoTone='purpleToBlue' outline className='w-full self-end mt-4'>Register</Button>
        </form>
        <div className='self-center text-sm'>
          <p className='text-gray-800'>Already Registered, <Link to='/login' className='text-teal-500 underline'>Log in</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Register