import React, { ReactNode } from 'react'
import { Breakpoints } from '../../@types/types'
import useWindowSize from '../../hooks/use-window-size'

const Container = ({ children }: { children: ReactNode }) => {
  const { width } = useWindowSize()
  return (
    <div
      style={{
        maxWidth: width > Breakpoints.Small ? 800 : 550,
        paddingLeft: width > Breakpoints.Medium ? 0 : 20,
        paddingRight: width > Breakpoints.Medium ? 0 : 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  )
}

export default Container
