import { useContext, useEffect } from 'react'
import css from './checkoutSection.module.css'
import cn from 'classnames'
import { GlobalContext } from '../../context/GlobalContext'

export function CheckoutSection() {
  const { totalPrice } = useContext(GlobalContext)

  const displaySum = (a, b) => (parseFloat(a) + parseFloat(b)).toFixed(2)
  
  return (
    <div className={cn(css.Container, 'container')}>
      <h2>Total: {Object.values(totalPrice)?.reduce((a, b) => displaySum(a, b), 0)}</h2>
      <button>Checkout</button>
    </div>
  )
}