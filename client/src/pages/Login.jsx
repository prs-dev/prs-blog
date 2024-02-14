import { Button, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AUTH_URL } from '../Constants'
import { toast } from 'react-hot-toast'
import {useUserState, useUserDispatch, loading, success, loadError, loadingSuccess} from '../Context/UserContext'

const Login = () => {
  const [data, setData] = useState({
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

  console.log("satt", state)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(loading())
      const res = await axios.post(`${AUTH_URL}/login`, data)
      const {data: response} = res
      console.log("res", response)
      toast.success("User logged in successfully.")
      setData({
        email: '',
        password: ''
      })
      // toast('testing')
      dispatch(success(response.user))
      localStorage.setItem("access_token", response.token)
    } catch (error) {
      // toast.error(error.message)
      dispatch(loading())
      const { response: { data: { message } } } = error
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
      <div className="h-[60%] w-[30%] border border-teal-700 p-10 rounded-md shadow-md flex justify-between flex-col gap-4">
        <div className="flex flex-col items-center">
          <h1 className='px-8 text-4xl font-semibold text-white p-[6px]'>Login</h1>
          <p className='text-sm text-white'>Please enter email, password to login</p>
        </div>
        <div className="">
          <div className='flex items-center justify-center gap-2 border-2 p-2'>
            <h1 className=' rounded-[7px] bg-gradient-to-l from-[#03858a] px-8 text-2xl font-semibold text-gray-900 p-[6px]'>Prs<span className='text-slate-100'>.dev</span></h1>
            <h1 className='text-2xl text-white'>Blog</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className=" flex flex-col gap-4 w-full">
            <Label>Email</Label>
            <TextInput className='w-full' value={data.email} type='email' id='email' placeholder='name@company.com' onChange={handleChange} />
            <Label>Password</Label>
            <TextInput className='w-full' type='password' value={data.password} id='password' placeholder='****' onChange={handleChange} />
          </div>
          <Button isProcessing={state.loading} type='submit' gradientDuoTone='purpleToBlue' outline className='w-full self-end mt-4'>Login</Button>
        </form>
        <div className='self-center text-sm'>
          <p className='text-gray-800'>New here, <Link to='/register' className='text-teal-500 underline'>Register</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login