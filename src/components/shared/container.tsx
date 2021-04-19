import React, { ReactNode } from 'react'
import { Breakpoints } from '../../@types/types'
import useWindowDimensions from '../../hooks/use-window-dimensions'

const Container = ({ children }: { children: ReactNode }) => {
  const { width } = useWindowDimensions()
  return (
    <div
      style={{
        maxWidth: width > Breakpoints.Small ? 800 : 550,
        // paddingLeft: width > Breakpoints.Medium ? 40 : 20,
        // paddingRight: width > Breakpoints.Medium ? 40 : 20,
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
