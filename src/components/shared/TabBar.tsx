import React from 'react'

export default function TabBar({
  topics,
  activeTopic,
  onClick,
}: {
  topics: string[]
  activeTopic: string
  onClick: (topic: string) => void
}) {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginBottom: 60 }}
    >
      {topics.map((topic, idx) => {
        const isActive = topic === activeTopic
        return (
          <div
            key={idx}
            onClick={() => onClick(topic)}
            style={{
              marginRight: 10,
              marginLeft: 10,
              padding: '5px 20px',
              cursor: 'pointer',
              border: '1.5px solid transparent',
              userSelect: 'none',
              ...(isActive
                ? {
                    border: '1.5px solid #D7D7D7',
                    borderRadius: 50,
                  }
                : {}),
            }}
          >
            {topic}
          </div>
        )
      })}
    </div>
  )
}
