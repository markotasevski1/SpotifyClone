'use client'

import Modal from '@/components/Modal'
import { useEffect, useState } from 'react'

export default function ModalProvider() {
  // Ensuring that no modal can be seen or opened during SSR
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }
  return (
    <>
      <Modal title="title" description="test desc" isOpen onChange={() => {}}>
        children
      </Modal>
    </>
  )
}
