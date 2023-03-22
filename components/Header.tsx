import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import Menu from './menu/Menu'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuList = [
    {
      label: 'Home',
      path: '/home',
      sub: []
    }, {
      label: 'About',
      path: '/about',
      sub: []
    }, {
      label: 'UI',
      path: '/ui-elements',
      sub: [
        { label: 'Accordion', path: '/ui/accordion' },
        { label: 'Button', path: '/ui/button' },
        { label: 'Carousel', path: '/ui/carousel' },
      ]
    }, {
      label: 'Forms',
      path: '/input-elements',
      sub: []
    },
  ]

  return (
    <>
      <Menu menuList={menuList} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <header className='px-16 py-4 bg-slate-900 text-slate-50 flex justify-start items-center'>
        <button className='mr-2 px-1 py-0.5 cursor-pointer rounded hover:bg-slate-800' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BiMenu className='text-3xl' />
        </button>
        <h1 className='text-3xl'>UI Components</h1>
      </header>
    </>
  )
}

export default Header
