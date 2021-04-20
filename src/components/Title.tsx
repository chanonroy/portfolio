import React, { ReactNode } from 'react'

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 50,
      }}
    >
      {children}
    </div>
  )
}

export default Title
