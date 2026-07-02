'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { submitContact } from '@/app/actions/contact'
import type { ContactState } from '@/lib/validation'
import { TextField, TextAreaField, SelectField, Honeypot } from './Field'
import { cn } from '@/lib/cn'

const projectTypes = [
  { value: 'site', label: 'Site profissional' },
  { value: 'sistema', label: 'Sistema web / SaaS' },
  { value: 'aplicacao', label: 'Aplicação / automação' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'integracao', label: 'API / integração' },
  { value: 'ia', label: 'IA aplicada' },
  { value: 'outro', label: 'Outro' },
]

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
            Mensagem enviada
          </h3>
          <p className="mt-2 text-body-md text-muted">{state.message}</p>
        </div>
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
          options={projectTypes}
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

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <SubmitButton />
        {state.status === 'error' && state.message && (
          <p className="text-caption text-danger" role="alert">
            {state.message}
          </p>
        )}
      </div>
    </form>
  )
}
