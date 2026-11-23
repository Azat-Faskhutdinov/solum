import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import type { CheckoutForm, CheckoutMode, FieldName } from '../../lib/checkout'
import { DURATION, transition } from '../../lib/motion'
import { PillChoice, StackedPanels } from './Choice'
import { CONTROL, Field, FieldError, errorId } from './Field'
import { ProviderMark } from '../ui/ProviderMark'

type ModeTabsProps = {
  mode: CheckoutMode
  onModeChange: (mode: CheckoutMode) => void
  form: CheckoutForm
  errors: Partial<Record<FieldName, string>>
  onChange: <K extends keyof CheckoutForm>(name: K, value: CheckoutForm[K]) => void
  onBlur: (name: FieldName) => void
}

const PILL =
  'inline-flex h-11 w-full items-center justify-center gap-3 rounded-full border border-line px-5 text-body tracking-[-0.01em] transition-colors duration-500 ease-cinematic hover:border-ink hover:bg-ink hover:text-milk'

/**
 * Guest details or a Solum profile. Both panels share one grid cell, so the
 * box keeps the taller one's height and switching never moves the page.
 * Accounts don't exist yet: the profile side says so instead of pretending.
 */
export function ModeTabs({ mode, onModeChange, form, errors, onChange, onBlur }: ModeTabsProps) {
  const [linkAsked, setLinkAsked] = useState(false)

  const guest = (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field id="checkout-name" label="Имя и фамилия" error={errors.name}>
        <input
          id="checkout-name"
          className={CONTROL}
          autoComplete="name"
          value={form.name}
          onChange={(e) => onChange('name', e.target.value)}
          onBlur={() => onBlur('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errorId('checkout-name')}
          placeholder="Как в документе"
        />
      </Field>
      <Field id="checkout-email" label="Электронная почта" error={errors.email}>
        <input
          id="checkout-email"
          type="email"
          className={CONTROL}
          autoComplete="email"
          value={form.email}
          onChange={(e) => onChange('email', e.target.value)}
          onBlur={() => onBlur('email')}
          aria-invalid={!!errors.email}
          aria-describedby={`${errorId('checkout-email')} checkout-email-hint`}
          placeholder="name@example.com"
        />
      </Field>
      <p id="checkout-email-hint" className="font-mono text-label text-graphite-600 sm:col-span-2">
        На этот адрес придут подтверждение и код от двери.
      </p>
    </div>
  )

  const profile = (
    <div className="flex flex-col gap-4">
      <div id="checkout-account" tabIndex={-1} className="grid gap-3 sm:grid-cols-2 focus-visible:outline-none">
        <a href="#" onClick={(e) => { e.preventDefault(); setLinkAsked(true) }} className={PILL}>
          <ProviderMark provider="google" />
          Войти через Google
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setLinkAsked(true) }} className={PILL}>
          <ProviderMark provider="apple" />
          Войти через Apple
        </a>
      </div>
      <div className="flex items-center gap-4 font-mono text-label tracking-label text-stone-500 uppercase" aria-hidden>
        <span className="h-px flex-1 bg-line" />
        или
        <span className="h-px flex-1 bg-line" />
      </div>
      {/* Not a <form>: it sits inside the checkout form */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Field id="checkout-signin" label="Электронная почта" className="flex-1">
          <input
            id="checkout-signin"
            type="email"
            className={CONTROL}
            autoComplete="email"
            value={form.signInEmail}
            onChange={(e) => onChange('signInEmail', e.target.value)}
            placeholder="name@example.com"
          />
        </Field>
        <button type="button" onClick={() => setLinkAsked(true)} className={`${PILL} h-[3.75rem] sm:w-auto`}>
          <Mail size={16} strokeWidth={1.5} aria-hidden />
          Отправить ссылку для входа
        </button>
      </div>
      <div aria-live="polite" className="min-h-5">
        <AnimatePresence initial={false}>
          {linkAsked && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition(DURATION.micro)}
              className="font-mono text-label text-graphite-600"
            >
              Скоро откроем личный кабинет.{' '}
              <button type="button" onClick={() => onModeChange('guest')} className="text-ink underline underline-offset-4">
                Продолжить без аккаунта
              </button>
            </motion.p>
          )}
        </AnimatePresence>
        {!linkAsked && <FieldError id={errorId('checkout-account')} error={errors.account} />}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-6">
      <PillChoice
        label="Вариант оформления"
        layoutId="checkout-mode"
        full
        value={mode}
        onChange={onModeChange}
        options={[
          { value: 'guest', label: "Без аккаунта" },
          { value: 'profile', label: "Войти в Solum" },
        ]}
      />
      <StackedPanels active={mode} panels={{ guest, profile }} />
    </div>
  )
}
