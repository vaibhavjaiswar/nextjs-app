import Link from "next/link"
import { useEffect, useRef } from "react"
import { MenuListType } from "../../types"

type MenuSubItemProps = {
  menu: MenuListType
  isCollapsed: boolean
}

function MenuSubItem({ menu, isCollapsed }: MenuSubItemProps) {

  const div = useRef<HTMLDivElement>(null)

  return (
    <div ref={div} style={{ height: isCollapsed ? '0px' : `${div.current?.scrollHeight}px` }} className='ml-4 overflow-hidden transition-all'>
      {
        menu.sub.map(submenu => (
          <Link href={submenu.path} key={submenu.path}><li className='my-1 p-2 hover:bg-slate-100 rounded cursor-pointer'>{submenu.label}</li></Link>
        ))
      }
    </div>
  )
}

export default MenuSubItem
