import { Card } from 'ui-kit'
import './CardPage.scss'

const CardPage = () => {
  return (
    <div className='concise-component-card-container'>
      <div className='concise-component-card-title'>Card</div>
      <div className='concise-component-card-subtitle'>
        Cards display content or actions related to a single subject.
      </div>
      <div>
        {/* Card Typography  */}
        <div className='concise-component-card-subsubtitle'>Card Typography</div>
        <div className='concise-component-card-bg-grey'>
          <div className='concise-component-card-typo'>
            <div className='concise-component-card-typo-title'>Product</div>
            <Card
              className='w-72 h-fit'
              cardTitle={'Product Basic'}
              cardBody={
                'This placeholder card provides a quick and easy preview of your card\'s content and design.'
              }
              cardTypography={'product'}
              cardStyle='basic'
              useImage={false}
              cardSurface='secondary'
              mainButton='Button'
              secondButton='Button'
            />
          </div>
          <div className='concise-component-card-typo'>
            <div className='concise-component-card-typo-title'>Editorial</div>
            <Card
              className='w-96 h-fit'
              cardTitle={'Editorial Standard'}
              cardBody={
                'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
              }
              cardTypography={'editorial'}
              cardHeading='25 Jan 2020'
              cardStyle='standard'
              useImage={false}
              mainButton='Button'
            />
          </div>
          <div className='concise-component-card-typo'>
            <div className='concise-component-card-typo-title'>Marketing</div>
            <Card
              className='w-96 h-fit'
              cardTitle={'Marketing Standard'}
              cardBody="Goldman Sachs Group Co., Ltd. is the world's leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals."
              cardTypography='marketing'
              cardHeading='25 Jan 2020'
              cardStyle='standard'
              useImage={false}
              mainButton='Button'
              secondButton='Button'
            />
          </div>
        </div>
      </div>
      <div className='concise-component-card-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>
      {/* PRODUCT  */}
      <div className='concise-component-card-orientation'>Product Style</div>
      <div className='concise-component-card-orientation-desc'>Description text go here</div>
      <div className='concise-component-card-bg-grey'>
        <div className='concise-component-card-product'>
          <div className='concise-component-card-product-item'>
            <Card
              className='w-72 h-fit'
              cardTitle='Product Basic'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography={'product'}
              cardStyle='basic'
              useImage={false}
              cardSurface='secondary'
              mainButton='Button'
              secondButton='Button'
            />
            <div className='concise-component-card-product-item-desc'>Basic</div>
          </div>
          <div className='concise-component-card-product-item'>
            <Card
              className='w-72 h-fit'
              cardTitle='Product Article'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography={'product'}
              cardStyle='article'
              cardHeading='Heading'
              cardFootnote='Jul 08, 15:15'
              useImage={false}
            />
            <div className='concise-component-card-product-item-desc'>Article</div>
          </div>
          <div className='concise-component-card-product-item'>
            <Card
              className='w-72 h-fit'
              cardTitle={'Product Image'}
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography={'product'}
              cardStyle='image'
              mainButton='Button'
              secondButton='Button'
              useImage={true}
            />
            <div className='concise-component-card-product-item-desc'>Image</div>
          </div>
          <div className='concise-component-card-product-item'>
            <Card
              className='w-72 h-fit'
              cardTitle={'Eugenia Hugonin'}
              cardBody={'Chairman and Chief Executive Officer'}
              cardTypography={'product'}
              cardStyle='profile'
              cardOrientation='vertical'
              useImage={true}
            />
            <div className='concise-component-card-product-item-desc'>Profile</div>
          </div>
        </div>
      </div>
      {/* SURFACE */}
      <div className='concise-component-card-orientation'>Surface</div>
      <div className='concise-component-card-orientation-desc'>
        Surface is the background of a component. The product card can have two surface colors —
        none or primary (white).
      </div>
      <div className='concise-component-card-surface'>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Product Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='product'
              cardStyle='image'
              mainButton='Button'
              cardSurface='none'
              secondButton='Button'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface None</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Product Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='product'
              cardSurface='primary'
              cardStyle='image'
              mainButton='Button'
              secondButton='Button'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface Primary</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Product Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='product'
              cardSurface='secondary'
              cardStyle='image'
              mainButton='Button'
              secondButton='Button'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface Secondary</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
      </div>
      <div className='concise-component-card-orientation'>Size</div>
      <div className='concise-component-card-orientation-desc'>Description text go here</div>
      <div className='concise-component-card-bg-orientation'>
        <div className='concise-component-card-size-item'>
          <div>Small</div>
          <Card
            className='w-72 h-fit'
            cardTitle='Product Image'
            cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
            cardTypography='product'
            cardStyle='image'
            mainButton='Button'
            mainButtonSize='small'
            cardSize='small'
            secondButton='Button'
            secondButtonSize='small'
            useImage={true}
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Medium</div>
          <Card
            className='w-72 h-fit'
            cardTitle='Product Image'
            cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
            cardTypography='product'
            cardStyle='image'
            mainButton='Button'
            mainButtonSize='medium'
            cardSize='medium'
            secondButton='Button'
            secondButtonSize='medium'
            useImage={true}
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Large</div>
          <Card
            className='w-72 h-fit'
            cardTitle='Product Image'
            cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
            cardTypography='product'
            cardStyle='image'
            mainButton='Button'
            mainButtonSize='big'
            cardSize='large'
            secondButton='Button'
            secondButtonSize='big'
            useImage={true}
          />
        </div>
      </div>
      <div className='concise-component-card-orientation'>Orientation</div>
      <div className='concise-component-card-orientation-desc'>Profile cards can have a vertical or horizontal image orientation.</div>
      <div className='concise-component-card-bg-orientation'>
        <div className='concise-component-card-size-item'>
          <div>Vertical</div>
          <Card
            className='w-72 h-fit'
            cardTitle={'Eugenia Hugonin'}
            cardBody={'Chairman and Chief Executive Officer'}
            cardTypography={'product'}
            cardStyle='profile'
            cardOrientation='vertical'
            useImage={true}
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Horizontal</div>
          <Card
            className='w-90 h-fit'
            cardTitle={'Eugenia Hugonin'}
            cardBody={'Chairman and Chief Executive Officer'}
            cardTypography={'product'}
            cardStyle='profile'
            cardOrientation='horizontal'
            useImage={true}
        />
        </div>
      </div>
      <div className='concise-component-card-orientation'>Editorial Style</div>
      <div className='concise-component-card-orientation-desc'>Description text go here</div>
      <div className='concise-component-card-bg-orientation'>
        <div className='concise-component-card-size-item'>
          <div>Standard</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='editorial'
            cardHeading='25 Jan 2020'
            cardStyle='standard'
            useImage={false}
            mainButton='Button'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Icon</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='editorial'
            cardHeading='25 Jan 2020'
            cardStyle='icon'
            useImage={false}
            mainButton='Button'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Image</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='editorial'
            cardHeading='25 Jan 2020'
            cardStyle='image'
            useImage={true}
            mainButton='Button'
          />
        </div>
      </div>
      <div className='concise-component-card-orientation'>Surface</div>
      <div className='concise-component-card-orientation-desc'>
        Surface is the background of a component. The product card can have two surface colors —
        none or primary (white).
      </div>
      <div className='concise-component-card-surface'>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Editorial Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='editorial'
              cardStyle='image'
              mainButton='Button'
              cardSurface='none'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface None</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Editorial Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='editorial'
              cardSurface='primary'
              cardStyle='image'
              mainButton='Button'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface Primary</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Editorial Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='editorial'
              cardSurface='secondary'
              cardStyle='image'
              mainButton='Button'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface Secondary</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
      </div>
      <div className='concise-component-card-orientation'>Size</div>
      <div className='concise-component-card-orientation-desc'>Description text go here</div>
      <div className='concise-component-card-bg-orientation'>
        <div className='concise-component-card-size-item'>
          <div>Small</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='editorial'
            cardHeading='25 Jan 2020'
            cardStyle='icon'
            cardSize='small'
            useImage={false}
            mainButton='Button'
            mainButtonSize='small'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Medium</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='editorial'
            cardHeading='25 Jan 2020'
            cardStyle='icon'
            cardSize='medium'
            useImage={false}
            mainButton='Button'
            mainButtonSize='medium'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Large</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='editorial'
            cardHeading='25 Jan 2020'
            cardStyle='icon'
            cardSize='large'
            useImage={false}
            mainButton='Button'
            mainButtonSize='big'
          />
        </div>
      </div>
      <div className='concise-component-card-orientation'>Orientation</div>
      <div className='concise-component-card-orientation-desc'>Profile cards can have a vertical or horizontal image orientation.</div>
      <div className='concise-component-card-bg-orientation'>
        <div className='concise-component-card-size-item'>
          <div>Vertical</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='editorial'
            cardHeading='25 Jan 2020'
            cardStyle='image'
            cardOrientation='vertical'
            cardSize='small'
            useImage={true}
            mainButton='Button'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Horizontal</div>
          <Card
            className='w-fit h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='editorial'
            cardHeading='25 Jan 2020'
            cardStyle='image'
            cardOrientation='horizontal'
            cardSize='medium'
            useImage={true}
            mainButton='Button'
          />
        </div>
      </div>
      <div className='concise-component-card-orientation'>Marketing Style</div>
      <div className='concise-component-card-orientation-desc'>Description text go here</div>
      <div className='concise-component-card-bg-orientation'>
        <div className='concise-component-card-size-item'>
          <div>Standard</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='marketing'
            cardHeading='25 Jan 2020'
            cardStyle='standard'
            useImage={false}
            mainButton='Button'
            secondButton='Button'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Icon</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='marketing'
            cardHeading='25 Jan 2020'
            cardStyle='icon'
            useImage={false}
            mainButton='Button'
            secondButton='Button'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Image</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='marketing'
            cardHeading='25 Jan 2020'
            cardStyle='image'
            useImage={true}
            mainButton='Button'
            secondButton='Button'
          />
        </div>
      </div>
      <div className='concise-component-card-orientation'>Surface</div>
      <div className='concise-component-card-orientation-desc'>
        Surface is the background of a component. The product card can have two surface colors —
        none or primary (white).
      </div>
      <div className='concise-component-card-surface'>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Marketing Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='marketing'
              cardHeading='25 Jan 2020'
              cardStyle='image'
              mainButton='Button'
              cardSurface='none'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface None</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Marketing Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='marketing'
              cardHeading='25 Jan 2020'
              cardSurface='primary'
              cardStyle='image'
              mainButton='Button'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface Primary</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
        <div className='concise-component-card-surface-item'>
          <div className='concise-component-card-surface-bg-grey'>
            <Card
              className='w-72 h-fit'
              cardTitle='Marketing Image'
              cardBody="This placeholder card provides a quick and easy preview of your card's content and design."
              cardTypography='marketing'
              cardHeading='25 Jan 2020'
              cardSurface='secondary'
              cardStyle='image'
              mainButton='Button'
              useImage={true}
            />
          </div>
          <div className='concise-component-card-surface-item-desc'>
            <div className='concise-component-card-surface-item-desc-title'>Surface Secondary</div>
            <div className='concise-component-card-surface-item-desc-subtitle'>Description text go here</div>
          </div>
        </div>
      </div>
      <div className='concise-component-card-orientation'>Size</div>
      <div className='concise-component-card-orientation-desc'>Description text go here</div>
      <div className='concise-component-card-bg-orientation'>
        <div className='concise-component-card-size-item'>
          <div>Small</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='marketing'
            cardHeading='25 Jan 2020'
            cardStyle='icon'
            cardSize='small'
            useImage={false}
            mainButton='Button'
            mainButtonSize='small'
            secondButton='Button'
            secondButtonSize='small'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Medium</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='marketing'
            cardHeading='25 Jan 2020'
            cardStyle='icon'
            cardSize='medium'
            useImage={false}
            mainButton='Button'
            mainButtonSize='medium'
            secondButton='Button'
            secondButtonSize='medium'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Large</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='marketing'
            cardHeading='25 Jan 2020'
            cardSize='large'
            cardStyle='icon'
            useImage={false}
            mainButton='Button'
            mainButtonSize='big'
            secondButton='Button'
            secondButtonSize='big'
          />
        </div>
      </div>
      <div className='concise-component-card-orientation'>Orientation</div>
      <div className='concise-component-card-orientation-desc'>Profile cards can have a vertical or horizontal image orientation.</div>
      <div className='concise-component-card-bg-orientation'>
        <div className='concise-component-card-size-item'>
          <div>Vertical</div>
          <Card
            className='w-96 h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='marketing'
            cardHeading='25 Jan 2020'
            cardStyle='image'
            useImage={true}
            cardOrientation='vertical'
            mainButton='Button'
            secondButton='Button'
          />
        </div>
        <div className='concise-component-card-size-item'>
          <div>Horizontal</div>
          <Card
            className='w-fit h-fit'
            cardTitle='Headline'
            cardBody={
              // eslint-disable-next-line max-len
              'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
            }
            cardTypography='marketing'
            cardHeading='25 Jan 2020'
            cardStyle='image'
            useImage={true}
            cardOrientation='horizontal'
            mainButton='Button'
            secondButton='Button'
          />
        </div>
      </div>
    </div>
  )
}

export default CardPage
