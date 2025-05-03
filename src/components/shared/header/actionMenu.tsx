import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'

import Image from 'next/image'
import { logo } from '@/assets'
import { useStore } from '@tanstack/react-store'
import useMediaQueryStore from '@/store/mediaQuery'

const ActionMenu = () => {
  const { isLaptop } = useStore(useMediaQueryStore)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className={` cursor-pointer ${isLaptop ? 'text-black' : ''}`}>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent hideCloseIcon>
        <SheetHeader className='flex  !flex-row !justify-between !items-center'>
          <SheetTitle>
            <Image src={logo} alt='Logo' />
          </SheetTitle>
          <SheetPrimitive.Close data-slot='sheet-close'>
            <div className='border rounded-full p-4 bg-color-2 text-white cursor-pointer'>
              <X size={16} strokeWidth={3} />
            </div>
          </SheetPrimitive.Close>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'></div>
          <div className='grid grid-cols-4 items-center gap-4'></div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ActionMenu
