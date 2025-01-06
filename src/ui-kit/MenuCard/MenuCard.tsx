import { Link } from 'react-router-dom'
import { Icon } from 'ui-kit'
import { TMenuType } from 'utils/getMenu'
import classNames from 'classnames'
import './MenuCard.scss'
import React from 'react'

export type TMenuCardType = 'default' | 'frameless'

export type TMenuCardProps = {
  className?: string
  menu?: TMenuType
  type?: TMenuCardType
}

export const MenuCard: React.FC<TMenuCardProps> = ({ menu, type = 'default' }) => {
  const menuCardItems =
    menu?.child &&
    menu.child.map((opt, index) => {
      return (
        <React.Fragment key={`menuCardItem-${index}`}>
          {opt.child ? (
            <>
              {opt.child.map((optChild, childIndex) => (
                <Link
                  to={optChild?.href ? optChild?.href : '/'}
                  key={`menuCardItem-${childIndex}`}
                  className={classNames('conciseMenuCardItem', `conciseMenuCard${type}`)}
                >
                  <div className='contents'>
                    {optChild.icon && (
                      <Icon
                        size='superbig'
                        className='conciseMenuCardItem__Icon'
                        type={optChild.icon}
                      />
                    )}
                    <div className='conciseMenuCardItem__TitleBody'>
                      {optChild.name}
                      {optChild.desc && (
                        <div className='conciseMenuCardItem__Body'>{optChild.desc}</div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <Link
              to={opt?.href ? opt?.href : '/'}
              className={classNames('conciseMenuCardItem', `conciseMenuCard${type}`)}
            >
              <div className='contents'>
                {opt.icon && (
                  <Icon size='superbig' className='conciseMenuCardItem__Icon' type={opt.icon} />
                )}
                <div className='conciseMenuCardItem__TitleBody'>
                  {opt.name}
                  {opt.desc && <div className='conciseMenuCardItem__Body'>{opt.desc}</div>}
                </div>
              </div>
            </Link>
          )}
        </React.Fragment>
      )
    })

  return (
    <div className='conciseMenuCard'>
      <div className='conciseMenuCardTitle'>{menu?.name}</div>
      {menuCardItems}
    </div>
  )
}
