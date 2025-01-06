import { useState } from 'react';
import { Checkbox, RadioButton } from 'ui-kit';

const TestingCheckboxRadio = () => {
  return(
    <>
      <p className="pl-5 pt-5">Checkbox</p>
      <div className="flex flex-wrap gap-5 p-5">
        <Checkbox label='Checkbox' isChecked></Checkbox>
      </div>
      <p className="pl-5 pt-5">Inline Horizontal Group</p>
      <div className="flex flex-row gap-12 p-5">
        <Checkbox label='Checkbox'></Checkbox>
        <Checkbox label='Checkbox'></Checkbox>
        <Checkbox label='Checkbox' isChecked></Checkbox>
        <Checkbox label='Checkbox'></Checkbox>
      </div>
      <p className="pl-5 pt-5">Stacked Vertical Group</p>
      <div className="flex flex-col gap-5 p-5">
        <Checkbox label='Checkbox'></Checkbox>
        <Checkbox label='Checkbox'></Checkbox>
        <Checkbox label='Checkbox' isChecked></Checkbox>
        <Checkbox label='Checkbox'></Checkbox>
      </div>
      <p className="pl-5 pt-5">Label Placement</p>
      <div className="flex flex-wrap gap-10 p-5">
        <Checkbox label='Checkbox' labelPlacement='right'></Checkbox>
        <Checkbox label='Checkbox' labelPlacement='left'></Checkbox>
      </div>
      <p className="pl-5 pt-5">Frameless</p>
      <div className="flex flex-wrap gap-5 p-5">
        <Checkbox label='Checkbox'></Checkbox>
        <Checkbox label='Checkbox'></Checkbox>
        <Checkbox label='Checkbox' isChecked></Checkbox>
        <Checkbox label='Checkbox' isDisabled></Checkbox>
        <Checkbox label='Checkbox' isChecked isDisabled></Checkbox>
      </div>
      <p className="pl-5 pt-5">Framed</p>
      <div className="flex flex-wrap gap-5 p-5">
        <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='outline'></Checkbox>
        <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='hovered'></Checkbox>
        <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='filled' isChecked></Checkbox>
        <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='frameless' isDisabled></Checkbox>
        <Checkbox label='Checkbox' checkboxBorder='framed' checkboxType='transparent' isChecked isDisabled></Checkbox>
      </div>
      <p className="pl-5 pt-5">Small</p>
      <div className="flex flex-wrap gap-5 p-5">
        <Checkbox checkboxSize='small'></Checkbox>
        <Checkbox checkboxSize='small'></Checkbox>
        <Checkbox checkboxSize='small' isDisabled></Checkbox>
        <Checkbox checkboxSize='small' isChecked></Checkbox>
        <Checkbox checkboxSize='small' isChecked isDisabled></Checkbox>
        <Checkbox checkboxSize='small' checkboxBorder='white'></Checkbox>
        <Checkbox checkboxSize='small' checkboxBorder='white' isChecked></Checkbox>
        <Checkbox checkboxSize='small' checkboxBorder='blue' isChecked></Checkbox>
      </div>
      <p className="pl-5 pt-5">Medium</p>
      <div className="flex flex-wrap gap-5 p-5">
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox isDisabled></Checkbox>
        <Checkbox isChecked></Checkbox>
        <Checkbox isChecked isDisabled></Checkbox>
        <Checkbox checkboxBorder='white'></Checkbox>
        <Checkbox checkboxBorder='white' isChecked></Checkbox>
        <Checkbox checkboxBorder='blue' isChecked></Checkbox>
      </div>
      <p className="pl-5 pt-5">Large</p>
      <div className="flex flex-wrap gap-5 p-5">
        <Checkbox checkboxSize='large'></Checkbox>
        <Checkbox checkboxSize='large'></Checkbox>
        <Checkbox checkboxSize='large'isDisabled></Checkbox>
        <Checkbox checkboxSize='large' isChecked></Checkbox>
        <Checkbox checkboxSize='large' isChecked isDisabled></Checkbox>
        <Checkbox checkboxSize='large' checkboxBorder='white'></Checkbox>
        <Checkbox checkboxSize='large' checkboxBorder='white' isChecked></Checkbox>
        <Checkbox checkboxSize='large' checkboxBorder='blue' isChecked></Checkbox>
      </div>
      <p className="pl-5 pt-5">Radio Button</p>
      <div className="flex flex-wrap gap-5 p-5">
        <RadioButton label='Radio Button' name='radioButton' isChecked></RadioButton>
      </div>
      <p className="pl-5 pt-5">Inline Horizontal Group</p>
      <div className="flex flex-row gap-12 p-5">
        <RadioButton label='Label' name='inlineHorizontal'></RadioButton>
        <RadioButton label='Label' name='inlineHorizontal'></RadioButton>
        <RadioButton label='Label' name='inlineHorizontal'></RadioButton>
      </div>
      <p className="pl-5 pt-5">Stacked Vertical Group</p>
      <div className="flex flex-col gap-5 p-5">
        <RadioButton label='Label' name='stackedVertical'></RadioButton>
        <RadioButton label='Label' name='stackedVertical'></RadioButton>
        <RadioButton label='Label' name='stackedVertical'></RadioButton>
      </div>
      <p className="pl-5 pt-5">Label Placement</p>
      <div className="flex flex-wrap gap-10 p-5">
        <RadioButton label='Label' labelPlacement='right' name='leftPlacement' isChecked></RadioButton>
        <RadioButton label='Radio Button' labelPlacement='left' name='rightPlacement' isChecked></RadioButton>
      </div>
      <p className="pl-5 pt-5">Type</p>
      <div className="flex flex-row gap-5 p-5">
        <RadioButton label='Label' name='radioButton' ></RadioButton>
        <RadioButton label='Label' radioButtonType='hovered' name='radioButtonHover'></RadioButton>
        <RadioButton label='Label' name='radioButtonChecked' isChecked></RadioButton>
        <RadioButton label='Label' name='radioButtonDisabled' isDisabled></RadioButton>
        <RadioButton label='Label' radioButtonType='error' name='radioButtonError'></RadioButton>
      </div>
      <p className="pl-5 pt-5">Size</p>
      <div className="flex flex-wrap gap-5 p-5">
        <RadioButton label='Label' name='radioButtonMedium' isChecked></RadioButton>
        <RadioButton label='Label' radioButtonSize='small' name='radioButtonSmall' isChecked></RadioButton>
      </div>
    </>
  )
}

export default TestingCheckboxRadio;