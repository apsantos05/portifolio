import { useId } from 'react'
import { cn } from '@/lib/cn'

type BaseProps = {
  label: string
  name: string
  error?: string
  required?: boolean
  className?: string
  hint?: string
}

const controlBase =
  'w-full rounded-md border bg-ink-2 px-4 py-3 text-body-md text-paper placeholder:text-muted-2 ' +
  'transition-colors duration-base focus-visible:outline-none focus-visible:border-line-active ' +
  'focus-visible:shadow-[0_0_0_3px_rgba(132,163,218,0.20)]'

function useFieldIds(name: string, error?: string, hint?: string) {
  const id = useId()
  const controlId = `${name}-${id}`
  const errorId = error ? `${controlId}-error` : undefined
  const hintId = hint ? `${controlId}-hint` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined
  return { controlId, errorId, hintId, describedBy }
}

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-3 block text-body-sm font-medium text-muted">
      {children}
      {required && <span className="ml-1 text-accent" aria-hidden>*</span>}
    </label>
  )
}

function FieldError({ id, children }: { id?: string; children?: string }) {
  if (!children) return null
  return (
    <p id={id} className="mt-2 text-caption text-danger" role="alert">
      {children}
    </p>
  )
}

function Hint({ id, children }: { id?: string; children?: string }) {
  if (!children) return null
  return (
    <p id={id} className="mt-2 text-caption text-muted-2">
      {children}
    </p>
  )
}

/** Campo de texto (input). */
export function TextField({
  label,
  name,
  error,
  required,
  className,
  hint,
  type = 'text',
  ...rest
}: BaseProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'className'>) {
  const { controlId, errorId, hintId, describedBy } = useFieldIds(name, error, hint)
  return (
    <div className={className}>
      <Label htmlFor={controlId} required={required}>
        {label}
      </Label>
      <input
        id={controlId}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        aria-required={required}
        className={cn(controlBase, error ? 'border-danger' : 'border-line-soft')}
        {...rest}
      />
      <Hint id={hintId}>{hint}</Hint>
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  )
}

/** Campo de texto longo (textarea). */
export function TextAreaField({
  label,
  name,
  error,
  required,
  className,
  hint,
  rows = 5,
  ...rest
}: BaseProps & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name' | 'className'>) {
  const { controlId, errorId, hintId, describedBy } = useFieldIds(name, error, hint)
  return (
    <div className={className}>
      <Label htmlFor={controlId} required={required}>
        {label}
      </Label>
      <textarea
        id={controlId}
        name={name}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        aria-required={required}
        className={cn(controlBase, 'resize-y', error ? 'border-danger' : 'border-line-soft')}
        {...rest}
      />
      <Hint id={hintId}>{hint}</Hint>
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  )
}

/** Campo de seleção (select). */
export function SelectField({
  label,
  name,
  error,
  required,
  className,
  hint,
  options,
  ...rest
}: BaseProps & { options: { value: string; label: string }[] } & Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'name' | 'className'
  >) {
  const { controlId, errorId, hintId, describedBy } = useFieldIds(name, error, hint)
  return (
    <div className={className}>
      <Label htmlFor={controlId} required={required}>
        {label}
      </Label>
      <select
        id={controlId}
        name={name}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={cn(controlBase, 'cursor-pointer', error ? 'border-danger' : 'border-line-soft')}
        defaultValue=""
        {...rest}
      >
        <option value="" disabled>
          Selecione…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <Hint id={hintId}>{hint}</Hint>
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  )
}

/** Honeypot anti-spam — invisível e fora da ordem de tabulação. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website">Não preencha este campo</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  )
}
