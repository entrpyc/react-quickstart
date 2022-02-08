import { useContext } from 'react'
import css from './header.module.css'
import cn from 'classnames'
import { GlobalContext } from '../../context/GlobalContext'

export function Header() {
  const { globalState } = useContext(GlobalContext)
  
  return (
    <div className={cn(css.Container, 'container')}>
      header
    </div>
  )
}