import React from 'react'

function Button({children, onclick}) {
  return (
    <button className='text-(--purple-200) font-bold cursor-pointer' onClick={onclick}>{children}</button>                        
  )
}

export default Button