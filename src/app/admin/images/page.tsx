/* eslint-disable @next/next/no-img-element */
import { cloudinary } from '@/lib/cloudinary'
import ButtonUpload from './btnUpload'
import ListImages from './listImages'

const ImagePageAdmin = async () => {
  const result = await cloudinary.api.resources({
    type: 'upload',
    resource_type: 'image',
    max_results: 50,
  })

  const images = result.resources

  return (
    <div>
      <ButtonUpload />
      <ListImages images={images} />
    </div>
  )
}

export default ImagePageAdmin
