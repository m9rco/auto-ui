import cn from 'classnames'
import React, { cloneElement, FC } from 'react'
import './style.css'

import { Report } from '../utils'

export interface TabsItemProps {
  active?: boolean
  className?: string
  onClick?: (value?: string) => void
  value?: string
  [otherProps: string]: any
}

const TabsItem: FC<TabsItemProps> = props => {
  const { active, className, onClick, value, ...otherProps } = props
  const css = cn(
    'x-tabs__item',
    {
      'x-tabs--active': props.active
    },
    props.className
  )

  return (
    <Report
      {...otherProps}
      className={css}
      onClick={() => props.onClick && props.onClick(value)}
    >
      {props.children}
    </Report>
  )
}

export interface TabsProps {
  className?: string
  active?: string
  onClick?: (value?: string) => void
}

const Tabs: FC<TabsProps> & {
  Item: FC<TabsItemProps>;
} = props => {
  const { className, children, active, onClick, ...otherProps } = props
  const composeClassName = cn('x-tabs', className)

  let activeOffset = -2

  let composeChildren: any[] = []
  if (children) {
    composeChildren = composeChildren.concat(children)
  }

  composeChildren = composeChildren.map((res, index) => {
    let act =
      props.hasOwnProperty('active') && res.props.value === props.active
    if (act) {
      activeOffset = index
    }
    return cloneElement(res, {
      active: act,
      key: index,
      value: res.props.value,
      onClick: props.onClick
    })
  })

  const len = composeChildren.length

  return (
    <div {...otherProps} className={composeClassName}>
      <sub
        className="x-tabs__line"
        style={{
          width: 100 / len + '%',
          WebkitTransform: 'translate(' + activeOffset * 100 + '%,0)'
        }}
      />
      {composeChildren}
    </div>
  )
}

Tabs.Item = TabsItem

export default Tabs
