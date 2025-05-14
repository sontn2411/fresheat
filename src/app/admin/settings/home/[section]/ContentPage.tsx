import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import InputImage from '@/components/ui/inputImage'
import { Textarea } from '@/components/ui/textarea'
import ROUTES from '@/data/routes'
import { toPascalCase } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const ContentPage = ({ section }: { section: string }) => {
  const sectionName = toPascalCase(section)

  return (
    <div className='flex gap-8'>
      <div className='bg-white rounded-lg p-4 max-w-50 w-full h-full'>
        <Link href={ROUTES.SETTINGS.HOME.ROOT} className='flex gap-2'>
          <ArrowLeft />
          <span className=' font-medium '>
            {sectionName.replace(/([a-z])([A-Z])/g, '$1 $2')}
          </span>
        </Link>
        <form className='flex flex-col gap-4 mt-4 '>
          <Input name='title' placeholder='Title' />
          <Textarea name='desc' placeholder='Describe' />
          <InputImage />
          <Button className=' hover:cursor-pointer'>Save</Button>
        </form>
      </div>
    </div>
  )
}

export default ContentPage
