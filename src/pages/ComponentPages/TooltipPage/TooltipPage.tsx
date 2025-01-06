import { Tooltip } from 'ui-kit'
import './TooltipPage.scss'

const TooltipPage = () => {
  return (
    <div className='concise-component-tooltip-container'>
      <div className='concise-component-tooltip-title'>Tooltip</div>
      <div className='concise-component-tooltip-subtitle'>
        Tooltips display informative, yet nonessential text on hover, tap, click or focus.
      </div>
      <div>
        <div className='concise-component-tooltip-subsubtitle'>Anatomy</div>
        <div className='concise-component-tooltip-desc'>Description text go here</div>
        <div className='concise-component-tooltip-bg-grey concise-component-tooltip-bg-grey-row'>
          <Tooltip placement='top' content='Tooltips'>
            <div className='concise-component-tooltip-trigger'>Hover Me</div>
          </Tooltip>
        </div>
        <div className='concise-component-tooltip-desc-sec'>
          Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </div>
      </div>
      <div className='concise-component-tooltip-variations'>Appearance</div>
      <div className='concise-component-tooltip-variants'>Placement</div>
      <div className='concise-component-tooltip-desc-sec'>
        Tooltips can be placed to the top, bottom, left or right of their related content. For top or bottom tooltips,
        the placement can be more specifically aligned to top left, top right, bottom left or bottom right. Additionally the
        placement can be set to automatically adjust position to avoid being cut off by a container or browser edge.
      </div>
      <div className='concise-component-tooltip-layout'>
        <div className='concise-component-tooltip-bg-grey concise-component-tooltip-bg-grey-column'>
          <Tooltip placement='bottom' content='Bottom'>
            <div className='concise-component-tooltip-trigger'>Bottom</div>
          </Tooltip>
          <Tooltip placement='top' content='Top'>
            <div className='concise-component-tooltip-trigger'>Top</div>
          </Tooltip>
          <Tooltip placement='right' content='Right'>
            <div className='concise-component-tooltip-trigger'>Right</div>
          </Tooltip>
          <Tooltip placement='left' content='Left'>
            <div className='concise-component-tooltip-trigger'>Left</div>
          </Tooltip>
        </div>
        <div className='concise-component-tooltip-bg-grey concise-component-tooltip-bg-grey-column'>
          <Tooltip placement='top-left' content='Top Left'>
            <div className='concise-component-tooltip-trigger'>Top Left</div>
          </Tooltip>
          <Tooltip placement='top-right' content='Top Right'>
            <div className='concise-component-tooltip-trigger'>Top Right</div>
          </Tooltip>
          <Tooltip placement='bottom-left' content='Bottom Left'>
            <div className='concise-component-tooltip-trigger'>Bottom Left</div>
          </Tooltip>
          <Tooltip placement='bottom-right' content='Bottom Right'>
            <div className='concise-component-tooltip-trigger'>Bottom Right</div>
          </Tooltip>
        </div>
      </div>

      <div className='concise-component-tooltip-variants'>Theme</div>
      <div className='concise-component-tooltip-bg-grey concise-component-tooltip-bg-grey-row'>
        <Tooltip placement='top' content='Dark' theme='dark'>
          <div className='concise-component-tooltip-trigger'>Dark</div>
        </Tooltip>
        <Tooltip placement='top' content='Light' theme='light'>
          <div className='concise-component-tooltip-trigger'>Light</div>
        </Tooltip>
        <Tooltip placement='top' content='Primary' theme='primary'>
          <div className='concise-component-tooltip-trigger'>Primary</div>
        </Tooltip>
        <Tooltip placement='top' content='Destructive' theme='destructive'>
          <div className='concise-component-tooltip-trigger'>Destructive</div>
        </Tooltip>
        <Tooltip placement='top' content='Secondary' theme='secondary'>
          <div className='concise-component-tooltip-trigger'>Secondary</div>
        </Tooltip>
      </div>

      <div className='concise-component-tooltip-desc-sec'>
        Usage guidelines description go here. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in
      </div>
    </div>
  )
}

export default TooltipPage
