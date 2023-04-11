import React from "react"
import { useState } from "react"

type TabsGroupProps = { children: JSX.Element | JSX.Element[] }

function Group({ children }: TabsGroupProps) {

  const [currentTab, setCurrentTab] = useState(0)

  let tabsLabel: string[] = React.Children.map(children, (child) => child.props.children[0].props.children)

  let selectedTab = null
  React.Children.forEach(children, (component, index) => {
    if (index === currentTab) {
      selectedTab = component.props.children[1].props.children
    }
  })

  return (
    <div className='my-6'>
      <div className='flex justify-start items-center'>
        {
          tabsLabel.map((tabLabel, index) => (
            <div key={tabLabel} className={`w-32 px-4 py-2 bg-slate-${index === currentTab ? '200' : '100'} truncate text-ellipsis rounded-t hover:underline hover:cursor-pointer`} onClick={() => setCurrentTab(index)} title={tabLabel}>
              {tabLabel}
            </div>
          ))
        }
      </div>
      <div className={`px-4 py-2 bg-slate-200 rounded-b rounded-tr ${currentTab !== 0 && ' rounded-tl'}`}>
        <div>
          {selectedTab}
        </div>
      </div>
    </div>
  )
}

type TabProps = { children: JSX.Element[] }

function Tab({ children }: TabProps) {
  return (
    <>{children}</>
  )
}

type TabLabelProps = { children: string }

function Label({ children }: TabLabelProps) {
  return (
    <>{children}</>
  )
}

type TabContentProps = { children: JSX.Element }

function Content({ children }: TabContentProps) {
  return (
    <>{children}</>
  )
}

export default { Group, Tab, Label, Content }
