import React from 'react'

function Button(props) {
  return (
    <button className='p-2 bg-zinc-700 rounded-lg text-slate-200 hover:bg-slate-200 hover:text-zinc-700 '>{props.children}</button>
  )
}

export default Button