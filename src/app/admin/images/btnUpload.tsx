'use client'
import { CldUploadButton } from 'next-cloudinary'

const ButtonUpload = () => {
  return (
    <CldUploadButton
      signatureEndpoint='/api/images/upload-cloudinary'
      className='bg-color-1 text-white p-2 rounded-md'
    />
  )
}

export default ButtonUpload
