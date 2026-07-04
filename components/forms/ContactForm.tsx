'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, CheckCircle2, Loader2, MessageCircle } from 'lucide-react'
import { submitContact } from '@/app/actions/contact'
import type { ContactState } from '@/lib/validation'
import { projectTypes } from '@/content/contact'
import { TextField, TextAreaField, SelectField, Honeypot } from './Field'
import { cn } from '@/lib/cn'

const initialState: ContactState = { status: 'idle' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        'group inline-flex items-center gap-2 rounded-pill bg-gradient-primary py-3.5 pl-7 pr-2',
        'font-sans text-base font-semibold text-paper shadow-glow transition-all duration-base',
        'hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60',
      )}
    >
      {pending ? 'Enviando…' : 'Enviar mensagem'}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform duration-base group-hover:translate-x-0.5">
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowRight className="h-4 w-4" />
        )}
      </span>
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  // Fecho do fluxo: no sucesso, abre o WhatsApp automaticamente.
  // Tenta nova aba; se o navegador bloquear, redireciona na mesma aba (nunca falha).
  useEffect(() => {
    if (state.status === 'success' && state.whatsappUrl) {
      const win = window.open(state.whatsappUrl, '_blank', 'noopener,noreferrer')
      if (!win) window.location.href = state.whatsappUrl
    }
  }, [state.status, state.whatsappUrl])

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-xl border border-line-active/60 bg-panel p-8"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-success/[0.12] text-success">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-heading-md font-semibold text-paper">
            Recebido!
          </h3>
          <p className="mt-2 text-body-md text-muted">{state.message}</p>
        </div>
        {state.whatsappUrl && (
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-pill border border-line-active/70 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-subtle"
          >
            <MessageCircle className="h-4 w-4" />
            Não abriu? Abrir o WhatsApp
          </a>
        )}
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Nome"
          name="name"
          required
          autoComplete="name"
          placeholder="Como devo te chamar?"
          error={state.errors?.name}
        />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@empresa.com"
          error={state.errors?.email}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Empresa"
          name="company"
          autoComplete="organization"
          placeholder="Opcional"
          error={state.errors?.company}
        />
        <SelectField
          label="Tipo de projeto"
          name="projectType"
          options={projectTypes.map((t) => ({ value: t.value, label: t.label }))}
          error={state.errors?.projectType}
        />
      </div>
      <TextAreaField
        label="Sobre o projeto"
        name="message"
        required
        placeholder="Conte o problema que você quer resolver, o objetivo e o prazo, se tiver."
        error={state.errors?.message}
      />

      <div className="mt-2 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <SubmitButton />
          {state.status === 'error' && state.message && (
            <p className="text-caption text-danger" role="alert">
              {state.message}
            </p>
          )}
        </div>
        <p className="text-caption text-muted-2">
          Você será direcionado ao WhatsApp para finalizarmos a conversa.
        </p>
      </div>
    </form>
  )
}
