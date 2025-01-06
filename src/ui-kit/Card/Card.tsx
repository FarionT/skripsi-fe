import { placeholder } from 'ui-kit/assets/image'
import { Button, Icon, Tags } from 'ui-kit'
import classNames from 'classnames'
import './Card.scss'

type TCardProps = {
  cardTypography: 'product' | 'editorial' | 'marketing'
  cardStyle?: string
  cardOrientation?: 'horizontal' | 'vertical'
  cardSurface?: 'none' | 'primary' | 'secondary'
  useImage?: boolean
  image?: string
  cardHeading?: string
  cardDate?: string
  cardTitle: string
  cardBody: string
  cardFootnote?: string
  cardSize?: 'small' | 'medium' | 'large'
  price?: string
  tags?: string[]
  mainButton?: string
  mainButtonAppearance?: 'primary' | 'destructive' | 'secondary' | 'info'
  mainButtonType?:
    | 'filled'
    | 'transparent'
    | 'outline'
    | 'frameless'
    | 'danger'
    | 'success'
    | 'link'
  mainButtonSize?: 'big' | 'small' | 'medium'
  secondButton?: string
  secondButtonAppearance?: 'primary' | 'destructive' | 'secondary' | 'info'
  secondButtonType?:
    | 'filled'
    | 'transparent'
    | 'outline'
    | 'frameless'
    | 'danger'
    | 'success'
    | 'link'
  secondButtonSize?: 'big' | 'small' | 'medium'
  className?: string
  onMainButtonClick?: (event: React.MouseEvent) => void
  onSecondButtonClick?: (event: React.MouseEvent) => void
  onCardClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Card = ({
  cardTypography,
  cardStyle,
  cardOrientation = 'vertical',
  cardSurface = 'secondary',
  useImage = true,
  image,
  cardHeading,
  cardDate,
  cardSize = 'medium',
  cardTitle,
  cardBody,
  cardFootnote,
  price,
  tags,
  mainButton,
  mainButtonAppearance = 'primary',
  mainButtonSize = 'medium',
  mainButtonType = 'filled',
  secondButton,
  secondButtonAppearance = 'primary',
  secondButtonSize = 'medium',
  secondButtonType = 'outline',
  className,
  onMainButtonClick,
  onSecondButtonClick,
  onCardClick,
}: TCardProps) => {
  return (
    <div
      className={classNames(
        'conciseCard',
        className,
        cardSurface == 'none'
          ? 'conciseCard__NoSurface'
          : cardSurface == 'primary'
          ? 'conciseCard__PrimarySurface'
          : 'conciseCard__SecondarySurface',
      )}
      onClick={onCardClick}
    >
      <div
        className={classNames(
          cardTypography == 'product'
            ? 'conciseCard__Product'
            : cardTypography == 'editorial'
            ? 'conciseCard__Editorial'
            : 'conciseCard__Marketing',
          cardOrientation == 'horizontal' ? 'conciseCard__Horizontal' : 'conciseCard__Vertical',
          cardSize === 'small' ? 'conciseCard__Small' : cardSize === 'large' ? 'conciseCard__Large' : 'conciseCard__Medium'
        )}
      >
        {cardStyle != 'profile' && cardStyle == 'image' && useImage ? (
          <div className='conciseCard__Image'>
            <img src={image ? image : placeholder} alt='Shoes' />
          </div>
        ) : null}

        <div
          className={classNames(
            'conciseCard__Body',
            cardStyle == 'profile' ? 'conciseCard__BodyProfile' : '',
            cardOrientation == 'horizontal' && cardStyle == 'profile'
              ? 'conciseCard__BodyProfileHorizontal'
              : ''
          )}
        >
          {/* ini product  */}
          {cardTypography == 'product' && (
            <div
              className={classNames(
                'conciseCard_SubBody',
                cardOrientation == 'horizontal' && cardStyle == 'profile'
                  ? 'conciseCard__SubBodyProfileHorizontal'
                  : 'conciseCard__SubBodyProfileVertical'
              )}
            >
              {useImage && cardStyle == 'profile' && (
                <div
                  className='conciseCard__ProfileImage'
                  style={{ backgroundImage: `url('${image ? image : placeholder}')` }}
                ></div>
              )}
              <div>
                {cardHeading && <div className={'conciseCard__Heading'}>{cardHeading}</div>}
                <div className={classNames('conciseCard__Title')}>{cardTitle}</div>
                {cardBody && (
                  <div
                    className={classNames(
                      'conciseCard__Content',
                      cardStyle == 'profile' ? 'conciseCard__ContentProfile' : ''
                    )}
                  >
                    {cardBody}
                  </div>
                )}
                {/* {price && <div className='conciseCard__Price'>{price}</div>} */}
                {cardFootnote && <div className='conciseCard__Footnote'>{cardFootnote}</div>}
                {cardStyle == 'article' && (
                  <div className='conciseCard__Icons'>
                    <Icon
                      className='conciseCard__Icon'
                      type={'Share'}
                      onClick={() => {
                        alert('This is share')
                      }}
                    />
                    <Icon
                      className='conciseCard__Icon'
                      type={'Bookmark'}
                      onClick={() => {
                        alert('This is bookmark')
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          {/* ini editorial  */}
          {cardTypography == 'editorial' && (
            <>
              {cardStyle == 'icon' && <Icon type={'Grid'} className='conciseCard__CardIcon' />}
              <div
                className={classNames(
                  'conciseCard__SubBody',
                  cardOrientation == 'horizontal' && cardStyle == 'profile'
                    ? 'conciseCard__SubBodyEditorialHorizontal'
                    : 'conciseCard__SubBodyProfileVertical'
                )}
              >
                <div className={classNames('conciseCard__Title')}>{cardTitle}</div>
                {cardHeading && <div className={'conciseCard__Heading'}>{cardHeading}</div>}
                {cardBody && (
                  <div
                    className={classNames(
                      'conciseCard__Content',
                      cardStyle == 'profile' ? 'conciseCard__ContentProfile' : ''
                    )}
                  >
                    {cardBody}
                  </div>
                )}
              </div>
            </>
          )}
          {/* ini marketing  */}
          {cardTypography == 'marketing' && (
            <>
              {cardStyle == 'icon' && <Icon type={'Grid'} className='conciseCard__CardIcon' />}
              <div
                className={classNames(
                  'conciseCard__SubBody',
                  cardOrientation == 'horizontal' && cardStyle == 'profile'
                    ? 'conciseCard__SubBodyEditorialHorizontal'
                    : 'conciseCard__SubBodyProfileVertical'
                )}
              >
                <div className={classNames('conciseCard__Title')}>{cardTitle}</div>
                {cardHeading && <div className={'conciseCard__Heading'}>{cardHeading}</div>}
                {cardBody && (
                  <div
                    className={classNames(
                      'conciseCard__Content',
                      cardStyle == 'profile' ? 'conciseCard__ContentProfile' : ''
                    )}
                  >
                    {cardBody}
                  </div>
                )}
              </div>
            </>
          )}

          {tags && (
            <div className='conciseCard__Tags'>
              {tags &&
                tags.length > 0 &&
                tags?.map((tag) => (
                  <Tags key={tag} tagsSize='xsmall' tagsIcon='Grid'>
                    {tag}
                  </Tags>
                ))}
            </div>
          )}
          {price && <div className='conciseCard__Price'>{price}</div>}
          {(secondButton || mainButton) && (
            <div className='conciseCard__Actions'>
              {secondButton ? (
                <Button
                  buttonSize={secondButtonSize}
                  buttonAppearance={secondButtonAppearance}
                  buttonType={secondButtonType}
                  onClick={onSecondButtonClick}
                >
                  {secondButton}
                </Button>
              ) : null}

              {mainButton ? (
                <Button
                  buttonSize={mainButtonSize}
                  buttonAppearance={mainButtonAppearance}
                  buttonType={mainButtonType}
                  onClick={onMainButtonClick}
                >
                  {mainButton}
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
