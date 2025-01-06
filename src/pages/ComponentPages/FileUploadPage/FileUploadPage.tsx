import { FileUpload } from 'ui-kit'
import './FileUploadPage.scss'
import { useState } from 'react'

const FileUploadPage = () => {
  const [files, setFiles] = useState<File[]>([])
  const [files2, setFiles2] = useState<File[]>([])
  const [files3, setFiles3] = useState<File[]>([])
  const [files4, setFiles4] = useState<File[]>([])
  const [files5, setFiles5] = useState<File[]>([])
  const [files6, setFiles6] = useState<File[]>([])
  const [files7, setFiles7] = useState<File[]>([])
  const [files8, setFiles8] = useState<File[]>([])
  const [files9, setFiles9] = useState<File[]>([])
  return (
    <>
      <div className='concise-component-file-container'>
        <div className='concise-component-file-title'>File Upload</div>
        <div className='concise-component-file-subtitle'>
          Switch toggles a single option on or off.
        </div>
        <div className='concise-component-file-subsubtitle'>Anatomy</div>
        <div className='concise-component-file-bg-grey'>
          <div className='concise-component-file-bg-white'>
            <FileUpload files={files} setFiles={setFiles} />
          </div>
        </div>
        <div className='concise-component-file-desc-sec'>
          Switches can perform an action immediately and without confirmation. Switches may be
          grouped for multiple options.
          <br />
          Switch toggle
          <br />
          Label
        </div>
        <div className='concise-component-file-subsubtitle'>Appearance</div>
        <div className='concise-component-file-variations'>Variations</div>
        <div className='concise-component-file-desc-sec'>
          Switches can have their label placed to the left or the right of the switch toggle.
          Additionally when grouped as a list, switch labels can be aligned to the left, right, or
          top of the list container with the switch toggle aligned to the opposite side.
        </div>
        <div className='concise-component-file-bg-orientation'>
          <div>
            <div>Input Only</div>
            <div className='concise-component-file-bg-white w-96'>
              <FileUpload files={files2} setFiles={setFiles2} inputType='input-only' />
            </div>
          </div>
          <div>
            <div>Basic Drag and Drop File</div>
            <div className='concise-component-file-bg-white w-96'>
              <FileUpload files={files3} setFiles={setFiles3} />
            </div>
          </div>
          <div>
            <div>Complex</div>
            <div className='concise-component-file-bg-white w-96'>
              <FileUpload files={files4} setFiles={setFiles4} inputType='complex' fileType={['png', 'pdf']} />
            </div>
          </div>
        </div>
        <div className='concise-component-file-subsubtitle'>States</div>
        <div className='concise-component-file-desc-sec'>Switches have four possible states – selected, unselected, disabled or error.</div>
        <div className='concise-component-file-variations'>Basic</div>
        <div className='concise-component-file-bg-orientation'>
          <div>
            <div>Default</div>
            <div className='concise-component-file-bg-white'>
              <FileUpload files={files5} setFiles={setFiles5} />
            </div>
          </div>
          <div>
            <div>Disabled</div>
            <div className='concise-component-file-bg-white'>
              <FileUpload files={files6} setFiles={setFiles6} isDisabled />
            </div>
          </div>
        </div>
        <div className='concise-component-file-variations'>Complex</div>
        <div className='concise-component-file-bg-orientation'>
          <div>
            <div>Default</div>
            <div className='concise-component-file-bg-white'>
              <FileUpload files={files7} setFiles={setFiles7} inputType='complex' fileType={['png', 'pdf', 'jpg']}/>
            </div>
          </div>
          <div>
            <div>Disabled</div>
            <div className='concise-component-file-bg-white'>
              <FileUpload files={files8} setFiles={setFiles8} inputType='complex' isDisabled />
            </div>
          </div>
        </div>
        <div className='concise-component-file-variations'>Input Only</div>
        <div className='concise-component-file-bg-orientation'>
          <div>
            <div>Default</div>
            <div className='concise-component-file-bg-white'>
              <FileUpload files={files9} setFiles={setFiles9} inputType='input-only' fileType={['png', 'pdf']} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FileUploadPage
