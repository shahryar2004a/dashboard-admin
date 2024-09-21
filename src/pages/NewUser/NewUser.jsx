import React from 'react'


import  './NewUser.css'
export default function NewUser() {
  return (
    <>
    <div className='newProduct'>
    <div className='newProductTitleContainer'>
        <h1 className='newProductTitle'>New User</h1>
       <form className='newProductForm' action="#">
        <div className='left'>
              <div className='newProductFormInputContainer'>
                <label className='newProductFormLabel'>Username</label>
                <input className='newProductFormInput' type='text' placeholder='john'/>
                </div>
                <div className='newProductFormInputContainer'>
                <label className='newProductFormLabel'>Email</label>
                <input className='newProductFormInput' type='text' placeholder='john@gamil.com'/>
                </div>
                <div className='newProductFormInputContainer'>
                <label className='newProductFormLabel'>Phone</label>
                <input className='newProductFormInput' type='text' placeholder='9924517258'/>
                </div>
                <div className='newProductFormInputContainer'>
                <label className='newProductFormLabel'>Gender</label>
                
                  <div className='radioContainer'>
                  <input type="radio" name='gender' id='male' value='male' />
                 <label htmlFor="male">Male</label>

                 <input type="radio" name='gender' id='male' value='male' />
                 <label htmlFor="male">Female</label>

                 <input type="radio" name='gender' id='male' value='male' />
                 <label htmlFor="male">Other</label>            
                  </div>

       

                </div>
        </div>
       <div className='middle'>
       <div className='newProductFormInputContainer'>
                <label className='newProductFormLabel'>Full Name</label>
                <input className='newProductFormInput' type='text' placeholder='john Smith'/>
                </div>
                <div className='newProductFormInputContainer'>
                <label className='newProductFormLabel'>Password</label>
                <input className='newProductFormInput' type='text' placeholder='password'/>
                </div>
                <div className='newProductFormInputContainer'>
                <label className='newProductFormLabel'>Address</label>
                <input className='newProductFormInput' type='text' placeholder='New York/USA'/>
                </div>
                <div className='newProductFormInputContainer'>
                <label className='newProductFormLabel'>Active</label>
                <select className='newProductFormInput' id='inStock'>
                        <option value="yes">Yes</option>
                         <option value="no">No</option>
                    </select>
                </div>
       </div>
       <div className='right'>
          <div className='FormBtnContainer'>
           <button className='FormBtn'>Create</button>
          </div>
       </div>
       </form>
      </div>
    </div>

    </>
  )
}
