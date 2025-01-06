import { Card } from 'ui-kit'

const TestingCard = () => {
  return (
    <>
      <div className='flex flex-wrap gap-5 p-5'>
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
        <Card
          className='w-72 h-fit'
          cardTitle={'Product Article'}
          cardBody={
            'This placeholder card provides a quick and easy preview of your card\'s content and design.'
          }
          cardTypography={'product'}
          cardStyle='article'
          cardHeading='Heading'
          cardFootnote='Jul 08, 15:15'
          useImage={false}
        />
        <Card
          className='w-72 h-fit'
          cardTitle={'Product Image'}
          cardBody={
            'This placeholder card provides a quick and easy preview of your card\'s content and design.'
          }
          cardTypography={'product'}
          cardStyle='image'
          mainButton='Button'
          secondButton='Button'
          useImage={true}
        />
        <Card
          className='w-72 h-fit'
          cardTitle={'Eugenia Hugonin'}
          cardBody={'Chairman and Chief Executive Officer'}
          cardTypography={'product'}
          cardStyle='profile'
          cardOrientation='vertical'
          useImage={true}
        />
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
      <div className='flex flex-wrap gap-5 p-5'>
        <Card
          className='w-96 h-fit'
          cardTitle={'Editorial Standard'}
          cardBody={
            // eslint-disable-next-line max-len
            'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
          }
          cardTypography={'editorial'}
          cardHeading='25 Jan 2020'
          cardStyle='standard'
          useImage={false}
          mainButton='Button'
        />
        <Card
          className='w-96 h-fit'
          cardTitle={'Editorial Icon'}
          cardBody={
            // eslint-disable-next-line max-len
            'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
          }
          cardTypography={'editorial'}
          cardHeading='25 Jan 2020'
          cardStyle='icon'
          useImage={false}
          mainButton='Button'
        />
        <Card
          className='w-96 h-fit'
          cardTitle={'Editorial Image'}
          cardBody={
            // eslint-disable-next-line max-len
            'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
          }
          cardTypography={'editorial'}
          cardHeading='25 Jan 2020'
          cardStyle='image'
          useImage={true}
          mainButton='Button'
        />
        <Card
          className='w-fit h-fit'
          cardTitle={'Editorial Image'}
          cardBody={
            // eslint-disable-next-line max-len
            'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
          }
          cardTypography={'editorial'}
          cardHeading='25 Jan 2020'
          cardStyle='image'
          useImage={true}
          cardOrientation='horizontal'
          mainButton='Button'
        />
      </div>
      <div className='flex flex-wrap gap-5 p-5'>
        <Card
          className='w-96 h-fit'
          cardTitle={'Marketing Standard'}
          cardBody={
            // eslint-disable-next-line max-len
            'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
          }
          cardTypography={'marketing'}
          cardHeading='25 Jan 2020'
          cardStyle='standard'
          useImage={false}
          mainButton='Button'
          secondButton='Button'
        />
        <Card
          className='w-96 h-fit'
          cardTitle={'Marketing Icon'}
          cardBody={
            // eslint-disable-next-line max-len
            'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
          }
          cardTypography={'marketing'}
          cardHeading='25 Jan 2020'
          cardStyle='icon'
          useImage={false}
          mainButton='Button'
          secondButton='Button'
        />
        <Card
          className='w-96 h-fit'
          cardTitle={'Marketing Image'}
          cardBody={
            // eslint-disable-next-line max-len
            'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
          }
          cardTypography={'marketing'}
          cardHeading='25 Jan 2020'
          cardStyle='image'
          useImage={true}
          mainButton='Button'
          secondButton='Button'
        />
        <Card
          className='w-fit h-fit'
          cardTitle={'Marketing Image'}
          cardBody={
            // eslint-disable-next-line max-len
            'Goldman Sachs Group Co., Ltd. is the world\'s leading investment bank, securities and investment management company, providing a series of financial services to many customers in various fields such as enterprises, financial institutions, governments, and individuals.'
          }
          cardTypography={'marketing'}
          cardHeading='25 Jan 2020'
          cardStyle='image'
          useImage={true}
          cardOrientation='horizontal'
          mainButton='Button'
          secondButton='Button'
        />
      </div>
    </>
  )
}

export default TestingCard
