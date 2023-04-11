import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { MenuListType } from '../../types'
import MenuItem from './MenuItem'

export type MenuProps = {
  menuList: MenuListType[]
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

function Menu({ menuList, isMenuOpen, setIsMenuOpen }: MenuProps) {
  return (
    <>
      <div className={`bg-slate-200 text-slate-900 shadow-xl fixed ${isMenuOpen ? '' : '-translate-x-full'} max-w-xs min-w-[24vw] h-full transition-transform`}>
        <div className='px-5 py-4 bg-slate-700 text-slate-50 flex justify-between items-center'>
          <h3 className='text-xl'>Menu</h3>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} disabled={!isMenuOpen}>
            <BiLeftArrowAlt className='text-4xl cursor-pointer hover:scale-110' />
          </button>
        </div>
        <div className='p-2 h-[90vh] overflow-y-scroll'>
          <ul>
            {
              menuList.map(menu => <MenuItem key={menu.label} menu={menu} />)
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu
