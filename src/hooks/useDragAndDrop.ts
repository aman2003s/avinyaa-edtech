import { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import type { Course } from '../types/course';

export const useDragAndDrop = (courses: Course[], onReorder?: (courses: Course[]) => void) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [items, setItems] = useState<Course[]>(courses);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        const newItems = arrayMove(items, oldIndex, newIndex);
        onReorder?.(newItems);
        return newItems;
      });
    }

    setActiveId(null);
  };

  const getActiveItem = () => {
    return items.find((item) => item.id === activeId);
  };

  return {
    items,
    setItems,
    activeId,
    sensors,
    handleDragStart,
    handleDragEnd,
    getActiveItem,
  };
}; 