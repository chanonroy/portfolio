import React, { ReactNode } from 'react'
import { Colors } from '../@types'

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 80,
        color: Colors.dark
      }}
    >
      {children}
    </div>
  )
}

export default Title
