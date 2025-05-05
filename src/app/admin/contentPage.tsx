'use client'

import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { ReactNode, useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import BestFood from '@/components/shared/home/bestFood'
import TimeOfferFood from '@/components/shared/home/timeOfferFood'
import AboutUs from '@/components/shared/home/aboutUs'
import BestSelling from '@/components/shared/home/bestSelling'
import { Button } from '@/components/ui/button'

import { SettingSectionItem } from '@/types/settings'

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
    cursor: 'grab',
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContentPage = ({
  dataHome,
  settingSection,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataHome: any
  settingSection: SettingSectionItem[]
}) => {
  const [data, setData] = useState(settingSection)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: any) => {
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
    }
  }

  const handleSave = async () => {
    // await saveSettingSection({ data: data })
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data }),
    })
  }

  return (
    <div className='max-w-[1200px] w-full mx-auto'>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={data.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {data.map((item) => (
            <SortableItem key={item.id} id={item.id}>
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
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
      <div className=' fixed right-0 top-10'>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  )
}

export default ContentPage
