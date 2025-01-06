import { Switch } from 'ui-kit';
import  './SwitchPage.scss'
import { useState } from 'react';

const SwitchPage = () => {
  const [value, setValue] = useState(false)
  const [value2, setValue2] = useState(false)
  const [value3, setValue3] = useState(false)
  const [value4, setValue4] = useState(false)
  const [value5, setValue5] = useState(false)
  const [value6, setValue6] = useState(false)
  const [value7, setValue7] = useState(false)
  const [value8, setValue8] = useState(false)
  const [value9, setValue9] = useState(false)
  const [value10, setValue10] = useState(false)
  const [value11, setValue11] = useState(false)
  const [value12, setValue12] = useState(false)
  const [value13, setValue13] = useState(false)
  const [value14, setValue14] = useState(false)

  return(
    <>
      <div className='concise-component-switch-container'>
      <div className='concise-component-switch-title'>Switch</div>
      <div className='concise-component-switch-text'>
        Switch toggles a single option on or off.
      </div>
      <div>
        <div className='concise-component-switch-subtitle'>Anatomy</div>
        <div className='concise-component-switch-bg-grey'>
          <div className='concise-component-switch-text-left'>
            <Switch value={value} onChange={() => setValue(!value)} />
            Label
          </div>     
        </div>
        <div className='concise-component-switch-text'>
          Switches can perform an action immediately and without confirmation. Switches may be grouped for multiple options.<br></br>
          1. Switch toggle<br></br>
          2. Label
        </div>
      </div>
      <div>
        <div className='concise-component-switch-subtitle'>Appearance</div>
        <div className='concise-component-switch-label'>Label Placement</div>
        <div className='concise-component-switch-text'>
          Switches can have their label placed to the left or the right of the switch toggle. Additionally when grouped as a list, switch labels can be aligned to the left, right, or top of the list container with the switch toggle aligned to the opposite side.
        </div>
        <div className='concise-component-switch-bg-grey'>
          <div className='concise-component-switch-line'>
            <div className='concise-component-switch-bg-white'>
              <div className='concise-component-switch-text-left'>
                <Switch value={value2} onChange={() => setValue2(!value2)}/>
              </div>     
            </div>
            <div className='concise-component-switch-bg-white'>
              <div className='concise-component-switch-text-top'>
                <Switch value={value3} onChange={() => setValue3(!value3)} />
                Top Label
              </div>     
            </div>
          </div>
          <div className='concise-component-switch-line'>
            <div className='concise-component-switch-bg-white'>
              <div className='concise-component-switch-text-right'>
                <Switch  value={value4} onChange={() => setValue4(!value4)}/>
                Left Label
              </div>     
            </div>
            <div className='concise-component-switch-bg-white'>
              <div className='concise-component-switch-text-left'>
                <Switch value={value5} onChange={() => setValue5(!value5)} />
                Right Label
              </div>     
            </div>
          </div>
          <div className='concise-component-switch-line'>
            <div className='concise-component-switch-bg-white'>
              <div className='concise-component-switch-list'>
                <div className='concise-component-switch-text-right'>
                  <Switch value={value6} onChange={() => setValue6(!value6)} />
                  Left list label
                </div>
              </div>     
              <div className='concise-component-switch-list'>
                <div className='concise-component-switch-text-right'>
                  <Switch  value={value7} onChange={() => setValue7(!value7)} />
                  Left list label
                </div>
              </div>
            </div>
            <div className='concise-component-switch-bg-white'>
              <div className='concise-component-switch-list'>
                <div className='concise-component-switch-text-left'>
                  <Switch value={value8} onChange={() => setValue8(!value8)} />
                  Right list label
                </div>     
              </div>
              <div className='concise-component-switch-list'>
                <div className='concise-component-switch-text-left'>
                  <Switch value={value9} onChange={() => setValue9(!value9)} />
                  Right list label
                </div>     
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='concise-component-switch-behavior'>Behaviors</div>
        <div className='concise-component-switch-label'>States</div>
        <div className='concise-component-switch-text'>
          Switches have four possible states – selected, unselected, disabled or error.
        </div>
        <div className='concise-component-switch-bg-behaviors'>
          <div className='concise-component-switch-bg-states'>
            <div className='concise-component-switch-text-right'>
              <Switch value={value10} onChange={() => setValue10(!value10)} />
              Selected
            </div>     
          </div>
          <div className='concise-component-switch-bg-states'>
            <div className='concise-component-switch-text-right'>
              <Switch />
              Unselected
            </div>     
          </div>
          <div className='concise-component-switch-bg-states'>
            <div className='concise-component-switch-text-right'>
              <Switch value={value11} onChange={() => setValue11(!value11)} isDisabled/>
              Disabled
            </div>     
          </div>
          <div className='concise-component-switch-bg-states'>
            <div className='concise-component-switch-text-right'>
              <Switch switchType='error' value={value12} onChange={() => setValue12(!value12)}/>
              Error
            </div>     
          </div>
        </div>
      </div>
      <div>
        <div className='concise-component-switch-behavior'>Sizes</div>
        <div className='concise-component-switch-text'>Switches can be displayed in large or small sizes.</div>
        <div className='concise-component-switch-bg-behaviors'>
          <div className='concise-component-switch-bg-states'>
            <div className='concise-component-switch-text-right'>
              <Switch value={value13} onChange={() => setValue13(!value13)} />
              Large
            </div>     
          </div>
          <div className='concise-component-switch-bg-states'>
            <div className='concise-component-switch-text-small'>
              <Switch switchSize='small' value={value14} onChange={() => setValue14(!value14)} />
              Small
            </div>     
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SwitchPage