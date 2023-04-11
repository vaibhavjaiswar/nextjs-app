import Link from "next/link"
import { useRouter } from "next/router"
import { useRef } from "react"
import { MenuListType } from "../../types"

type MenuSubItemProps = {
  menu: MenuListType
  isCollapsed: boolean
}

function MenuSubItem({ menu, isCollapsed }: MenuSubItemProps) {

  const div = useRef<HTMLDivElement>(null)
  const router = useRouter()

  return (
    <div ref={div} style={{ height: isCollapsed ? '0px' : `${div.current?.scrollHeight}px` }} className='ml-4 overflow-hidden transition-all'>
      {
        menu.sub.map(submenu => (
          <Link href={submenu.path} key={submenu.path}>
            <li className={`my-1 px-3 py-2 hover:underline rounded cursor-pointer select-none flex justify-between items-center ${(router.pathname === submenu.path) ? 'bg-slate-500 text-slate-50' : 'hover:bg-slate-50'}`}>{submenu.label}</li>
          </Link>
        ))
      }
    </div>
  )
}

export default MenuSubItem
