import css from './header.module.css'
import cn from 'classnames'

export function Header() {
  return (
    <div className={cn(css.Container, 'container')}>
      header
    </div>
  )
}