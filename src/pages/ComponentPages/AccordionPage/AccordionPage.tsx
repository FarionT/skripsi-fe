import { Accordion, IconType } from 'ui-kit'
import './AccordionPage.scss'
import { placeholder } from 'ui-kit/assets/image'

const AccordionPage = () => {
  const data = [
    {
      title: 'Recent Post',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
    {
      title: 'Attachments',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
    {
      title: 'Related Post',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
  ]

  const data2 = [
    {
      title: 'Why is my Spotify is skipping?',
      content:
        // eslint-disable-next-line max-len
        'If you\'re using an iPhone, iPad, Apple Watch or Apple TV device, you can indeed find and install or update Spotify through the App Store. If you\'re still having troubles locating Spotify in the App Store, we\'d recommend making sure that your device meets our minimum system requirements.',
    },
    {
      title: 'Can\'t find Spotify in the App Store?',
      content:
        // eslint-disable-next-line max-len
        'If you\'re using an iPhone, iPad, Apple Watch or Apple TV device, you can indeed find and install or update Spotify through the App Store. If you\'re still having troubles locating Spotify in the App Store, we\'d recommend making sure that your device meets our minimum system requirements.',
    },
  ]

  const data3 = [
    {
      title: 'Enabled',
      content: 'Enabled Content',
    },
    {
      title: 'Focuses',
      content: 'Enabled Content',
    },
    {
      title: 'Disabled',
      content: 'Enabled Content',
      isDisabled: true,
    },
  ]

  const data4 = [
    {
      icon: 'Dropdown' as IconType,
      title: 'Primary Label',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
  ]

  const data5 = [
    {
      title: 'What is Canvas Sharing?',
      content:
        // eslint-disable-next-line max-len
        'If you\'re using an iPhone, iPad, Apple Watch or Apple TV device, you can indeed find and install or update Spotify through the App Store. If you\'re still having troubles locating Spotify in the App Store, we\'d recommend making sure that your device meets our minimum system requirements.',
    },
    {
      title: 'Why is my Spotify is skipping?',
      content:
        // eslint-disable-next-line max-len
        'If you\'re using an iPhone, iPad, Apple Watch or Apple TV device, you can indeed find and install or update Spotify through the App Store. If you\'re still having troubles locating Spotify in the App Store, we\'d recommend making sure that your device meets our minimum system requirements.',
    },
    {
      title: 'Can\'t find Spotify in the App Store?',
      content:
        // eslint-disable-next-line max-len
        'If you\'re using an iPhone, iPad, Apple Watch or Apple TV device, you can indeed find and install or update Spotify through the App Store. If you\'re still having troubles locating Spotify in the App Store, we\'d recommend making sure that your device meets our minimum system requirements.',
    },
    {
      title: 'How can I see lyrics for my song?',
      content:
        // eslint-disable-next-line max-len
        'If you\'re using an iPhone, iPad, Apple Watch or Apple TV device, you can indeed find and install or update Spotify through the App Store. If you\'re still having troubles locating Spotify in the App Store, we\'d recommend making sure that your device meets our minimum system requirements.',
    },
    {
      title: 'How do I check the ranking of an artist?',
      content:
        // eslint-disable-next-line max-len
        'If you\'re using an iPhone, iPad, Apple Watch or Apple TV device, you can indeed find and install or update Spotify through the App Store. If you\'re still having troubles locating Spotify in the App Store, we\'d recommend making sure that your device meets our minimum system requirements.',
    },
  ]

  const data6 = [
    {
      icon: 'Dropdown' as IconType,
      title: 'Recent Post',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
    {
      icon: 'Dropdown' as IconType,
      title: 'Attachments',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
    {
      icon: 'Dropdown' as IconType,
      title: 'Related Post',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
      child: [
        {
          title: 'August',
          content:
            // eslint-disable-next-line max-len
            'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
        },
        {
          title: 'September',
          content:
            // eslint-disable-next-line max-len
            'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
        },
        {
          title: 'December',
          content:
            // eslint-disable-next-line max-len
            'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
        },
      ]  
    },
  ]

  const data7 = [
    {
      icon: 'Dropdown' as IconType,
      title: 'Recent Post',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
    {
      icon: 'Dropdown' as IconType,
      title: 'Attachments',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
    {
      icon: 'Dropdown' as IconType,
      title: 'Related Post',
      content:
        // eslint-disable-next-line max-len
        'The accordion UI component allows users to expand and collapse content sections within a website or application. Each section is represented by a header, which when clicked on, reveals the corresponding content. This feature allows for a clean and organized layout, as well as easy navigation and accessibility for users. The accordion component is commonly used in FAQ sections, product descriptions, and other areas where multiple sections of content need to be displayed in a compact space.',
    },
  ]

  return (
    <div className='concise-component-accordion-container'>
      <div className='concise-component-accordion-title'>Accordion</div>
      <div className='concise-component-accordion-desc'>
        Accordions enable multiple content sections to be displayed in a limited space and collapsed
        or expanded by the user.
      </div>
      <div className='concise-component-accordion-subtitle'>Anatomy</div>
      <div className='concise-component-accordion-bg-grey'>
        <Accordion accordionStyle='product' datas={data} className='w-[400px]' />
      </div>
      <div className='concise-component-accordion-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>
      <div className='concise-component-accordion-heading'>Appearance</div>
      <div className='concise-component-accordion-subtitle'>Style Type</div>
      <div className='concise-component-accordion-bg-grey-col'>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Product Style</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion accordionStyle='product' datas={data} className='w-[400px]' />
          </div>
        </div>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Marketing Style</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion accordionStyle='marketing' datas={data2} />
          </div>
        </div>
      </div>
      <div className='concise-component-accordion-subtitle'>Emphasis</div>
      <div className='concise-component-accordion-bg-grey-col'>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Subtle</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion accordionStyle='product' datas={data7} className='w-[400px]' />
          </div>
        </div>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Bold</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion
              accordionStyle='product'
              accordionType='bold'
              datas={data7}
              className='w-[400px]'
            />
          </div>
        </div>
      </div>
      <div className='concise-component-accordion-subtitle'>States</div>
      <div className='concise-component-accordion-bg-grey-col'>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Subtle</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion accordionStyle='product' datas={data3} className='w-[400px]' />
          </div>
        </div>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Bold</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion
              accordionStyle='product'
              accordionType='bold'
              datas={data3}
              className='w-[400px]'
            />
          </div>
        </div>
      </div>
      <div className='concise-component-accordion-subtitle'>Emphasis</div>
      <div className='concise-component-accordion-bg-grey'>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Subtle Emphasis</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion accordionStyle='product' datas={data4} className='w-[400px]' />
          </div>
        </div>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Bold Emphasis</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion
              accordionStyle='product'
              accordionType='bold'
              datas={data4}
              className='w-[400px]'
            />
          </div>
        </div>
      </div>
      <div>Leading Icon</div>
      <div className='concise-component-accordion-bg-grey'>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Subtle Emphasis</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion accordionStyle='product' accordionSize='large' datas={data4} className='w-[400px]' />
            <Accordion accordionStyle='product' accordionSize='medium' datas={data4} className='w-[400px]' />
            <Accordion accordionStyle='product' accordionSize='small' datas={data4} className='w-[400px]' />
          </div>
        </div>
        <div className='concise-component-accordion-style'>
          <div className='concise-component-accordion-style-text'>Bold Emphasis</div>
          <div className='concise-component-accordion-bg-white'>
            <Accordion
              accordionStyle='marketing'
              accordionSize='large'
              datas={data4}
              className='w-[400px]'
            />
            <Accordion
              accordionStyle='marketing'
              accordionSize='medium'
              datas={data4}
              className='w-[400px]'
            />
            <Accordion
              accordionStyle='marketing'
              accordionSize='small'
              datas={data4}
              className='w-[400px]'
            />
          </div>
        </div>
      </div>
      <div className='concise-component-accordion-desc-sec'>
        Usage guidelines description go here.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in
      </div>
      <div className='concise-component-accordion-subtitle'>Examples</div>
      <div className='concise-component-accordion-bg-grey-col'>
        <div className='concise-component-accordion-bg-white'>
          <div className='concise-component-accordion-bg-white-text'>FAQs / Help</div>
          <Accordion accordionStyle='marketing' datas={data5} />
        </div>
        <div className='concise-component-accordion-bg-white'>
          <div className='concise-component-accordion-bg-white-text'>FAQs / Help</div>
          <Accordion accordionStyle='product' datas={data6} className='w-[400px]' />
        </div>
      </div>
      <div className='concise-component-accordion-desc-sec'>
        Usage guidelines description go here.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in
      </div>
    </div>
  )
}

export default AccordionPage
