import React from 'react'

const ChatBox = ({url , name} ) => {
  return (
   <>
    <div className='w-full h-10 flex flex-row my-2'>
      
      <div className='h-10 w-10 rounded-full self-center' style={{
        backgroundImage:`url(${url})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}></div>
    <p className='self-center text-[#ffffffa4] ml-2 text-[10px]'>{name}</p>
    </div>
    <div className='w-full h-[1px] bg-[#534fa0]'></div>
   </>
  )
}

export default ChatBox
