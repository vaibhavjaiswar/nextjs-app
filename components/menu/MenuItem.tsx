import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"
import { MenuListType } from "../../types"
import MenuSubItem from "./MenuSubItem"

type MenuItemProps = {
  menu: MenuListType
}

function MenuItem({ menu }: MenuItemProps) {

  const [isCollapsed, setIsCollapsed] = useState(true)
  const router = useRouter()
  const isCurrentPath = router.pathname.split('/')[1] === menu.path.split('/')[1]

  return (
    <>
      {
        (0 < menu.sub.length) ? (
          <li className={`my-1 px-3 py-2 hover:underline rounded cursor-pointer select-none flex justify-between items-center ${isCurrentPath ? 'bg-slate-700 text-slate-50' : 'hover:bg-slate-50'}`} onClick={() => setIsCollapsed(!isCollapsed)}>
            {menu.label}
            {isCollapsed ? <BiCaretDown /> : <BiCaretUp />}
          </li>
        ) : (
          <Link href={menu.path}>
            <li className={`my-1 px-3 py-2 hover:underline rounded cursor-pointer select-none flex justify-between items-center ${isCurrentPath ? 'bg-slate-700 text-slate-50' : 'hover:bg-slate-50'}`}>
              {menu.label}
            </li>
          </Link>
        )
      }
      {
        0 < menu.sub.length && <MenuSubItem menu={menu} isCollapsed={isCollapsed} />
      }
    </>
  )
}

export default MenuItem
