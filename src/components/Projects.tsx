import React, { useState } from 'react'
import TabBar from './shared/TabBar'
import Title from './Title'

const Square = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: 200,
        width: '100%',
        borderRadius: 5,
        opacity: 0.2,
      }}
    ></div>
  )
}

const Projects = () => {
  const [activeTopic, setActiveTopic] = useState('')
  return (
    <>
      <Title>My projects</Title>
      <TabBar
        topics={['All', 'Coding', 'Articles', 'Artwork']}
        activeTopic={activeTopic}
        onClick={setActiveTopic}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: 40,
          marginBottom: 80,
        }}
      >
        <Square color="#7A7A7A" />
        <Square color="#D33E3E" />
        <Square color="#6FCF97" />
        <Square color="#DCB6EB" />
        <Square color="#7ACBD7" />
        <Square color="#F3DA8D" />
      </div>
    </>
  )
}

export default Projects
