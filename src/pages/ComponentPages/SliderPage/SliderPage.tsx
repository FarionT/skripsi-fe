import { IconType, Sliderr, SliderrDual } from 'ui-kit'
import './SliderPage.scss'
import { placeholder } from 'ui-kit/assets/image'

const SliderPage = () => {
  return (
    <div className='concise-component-slider-container'>
      <div className='concise-component-slider-title'>Slider</div>
      <div className='concise-component-slider-desc'>
        Sliders visualize a range of values and allow for the selection of a single value or a range
        of values.
      </div>
      <div className='concise-component-slider-subtitle'>Anatomy</div>
      <div className='concise-component-slider-bg-grey'>
        <div className='concise-component-slider-bg-white'>
          <SliderrDual
            min={0}
            max={100}
            sliderrNumMode='yes'
            sliderrToolTip='yes'
            sliderrThumbColour='white'
            onChange={({ min, max }) => {
              console.log(`New min value: ${min}, New max value: ${max}`)
            }}
          />
        </div>
      </div>
      <div className='concise-component-slider-desc-sec'>
        <p>
          witches can perform an action immediately and without confirmation. Slider may be grouped
          for multiple options.
        </p>
        <p>1. Switch toggle</p>
        <p>2. Label</p>
      </div>

      <div className='concise-component-slider-heading'>Variation</div>
      <div className='concise-component-slider-desc'>
        Slider can have their label placed to the left or the right of the switch toggle.
        Additionally when grouped as a list, switch labels can be aligned to the left, right, or top
        of the list container with the switch toggle aligned to the opposite side.
      </div>
      <div className='concise-component-slider-bg-grey'>
        <div className='concise-component-slider-bg-white'>
          <Sliderr sliderrType='primary' sliderInputMode='yes' />
          <Sliderr sliderrType='primary' sliderrThumbColour='blue' />
          <Sliderr sliderrType='primary' />
        </div>
        <div className='concise-component-slider-bg-white'>
          <SliderrDual
            min={0}
            max={100}
            sliderrNumMode='yes'
            sliderrStyle='blue'
            sliderrInputMode='non'
            onChange={({ min, max }) => {
              console.log(`New min value: ${min}, New max value: ${max}`)
            }}
          />
          <SliderrDual
            min={0}
            max={100}
            sliderrNumMode='yes'
            sliderrStyle='blue'
            sliderrThumbColour='blue'
            sliderrInputMode='yes'
            onChange={({ min, max }) => {
              console.log(`New min value: ${min}, New max value: ${max}`)
            }}
          />
          <SliderrDual
            min={0}
            max={100}
            sliderrNumMode='yes'
            sliderPrimaryColor='black'
            sliderSecondaryColor='pink'
            sliderrThumbColour='white'
            onChange={({ min, max }) => {
              console.log(`New min value: ${min}, New max value: ${max}`)
            }}
          />
        </div>
      </div>

      <div className='concise-component-slider-heading'>Appearance</div>

      <div className='concise-component-slider-subtitle'>Labels</div>
      <div className='concise-component-slider-desc'>
        Slider can have their label placed to the left or the right of the switch toggle.
        Additionally when grouped as a list, switch labels can be aligned to the left, right, or top
        of the list container with the switch toggle aligned to the opposite side.
      </div>

      <div className='concise-component-slider-style'>
        <div className='concise-component-slider-bg-grey'>
          <div className='concise-component-slider-bg-white'>
            <Sliderr sliderrType='primary' />
            <SliderrDual
              min={0}
              max={100}
              sliderrNumMode='yes'
              sliderrStyle='blue'
              onChange={({ min, max }) => {
                console.log(`New min value: ${min}, New max value: ${max}`)
              }}
            />
          </div>

          <div className='concise-component-slider-bg-white'>
            <Sliderr sliderrType='primary' sliderrShowNumbers='non' />
            <SliderrDual
              min={0}
              max={100}
              sliderrNumMode='non'
              onChange={({ min, max }) => {
                console.log(`New min value: ${min}, New max value: ${max}`)
              }}
            />
          </div>
        </div>
      </div>

      <div className='concise-component-slider-style'>
        <div className='concise-component-slider-bg-white'></div>
      </div>

      <div className='concise-component-slider-subtitle'>Behaviors</div>

      <div className='concise-component-slider-subtitle'>States</div>
      <div className='concise-component-slider-desc'>
        Slider have four possible states – selected, unselected, disabled or error.
      </div>

      <div className='concise-component-slider-bg-grey-col'>
        <div className='concise-component-slider-style'>
          <div className='concise-component-slider-style-text'>primary</div>
          <div className='concise-component-slider-bg-white'>
            <Sliderr sliderrSize='medium' sliderrType='primary' sliderrMode='mono' />
          </div>
        </div>

        <div className='concise-component-slider-style'>
          <div className='concise-component-slider-style-text'>Active (Dragging)</div>
          <div className='concise-component-slider-bg-white'>
            <Sliderr sliderrSize='medium' sliderrType='dragging' />
          </div>
        </div>

        <div className='concise-component-slider-style'>
          <div className='concise-component-slider-style-text'>Disabled</div>
          <div className='concise-component-slider-bg-white'>
            <Sliderr sliderrSize='medium' sliderrType='deactive' />
          </div>
        </div>
      </div>

      <div className='concise-component-slider-subtitle'>Size</div>
      <div className='concise-component-slider-desc'>
        Slider can be displayed in large or small sizes.
      </div>

      <div className='concise-component-slider-bg-grey-col'>
        <div className='concise-component-slider-style'>
          <div className='concise-component-slider-style-text'>small</div>
          <div className='concise-component-slider-bg-white'>
            <Sliderr sliderrSize='small' sliderrType='primary' />
          </div>
        </div>

        <div className='concise-component-slider-style'>
          <div className='concise-component-slider-style-text'>Medium</div>
          <div className='concise-component-slider-bg-white'>
            <Sliderr sliderrSize='medium' sliderrType='primary' />
          </div>
        </div>

        <div className='concise-component-slider-style'>
          <div className='concise-component-slider-style-text'>Large</div>
          <div className='concise-component-slider-bg-white'>
            <Sliderr sliderrSize='large' sliderrType='primary' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderPage
