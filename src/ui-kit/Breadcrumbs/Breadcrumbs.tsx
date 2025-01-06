import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { Icon } from 'ui-kit'
import classNames from 'classnames'
import './Breadcrumbs.scss'

export type TBreadcrumbType = 'default' | 'framed'

type BreadcrumbProps = {
  paths: {
    path: string
    name: string
  }[]
  className?: string
  type?: TBreadcrumbType
  isBack?: boolean
  size?: 'small' | 'medium' | 'large'
  length?: number
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  paths,
  className,
  type = 'default',
  isBack,
  size = 'medium',
  length = 3
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className={classNames('breadcrumbs', `breadcrumbs${type}`, { 'p-0': isBack }, className, { 
      breadcrumbsSmall : size === 'small',
      breadcrumbsMedium: size === 'medium',
      breadcrumbsLarge : size === 'large' })}>
      {isBack ? (
        <>
          <div className='backButton' onClick={handleBack}>
            <Icon size='small' type='AngleLeft' className='mr-[4px]' />
            <span className='Back-Label'>Back</span>
          </div>
          <div className='separator-breadcrumb' />
        </>
      ) : null}
      <ul>
        {paths.map(({ path, name }, index) => {
          const isLast = index === paths.length - 1
          const to = isLast ? location.pathname : path
          const middleLength = length - 2;
          if((index == 0) || (index == paths.length - 1)) {
            return (
              <li key={path} className='breadcrumb-item' aria-current={isLast ? 'page' : undefined}>
                {isLast ? name : <Link to={to}>{name}</Link>}
              </li>
            )
          } else if(index < length - 1){
            if(index == length - 2) {
              return (
                <li key={path} className='breadcrumb-item' aria-current={isLast ? 'page' : undefined}>
                  <div>...</div>
                </li>
              )
            } else {
              return (
                <li key={path} className='breadcrumb-item' aria-current={isLast ? 'page' : undefined}>
                  {isLast ? name : <Link to={to}>{name}</Link>}
                </li>
              )
            }
          }
        })}
      </ul>
      <Outlet />
    </div>
  )
}
