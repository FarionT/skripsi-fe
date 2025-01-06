import { DragEvent, useState, useRef, ChangeEvent } from 'react'
import Icon from 'ui-kit/Icon'
import './FileUpload.scss'
import classNames from 'classnames'

type TFileType = 'pdf' | 'jpg' | 'png'

type TFileUpload = {
  isDisabled?: boolean
  inputType?: 'input-only' | 'drag-and-drop' | 'complex'
  fileType?: TFileType[]
  files: File[]
  maxSize?: number // Max size in MB
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
}

export const FileUpload = ({
  isDisabled,
  inputType = 'drag-and-drop',
  fileType,
  files,
  maxSize = 5, // Default max size is 5 MB
  setFiles,
}: TFileUpload) => {
  const fileRef = useRef<HTMLInputElement | null>(null)
  const [isOver, setIsOver] = useState(false)
  const fileValidator = fileType?.map((item) => {
    if (item === 'jpg') return 'image/jpg'
    else if (item === 'pdf') return 'application/pdf'
    else if (item === 'png') return 'image/png'
  })

  const maxSizeInBytes = maxSize * 1024 * 1024 // Convert max size to bytes

  // Define the event handlers
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOver(true)
  }

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOver(false)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOver(false)

    const droppedFiles = Array.from(event.dataTransfer.files)
    const validFiles = droppedFiles.filter((file) => file.size <= maxSizeInBytes)

    if (validFiles.length < droppedFiles.length) {
      alert(`Some files exceed the maximum size of ${maxSize} MB`)
    } else {
      setFiles((prevFiles) => [...prevFiles, ...validFiles])
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      const validFiles = selectedFiles.filter((file) => file.size <= maxSizeInBytes)

      if (validFiles.length < selectedFiles.length) {
        alert(`Some files exceed the maximum size of ${maxSize} MB`)
      } else {
        setFiles((prevFiles) => [...prevFiles, ...validFiles])
      }
    }
  }

  const deleteFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  return (
    <>
      {inputType !== 'input-only' ? (
        <div>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={classNames('conciseFile', {
              conciseFileOver: isOver,
              conciseFileDisabled: isDisabled,
            })}
          >
            <Icon type='ArrowUp' className='conciseFile-icon' />
            <div className='conciseFile-text'>
              <div className='conciseFile-text-upper'>
                <b>Click to select file</b> or drag and drop here
              </div>
              {inputType === 'drag-and-drop' && (
                <div className='conciseFile-text-max'>Max. File Size {maxSize}MB</div>
              )}
            </div>
          </div>
          {inputType === 'complex' && (
            <div className='conciseFileComplex-text'>
              <div>
                <b>Supported Files: {fileType?.join(', ')}</b>
              </div>
              <div>Max. File Size {maxSize}MB</div>
            </div>
          )}
          {(inputType === 'complex' || inputType === 'drag-and-drop') && files?.length > 0 && (
            <div className='conciseFile-list'>
              {files.map((item: File, index) => {
                const fileSizeInKB = item.size / 1024
                const fileSize =
                  fileSizeInKB > 1024
                    ? `${(fileSizeInKB / 1024).toFixed(2)} MB`
                    : `${fileSizeInKB.toFixed(2)} KB`

                return (
                  <div key={index} className='conciseFile-list-item'>
                    <div className='conciseFile-list-item-upper'>
                      <div className='conciseFile-list-item-upper-name'>{item.name}</div>
                      <div className='conciseFile-list-item-upper-size'>{fileSize}</div>
                    </div>
                    <div className='conciseFile-list-item-lower'>Upload Completed.</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ) : (
        <>
          <div
            className={classNames('conciseFileInput', {
              conciseFileOver: isOver,
              conciseFileDisabled: isDisabled,
            })}
          >
            <div className='conciseFileInput-text'>
              <div
                className={`conciseFileInput-text-grey ${
                  files?.length !== 0 ? 'conciseFileInput-text-black' : ''
                }`}
              >
                {files?.length !== 0 ? files[0].name : 'Choose File'}
              </div>
              {files?.length !== 0 && (
                <Icon
                  type='Cross'
                  className='conciseFileInput-icon'
                  onClick={() => deleteFile(0)}
                  size='big'
                />
              )}
            </div>
            <div className='conciseFileInput-button' onClick={() => fileRef.current?.click()}>
              Browse File
            </div>
          </div>
        </>
      )}
      <input
        type='file'
        ref={fileRef}
        onChange={handleFileChange}
        className='conciseFile-none'
        accept={fileValidator?.join(', ')}
      />
    </>
  )
}
