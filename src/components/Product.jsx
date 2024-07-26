import React from 'react'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import ProductImage from './ProductImage'
import ProductDetails from './ProductDetails'

export default function Product() {
  return (
    <Splitter>
    <SplitterPanel className='spliter-image'>
        <ProductImage></ProductImage>
    </SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center">
        <ProductDetails></ProductDetails>
    </SplitterPanel>
</Splitter>
  )
}
