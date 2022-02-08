import { useEffect, useState } from 'react'
import css from './productListing.module.css'
import cn from 'classnames'
import { Product } from '../Product'

export function ProductListing() {
  const [products, setProducts] = useState()
  
  const fetchProducts = async () => {
    const response = await fetch("https://fritz-kola-challenge.s3-eu-west-1.amazonaws.com/products.json")
    const data = await response.json();
    if(data.status === 'OK') setProducts(data.products)
  }

  useEffect(() => {
    fetchProducts()
  })
  
  return (
    <div className={css.Container}>
      {products?.map((product, i) => <Product key={`product_${i}`} {...product} />)}
    </div>
  )
}