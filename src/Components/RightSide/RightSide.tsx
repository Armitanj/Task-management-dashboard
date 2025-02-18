import React from 'react'
import './RightSide.css'

// Define an interface for the props
interface RightSideProps {
  content: string;
}

export default function RightSide({ content }: RightSideProps) {
  return (
    <div className='rightSideComp bg-[#F5F5F7]'>{content}</div>
  )
}
