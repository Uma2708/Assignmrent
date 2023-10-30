import React from 'react'

export default function UpdateUser() {
  return (
    <div><div>
    <form >
      <div>
  <div>
      <label htmlFor='fname'> First Name
      <input type="text" placeholder='first name'/>
      </label>
  </div>
  <div>
      <label htmlFor='lname'> Last Name:
      <input type="text" placeholder='last name'/></label>
  </div>
  <div>
      <label htmlFor='email'> Email:
      <input type="email" placeholder='Enter email'/></label>
  </div>
  <div>
      <label htmlFor='phone'> Phone No.:
      <input type="tel" placeholder='Phone Number'/></label>
  </div>
  <div>
      <label htmlFor='project'> Project:
      <input type="text" placeholder='Project'/></label>
  </div>
 <div>
  <input type="submit" value="create User"/>
 </div>
  </div>
  </form>
</div></div>
  )
}
