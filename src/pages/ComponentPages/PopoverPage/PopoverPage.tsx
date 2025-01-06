import { Popover } from 'ui-kit'
import './PopoverPage.scss'

const PopoverPage = () => {
  return (
    <div className='concise-component-popover-container'>
      <div className='concise-component-popover-title'>Popover</div>
      <div className='concise-component-popover-subtitle'>
        Popovers display informative, yet nonessential text on hover, tap, click or focus.
      </div>
      <div>
        <div className='concise-component-popover-subsubtitle'>Anatomy</div>
        <div className='concise-component-popover-desc'>Description text go here</div>
        <div className='concise-component-popover-bg-grey concise-component-popover-bg-grey-row'>
          <Popover
            placement='top'
            header={
              <p>Popover Header Top</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Click Me</div>
          </Popover>
        </div>
        <div className='concise-component-popover-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
      </div>
      <div className='concise-component-popover-variations'>Appearance</div>
      <div className='concise-component-popover-variants'>Placement</div>
      <div className='concise-component-popover-desc-sec'>
        Popovers can be placed to the top, bottom, left or right of their related content. For top or bottom popovers,
        the placement can be more specifically aligned to top left, top right, bottom left or bottom right. Additionally the
        placement can be set to automatically adjust position to avoid being cut off by a container or browser edge.
      </div>
      <div className='concise-component-popover-bg-grey concise-component-popover-bg-grey-row'>
        <div className='concise-component-popover-layout'>
          <Popover
            placement='bottom'
            header={
              <p>Popover Header Bottom</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Bottom</div>
          </Popover>
          <Popover
            placement='top'
            header={
              <p>Popover Header Top</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Top</div>
          </Popover>
          <Popover
            placement='left'
            header={
              <p>Popover Header Left</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Left</div>
          </Popover>
          <Popover
            placement='right'
            header={
              <p>Popover Header Right</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Right</div>
          </Popover>
          <Popover
            placement='top-left'
            header={
              <p>Popover Header Top Left</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Top Left</div>
          </Popover>
          <Popover
            placement='top-right'
            header={
              <p>Popover Header Top Right</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Top Right</div>
          </Popover>
          <Popover
            placement='bottom-left'
            header={
              <p>Popover Header Bottom Left</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Bottom Left</div>
          </Popover>
          <Popover
            placement='bottom-right'
            header={
              <p>Popover Header Bottom Right</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Bottom Right</div>
          </Popover>
          <Popover
            placement='left-top'
            header={
              <p>Popover Header Left Top</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Left Top</div>
          </Popover>
          <Popover
            placement='left-bottom'
            header={
              <p>Popover Header Left Bottom</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Left Bottom</div>
          </Popover>
          <Popover
            placement='right-top'
            header={
              <p>Popover Header Right Top</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Right Top</div>
          </Popover>
          <Popover
            placement='right-bottom'
            header={
              <p>Popover Header Right Bottom</p>
            }
            content={
              <p>Popover Content</p>
            }>
            <div className='concise-component-popover-trigger'>Right Bottom</div>
          </Popover>
        </div>
      </div>
      <div className='concise-component-popover-variants'>Theme</div>
      <div className='concise-component-popover-bg-grey concise-component-popover-bg-grey-row'>
        <Popover
          placement='top'
          header={
            <p>Popover Header Dark</p>
          }
          content={
            <p>Popover Content</p>
          }
          theme='dark'>
          <div className='concise-component-popover-trigger'>Dark</div>
        </Popover>
        <Popover
          placement='top'
          header={
            <p>Popover Header Light</p>
          }
          content={
            <p>Popover Content</p>
          }
          theme='light'>
          <div className='concise-component-popover-trigger'>Light</div>
        </Popover>
        <Popover
          placement='top'
          header={
            <p>Popover Header Primary</p>
          }
          content={
            <p>Popover Content</p>
          }
          theme='primary'>
          <div className='concise-component-popover-trigger'>Primary</div>
        </Popover>
        <Popover
          placement='top'
          header={
            <p>Popover Header Destructive</p>
          }
          content={
            <p>Popover Content</p>
          }
          theme='destructive'>
          <div className='concise-component-popover-trigger'>Destructive</div>
        </Popover>
        <Popover
          placement='top'
          header={
            <p>Popover Header Secondary</p>
          }
          content={
            <p>Popover Content</p>
          }
          theme='secondary'>
          <div className='concise-component-popover-trigger'>Secondary</div>
        </Popover>
      </div>
      <div className='concise-component-popover-variants'>Active Mode</div>
      <div className='concise-component-popover-bg-grey concise-component-popover-bg-grey-row'>
        <Popover
          placement='top'
          header={
            <p>Popover Header Click</p>
          }
          content={
            <p>Popover Content</p>
          }>
          <div className='concise-component-popover-trigger'>Click</div>
        </Popover>
        <Popover
          placement='top'
          header={
            <p>Popover Header Hover</p>
          }
          content={
            <p>Popover Content</p>
          }
          activeMode='hover'>
          <div className='concise-component-popover-trigger'>Hover</div>
        </Popover>
        <Popover
          placement='top'
          header={
            <p>Popover Header Load</p>
          }
          content={
            <p>Popover Content</p>
          }
          activeMode='load'>
          <div className='concise-component-popover-trigger'>Reload Page</div>
        </Popover>
      </div>
      <div className='concise-component-popover-variants'>Size</div>
      <div className='concise-component-popover-bg-grey concise-component-popover-bg-grey-row'>
        <Popover
          placement='top'
          header={
            <p>Popover Header Medium</p>
          }
          content={
            <p>Popover Content</p>
          }>
          <div className='concise-component-popover-trigger'>Medium</div>
        </Popover>
        <Popover
          placement='top'
          header={
            <p>Popover Header Small</p>
          }
          content={
            <p>Popover Content</p>
          }
          size='small'>
          <div className='concise-component-popover-trigger'>Small</div>
        </Popover>
      </div>
      <div className='concise-component-popover-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>
    </div>
  )
}

export default PopoverPage
