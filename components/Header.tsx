import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import Menu from './menu/Menu'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuList = [
    {
      label: 'About',
      path: '/about',
      sub: []
    },
    {
      label: 'Charts',
      path: '/chart',
      sub: []
    },
    {
      label: 'Home',
      path: '/home',
      sub: []
    },
    {
      label: 'Input Elements',
      path: '/input',
      sub: [
        { label: 'Date', path: '/input/date' },
        { label: 'File', path: '/input/file' },
        { label: 'Text', path: '/input/text' },
      ]
    },
    {
      label: 'UI Elements',
      path: '/ui',
      sub: [
        { label: 'Accordion', path: '/ui/accordion' },
        { label: 'Button', path: '/ui/button' },
        { label: 'Carousel', path: '/ui/carousel' },
        { label: 'Modal', path: '/ui/modal' },
        { label: 'Tab', path: '/ui/tab' },
      ]
    },
  ]

  return (
    <>
      <Menu menuList={menuList} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <header className='px-16 py-4 bg-slate-900 text-slate-50 flex justify-start items-center'>
        <button className='mr-2 px-1 py-0.5 cursor-pointer rounded hover:bg-slate-700' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BiMenu className='text-3xl' />
        </button>
        <h1 className='text-3xl'>UI Components</h1>
      </header>
    </>
  )
}

export default Header
