import { useState } from 'react'
import './ButtonGroup.scss'

type TButtonGroupProps = {
  options: string[]
  inputType?: string
  inputName?: string
}

export const ButtonGroup: React.FC<TButtonGroupProps> = ({
  options,
  inputType = 'radio',
  inputName = 'options',
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.dataset.title!)
  }

  return (
    <div className='btn-group py-6'>
      {options.map((option) => (
        <input
          key={option}
          type={inputType}
          name={inputName}
          data-title={option}
          className='btn'
          checked={selectedOption === option}
          onChange={handleOptionChange}
        />
      ))}
    </div>
  )
}
