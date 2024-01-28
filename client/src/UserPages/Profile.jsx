import React from 'react'
import SideBar from '../Component/SideBar'
import { useState, useEffect } from 'react'


const Profile = () => {
  const [image, setImage] = useState('');
  function handleImage (e) {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }
  function handleChange (e) {
  }


  return (
    <div>
      <div className="d-flex mt-5">
        <div className="col-sm-2">
          <SideBar/>
        </div>
        <div className="col-sm-9 ">
            <h3 className='text-center pt-5' >Update Profile </h3>
            <form action="" className='p-5 d-flex flex-wrap'>
            <div class="mb-3 col-sm-5 offset-sm-1">
                <label for="" class="form-label">Update Picture</label>
                <input
                  type="file"
                  class="form-control"
                  name="file"
                  id=""
                  placeholder=""
                  onChange={handleImage}
                />
              </div>
              <div className="btn"
              > Set Image</div>
              <div class="mb-3 col-sm-5 offset-sm-1">
                <label for="" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  placeholder="Company or Fullname"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-sm-5 offset-sm-1">
                <label for="" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name=""
                  id=""
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-sm-5 offset-sm-1">
                <label for="" class="form-label">Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  name=""
                  id=""
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-sm-5 offset-sm-1">
                <label for="" class="form-label">Update Password</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-sm-5 offset-sm-1">
                <label for="" class="form-label">Update Password</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              
              
            </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
