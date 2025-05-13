'use client'
import { SettingSectionItem } from '@/types/settings'
import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { ReactNode, useState } from 'react'
import { CSS } from '@dnd-kit/utilities'
import BestFood from '@/components/shared/home/bestFood'
import TimeOfferFood from '@/components/shared/home/timeOfferFood'
import AboutUs from '@/components/shared/home/aboutUs'
import BestSelling from '@/components/shared/home/bestSelling'
import { setIsLoader } from '@/store/loading'
import { Menu } from 'lucide-react'

type SortableItemProps = {
  id: number
  children: ReactNode
}

function SortableItem({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '10px',
    margin: '5px 0',
    background: isDragging ? '#d1d5db' : '#f3f4f6',
    border: '1px solid #ccc',
    borderRadius: '4px',
    // cursor: 'grab',
  }

  return (
    <div
      onClick={() => console.log('======')}
      style={style}
      className='flex justify-between'
    >
      {children}
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className='cursor-grab'
      >
        <Menu />
      </div>
    </div>
  )
}

const ContentPage = ({
  settingSection,
  dataHome,
}: {
  dataHome: any
  settingSection: SettingSectionItem[]
}) => {
  const [data, setData] = useState(settingSection)

  const handleDragEnd = async (event: any) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = data.findIndex((item) => item.id === active.id)
      const newIndex = data.findIndex((item) => item.id === over?.id)

      const newData = [...data]
      const [movedItem] = newData.splice(oldIndex, 1)
      newData.splice(newIndex, 0, movedItem)

      const newArr = newData.map((item, index) => ({
        ...item,
        index: index + 1,
      }))

      setData(newArr)
      await handleSave(newArr)
    }
  }

  const handleSave = async (data: SettingSectionItem[]) => {
    setIsLoader(true)
    try {
      await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: data }),
      })
      setIsLoader(false)
    } catch {
      setIsLoader(false)
    }
  }

  return (
    <div className='flex gap-8'>
      <div className='bg-white rounded-lg p-4 max-w-50 w-full h-full'>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={data.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {data.map((item) => {
              const name = item.name.replace(/([a-z])([A-Z])/g, '$1 $2')
              return (
                <SortableItem key={item.id} id={item.id}>
                  <span className='cursor-pointer text-sm'>{name}</span>
                </SortableItem>
              )
            })}
          </SortableContext>
        </DndContext>
      </div>
      <div className=' overflow-y-scroll h-screen bg-white'>
        {data.map((item) => {
          return (
            <div key={item.id}>
              {item.name == 'BestFood' && <BestFood data={dataHome.BestFood} />}
              {item.name == 'TimeOfferFood' && (
                <TimeOfferFood data={dataHome.TimeOfferFood} />
              )}
              {item.name == 'AboutUs' && (
                <AboutUs data={dataHome.SectionAboutUs} />
              )}
              {item.name == 'BestSelling' && (
                <BestSelling data={dataHome.BestSelling} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ContentPage
