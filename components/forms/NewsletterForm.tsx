'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { subscribe } from '@/app/actions/newsletter'
import type { NewsletterState } from '@/lib/validation'
import { cn } from '@/lib/cn'

const initial: NewsletterState = { status: 'idle' }

function Submit() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      aria-label="Inscrever"
      className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-gradient-primary text-paper transition-transform duration-base hover:-translate-y-0.5 disabled:opacity-60"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
    </button>
  )
}

/** Captura de e-mail reutilizável (newsletter / lead magnets). */
export function NewsletterForm({ className }: { className?: string }) {
  const [state, formAction] = useActionState(subscribe, initial)

  if (state.status === 'success') {
    return (
      <p className={cn('flex items-center gap-2 text-body-sm text-success', className)} role="status">
        <Check className="h-4 w-4" /> {state.message}
      </p>
    )
  }

  return (
    <form action={formAction} noValidate className={cn('flex flex-col gap-2', className)}>
      <div className="flex gap-2">
        <div aria-hidden className="absolute left-[-9999px]">
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <label htmlFor="newsletter-email" className="sr-only">
          Seu melhor e-mail
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          className="w-full rounded-md border border-line-soft bg-ink-2 px-4 py-3 text-body-sm text-paper placeholder:text-muted-2 focus-visible:border-line-active"
        />
        <Submit />
      </div>
      {state.status === 'error' && state.message && (
        <p className="text-caption text-danger" role="alert">
          {state.message}
        </p>
      )}
    </form>
  )
}
