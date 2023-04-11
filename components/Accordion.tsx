import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

type AccordionContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AccordionContext = createContext<AccordionContextType>({ isOpen: false, setIsOpen: () => console.log('Open/Close Accordion') })

type AccordionProps = { children: JSX.Element[] }

function Accordion({ children }: AccordionProps) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      <div className='rounded overflow-hidden shadow'>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

type AccordionTitleProps = { children: string }

Accordion.Title = function ({ children }: AccordionTitleProps) {

  const { isOpen, setIsOpen } = useContext(AccordionContext)

  return (
    <div className='px-4 py-2 bg-slate-900 text-slate-50 flex justify-between items-center select-none cursor-pointer' onClick={() => setIsOpen(isOpen => !isOpen)}>
      <h4>{children}</h4>
      {isOpen ? <BiMinus /> : <BiPlus />}
    </div>
  )
}

type AccordionContentProps = { children: JSX.Element | JSX.Element[] }

Accordion.Content = function ({ children }: AccordionContentProps) {

  const { isOpen } = useContext(AccordionContext)
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (element.current) {
      element.current.style.height = `${isOpen ? element.current.scrollHeight : 0}px`
    }
  }, [isOpen])

  return (
    <div ref={element} className='overflow-hidden transition-all'>
      <div className='px-4 py-2 bg-slate-200'>{children}</div>
    </div>
  )
}

export default Accordion
