import React, { ReactNode } from 'react'
import { Breakpoints } from '../../@types/types'
import useWindowDimensions from '../../hooks/use-window-dimensions'

const Container = ({ children }: { children: ReactNode }) => {
  const { width } = useWindowDimensions()
  return (
    <div
      style={{
        maxWidth: !!width && width > Breakpoints.Small ? 800 : 550,
        paddingLeft: !!width && width > Breakpoints.Medium ? 0 : 20,
        paddingRight: !!width && width > Breakpoints.Medium ? 0 : 20,
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
