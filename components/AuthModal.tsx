'use client'

import {
  useSessionContext,
  useSupabaseClient,
} from '@supabase/auth-helpers-react'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useAuthModal from '@/hooks/useAuthModel'
import { useEffect } from 'react'

export function AuthModal() {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const { session } = useSessionContext()
  const {} = useAuthModal()
  const { onClose, isOpen } = useAuthModal()
  useEffect(() => {
    if (session) {
      router.refresh()
      onClose()
    }
  }, [session, router, onClose])

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }
  return (
    <Modal
      title="welcome back"
      description="login to your acc"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={['github']}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#22c55e',
              },
            },
          },
        }}
        theme="dark"
      />
    </Modal>
  )
}
