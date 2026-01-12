import React from 'react'
import { CgSpinner } from 'react-icons/cg'

export default function Loading() {
  return (
    <div className='w-full h-dvh grid place-content-center text-xl gap-1'><CgSpinner className='animate-spin inline' /></div>
  )
}
