import {Navbar, Dropdown, Avatar, TextInput} from 'flowbite-react'
import { useLocation, Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Header = () => {
  const {pathname} = useLocation()
  return (
    <Navbar className='bg-gradient-to-l from-teal-200 to-teal-500 shadow-md border-teal-600' fluid rounded>
      <Navbar.Brand className='rounded-[7px] bg-gradient-to-l from-[#03858a]' href='https://github.com/prs-dev'>
        <h1 className='px-8 text-2xl font-semibold text-gray-900 p-[6px]'>Prs<span className='text-slate-100'>.dev</span></h1>
      </Navbar.Brand>
      <div className="mx-4 flex md:order-2 gap-2">
        <Dropdown arrowIcon={false} inline label={
          <Avatar alt='User Profile' rounded/>
        }>
          <Dropdown.Header>
            <span className='block text-sm'>user</span>
            <span className='block truncate text-sm font-medium'>user@test.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Posts</Dropdown.Item>
          <Dropdown.Item>Log Out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as='div' active={pathname === '/'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link as='div' active={pathname === '/about'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link as='div' active={pathname === '/projects'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <form className="md:flex hidden">
        <TextInput icon={FaSearch} placeholder='Search Something...'/>
      </form>
    </Navbar>
  )
}

export default Header