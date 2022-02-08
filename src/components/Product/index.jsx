import { useContext, useState, useEffect } from 'react'
import css from './product.module.css'
// import cn from 'classnames'
import { GlobalContext } from '../../context/GlobalContext'

export function Product({ name, image, price }) {
  const { setTotalPrice, totalPrice } = useContext(GlobalContext)
  const [quantity, setQuantity] = useState(0)

  const quantityUpdate = (newQuantity) => {
    if(newQuantity >= 0 && newQuantity <= 10) setQuantity(newQuantity)
  }

  // add a state that holds the total quantity * price for each product

  useEffect(() => {
    setTotalPrice({
      ...totalPrice,
      [name]: quantity * price
    })
  }, [quantity])
  
  return (
    <div className={css.Container}>
      <div className={css.Thumbnail}>
        <img className={css.Image} src={image} alt={name} title={name} />
        <div className={css.Price}>{price}</div>
      </div>
      <div className={css.Quantity}>
        <p>Quantity:</p>
        <p>{quantity}</p>
        <div className={css.Control}>
          <button className="btn-sm" onClick={() => quantityUpdate(quantity + 1)}>+</button>
          <button className="btn-sm" onClick={() => quantityUpdate(quantity - 1)}>-</button>
        </div>
      </div>
    </div>
  )
}