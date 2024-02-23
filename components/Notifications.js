import React from 'react'

export const Notifications = () => {

 
  return (
    <div id="notif">
      <section className='ml-[13vh] w-[145vh] h-[63vh] bottom-0 fixed rounded'>
    <h1 className="ml-2 mt-2 text-left text-xl font-bold">Notifications</h1>
    <ul>
      <li className='text-s ml-5 mt-2 text-black bg-white rounded px-2 py-6 w-auto mr-5'>
        <p>This is a Notification</p>
      </li>

      <li className='text-s ml-5 mt-7 text-black bg-white rounded px-2 py-6 w-auto mr-5'>
        <p>This is a Notification</p>
      </li>

      <li className='text-s ml-5 mt-7 text-black bg-white rounded px-2 py-6 w-auto mr-5'>
        <p>This is a Notification</p>
      </li>

      <li className='text-s ml-5 mt-7 text-black bg-white rounded px-2 py-6 w-auto mr-5'>
        <p>This is a Notification</p>
      </li>  
    </ul>
  </section>
    </div>
  )
}
