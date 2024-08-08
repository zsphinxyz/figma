import React from 'react'

export default function Header({text1, text2}: {text1:string, text2:string}) {
  return (
    <header className="relative w-fit mx-auto px-3 pb-2 mb-8 cursor-default">
      <h1 className="text-3xl font-extrabold text-center"> <span className="text-foreground">{text1}</span> <span className="text-red-500">{text2}</span> </h1>
      <div className="absolute bottom-0 w-3/5 h-0.5 right-1/4 bg-foreground" />
      <div className="absolute -bottom-2 w-3/5 h-0.5 left-1/4 bg-red-500" />
  </header>
  )
}
