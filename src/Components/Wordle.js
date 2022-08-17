import React from 'react'
import { useEffect } from 'react'
import useWordle from '../Hooks/useWordle'

export default function Wordle({solution}) {
    const {currentGuess, handleKeyUp} = useWordle(solution)

    useEffect(() => {
       window.addEventListener('keyup', handleKeyUp)
       
       return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])
  return (
    <div>current guess - {currentGuess}</div>
  )
}