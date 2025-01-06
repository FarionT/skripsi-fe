import { Breadcrumbs } from 'ui-kit'
import './BreadcrumbPage.scss'

const BreadcrumbPage = () => {
  const breadcrumbPaths = [
    { path: '/', name: 'Home' },
    { path: '/secondary', name: 'Secondary' },
    { path: '/tertiary', name: 'Tertiary' },
    { path: '/quaternary', name: 'Quaternary' },
    { path: '/current', name: 'Current Page' },
  ]

  const breadcrumbState = [
    { path: '/', name: 'Enabled' },
    { path: '/hover', name: 'Hover' },
    { path: '/active', name: 'Active' },
    { path: '/focus', name: 'Focus' },
    { path: '/visited', name: 'Visited' },
    { path: '/disabled', name: 'Disabled' },
    { path: '/read', name: 'Read Only' },
  ]
  
  return (
    <>
      <div className='concise-component-breadcrumb-container'>
        <div className='concise-component-breadcrumb-title'>Breadcrumb</div>
        <div className='concise-component-breadcrumb-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        </div>
        <div>
          <div className='concise-component-breadcrumb-subtitle'>Anatomy</div>
          <div className='concise-component-breadcrumb-desc'>Description text go here</div>
          <div className='concise-component-breadcrumb-bg-grey'>
            <div className='concise-component-breadcrumb-bg-white'>
              <Breadcrumbs paths={breadcrumbPaths} length={6}/>
            </div>
          </div>
          <div className='concise-component-breadcrumb-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
        </div>
        <div>
          <div className='concise-component-breadcrumb-heading'>Behaviors</div>
          <div className='concise-component-breadcrumb-subtitle'>State</div>
          <div className='concise-component-breadcrumb-desc-text'>Description text go here</div>
          <div className='concise-component-breadcrumb-bg-grey'>
            <div className='concise-component-breadcrumb-bg-white'>
              <Breadcrumbs paths={breadcrumbState} length={8}/>
            </div>
          </div>
          <div className='concise-component-breadcrumb-desc-sec'>
            Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
          </div>
          <div className='concise-component-breadcrumb-subtitle'>Wrapping</div>
          <div className='concise-component-breadcrumb-desc-text'>Description text go here</div>
          <div className='concise-component-breadcrumb-bg-grey'>
            <div className='concise-component-breadcrumb-bg-white'>
              <Breadcrumbs paths={breadcrumbPaths} length={6}/>
            </div>
          </div>
        </div>
        <div>
          <div className='concise-component-breadcrumb-truncation'>Truncation</div>
          <div className='concise-component-breadcrumb-subtitle'>Trail Truncation</div>
          <div className='concise-component-breadcrumb-desc-text'>Description text go here</div>
          <div className='concise-component-breadcrumb-bg-grey'>
            <div className='concise-component-breadcrumb-bg-white'>
              <Breadcrumbs paths={breadcrumbPaths} length={5}/>
            </div>
            <div className='concise-component-breadcrumb-bg-white'>
              <Breadcrumbs paths={breadcrumbPaths} length={3}/>
            </div>
          </div>
          <div className='concise-component-breadcrumb-truncation-text'>Text Truncation</div>
          <div className='concise-component-breadcrumb-desc-text'>Description text go here</div>
          <div className='concise-component-breadcrumb-bg-grey'>
            <div className='concise-component-breadcrumb-bg-white'>
              <Breadcrumbs paths={breadcrumbPaths} length={5}/>
            </div>
          </div>
        </div>
        <div>
          <div className='concise-component-breadcrumb-heading'>Size</div>
          <div className='concise-component-breadcrumb-desc-text'>Description text go here</div>
          <div className='concise-component-breadcrumb-bg-grey'>
            <div className='concise-component-breadcrumb-size'>
              <div className='concise-component-breadcrumb-size-text'>Small</div>
              <div className='concise-component-breadcrumb-bg-size'>
                <Breadcrumbs paths={breadcrumbPaths} size='small' length={6}/>
              </div>
            </div>
            <div className='concise-component-breadcrumb-size'>
              <div className='concise-component-breadcrumb-size-text'>Medium</div>
              <div className='concise-component-breadcrumb-bg-size'>
                <Breadcrumbs paths={breadcrumbPaths} length={6}/>
              </div>
            </div>
            <div className='concise-component-breadcrumb-size'>
              <div className='concise-component-breadcrumb-size-text'>Large</div>
              <div className='concise-component-breadcrumb-bg-size'>
                <Breadcrumbs paths={breadcrumbPaths} size='large' length={6}/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='concise-component-breadcrumb-heading'>Variant</div>
          <div className='concise-component-breadcrumb-desc-text'>Description text go here</div>
          <div className='concise-component-breadcrumb-bg-grey'>
            <div className='concise-component-breadcrumb-bg-white'>
              <Breadcrumbs paths={breadcrumbPaths} length={6}/>
            </div>
            <div className='concise-component-breadcrumb-bg-white'>
              <Breadcrumbs paths={breadcrumbPaths} length={6}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BreadcrumbPage
