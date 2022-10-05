import React, { useEffect, useState } from 'react'

function Nav() {

  const [show, setShow] = useState(false)

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  },[])

  return (
    <div>
      <div className={`flex w-full justify-between px-6 z-1 p-3  items-center fixed transition-all ease-out duration-[800ms] ${show && "bg-gray-900"}`}>
      <img className='w-[8rem]' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />

      <img className='w-[3rem] h-[3rem] cursor-pointer' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU' alt=''/>
      </div>
      
      
    </div>
  )
}

export default Nav