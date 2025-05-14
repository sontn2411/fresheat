'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ImagesItem } from '@/types/images'
import Image from 'next/image'

const ListImages = ({ images }: { images: ImagesItem[] }) => {
  return (
    <>
      <Table>
        {images.length == 0 && (
          <TableCaption>A list of your images.</TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead className=''>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Dimensions</TableHead>
            <TableHead className=''>Size</TableHead>
            <TableHead className=''>Modified</TableHead>
            <TableHead className=''>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {images.map((item: any) => {
            const kb = (item.bytes / 1024).toFixed(2)
            return (
              <TableRow
                onClick={() => {
                  console.log('===')
                }}
                key={item.asset_id}
                className='cursor-pointer'
              >
                <TableCell className='font-medium'>
                  {item.display_name}
                </TableCell>
                <TableCell>{item.format}</TableCell>
                <TableCell>{kb} kb</TableCell>
                <TableCell className=''>
                  {item.width}x{item.height}
                </TableCell>
                <TableCell className=''>{item.created_at}</TableCell>
                <TableCell>
                  <Image
                    src={item.secure_url.replace(
                      '/upload/',
                      '/upload/w_50,h_50,c_fill,q_auto,f_auto/'
                    )}
                    alt={item.public_id}
                    width={50}
                    height={50}
                    className='object-cover'
                    unoptimized
                  />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ListImages
