import React from 'react'
import { Button } from 'primereact/button'
import { InputNumber } from 'primereact/inputnumber'
import { Tag } from 'primereact/tag'
import { useState } from 'react'
export default function ProductDetails() {
  const [value, setValue] = useState(0);
  return (
    <div style={{padding: '2rem'}}>
        <p>SNEAKER COMPANY</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div >
            <div className='p-price'>
              <span className="current-price">$125.00</span>
            <Tag>50%</Tag>
            </div>
          
          <span className="original-price">$250.00</span>
        </div>
        <div className="p-add-cart" >
        <div className="quantity" >
        <InputNumber value={value} onValueChange={(e) => setValue(e.value)} showButtons buttonLayout="horizontal" style={{ width: '4rem' }} 
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
 
        </div>
        <Button className="p-button-cart" icon="pi pi-shopping-cart" label="Add to cart" />
      </div>
        </div>
       
  )
}
