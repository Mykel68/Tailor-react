import React from 'react'
import SideBar from '../Component/SideBar'


const Inbox = () => {
  return (
    <div>
      <div className="d-flex mt-5">
        <div className="col-sm-2">
          <SideBar/>
        </div>
        <div className="col-sm-10">
            <h3 className='text-center pt-5'>Messages</h3>
        </div>
      </div>
    </div>
  )
}

export default Inbox
