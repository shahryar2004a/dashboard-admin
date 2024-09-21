import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Chart from '../Chart/Chart'

import { products } from '../../datas'
import PublishIcon from '@mui/icons-material/Publish'


import './Product.css'
export default function Product() {
       
    const {productID}=useParams()


     const newProduct=products.find((product)=> product.id === Number(productID))
     let sumSales=0;
     newProduct.data.map( d=>{
        sumSales+=d.sales
     })
     const averageSales= Math.round(sumSales/3,2) 
  return (
    <div className='product'>

      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
           <Link to="/newProduct">
           <button className='productAddButton'>Create</button>
           </Link>
      </div>

         <div className='productTop'>
            <div className="productTopLeft">
              <Chart title="Sale In Month" data={newProduct.data} dataKey='sales' />             
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={newProduct.avatar} alt="" className='productInfoImg' />
                     <span className='productName'>Product</span>
                </div>

                <div className='productInfoBottom'>
                  <div className="productInfoItem">
                    <div className='productInfoKey'>ID:</div>
                    <div className='productInfoValue'>{newProduct.id}</div>
                  </div>
                  <div className="productInfoItem">
                    <div className='productInfoKey'>Name:</div>
                    <div className='productInfoValue'>{newProduct.title}</div>
                  </div>
                  <div className="productInfoItem">
                    <div className='productInfoKey'>Sales:</div>
                    <div className='productInfoValue'>{averageSales}</div>
                  </div>
                  <div className="productInfoItem">
                    <div className='productInfoKey'>Active:</div>
                    <div className='productInfoValue'>{newProduct.isActive ? 'yes' : 'no'}</div>
                  </div>
                  <div className="productInfoItem">
                    <div className='productInfoKey'>In Stock:</div>
                    <div className='productInfoValue'>{newProduct.inStock ? 'yes' : 'no'}</div>
                  </div>
                </div>
            </div>
         </div>

         <div className='productBottom'>
             <form className='productForm' action="#">
                <div className='productFormLeft'>
                    <label>Product Name</label>
                    <input type="text" placeholder={newProduct.title} />

                    <label>In Stock</label>
                    <select id='inStock'>
                        <option value="yes">Yes</option>
                         <option value="no">No</option>
                    </select>

                    <label>Active</label>
                    <select id='inStock'>
                        <option value="yes">Yes</option>
                         <option value="no">No</option>
                    </select>
                </div>
                <div className='productFormRight'>
                    <div className='productUploader'>
                        <img src={newProduct.avatar} alt="" className='productUploadImg'/>
                        <label>
                        <PublishIcon/>
                        </label>
                        <input type="file" style={{display:'none'}}/>
                    </div>

                    <button className='productButton'>Upload (Edit)</button>
                </div>
             </form>
         </div>
    </div>
  )
}
