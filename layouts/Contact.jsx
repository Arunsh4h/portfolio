import React, { useState } from 'react'
import classNames from 'clsx'
import { useForm, FormProvider } from 'react-hook-form'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import FormInput from '@/components/FormInput'
import FormTextarea from '@/components/FormTextarea'
import FormSelect from '@/components/FormSelect'
import FormCheckbox from '@/components/FormCheckbox'
import FormRadio from '@/components/FormRadio'
import Button from '@/components/Button'
import { SlCheck } from 'react-icons/sl'
import { config } from '../theme.config'

// Enhanced CSS animations with error-specific effects
const animationStyles = `
  @keyframes scale-in {
    0% { transform: scale(0); opacity: 0; }
    70% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes ripple {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  @keyframes fade-in-up {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes pulse-custom {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  @keyframes error-glow {
    0% { box-shadow: 0 0 0 rgba(239, 68, 68, 0); }
    50% { box-shadow: 0 0 8px rgba(239, 68, 68, 0.6); }
    100% { box-shadow: 0 0 0 rgba(239, 68, 68, 0); }
  }
  .animate-scale-in {
    animation: scale-in 0.5s forwards;
  }
  .animate-ripple {
    animation: ripple 1.5s infinite;
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.5s forwards;
  }
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
  .animate-pulse-custom {
    animation: pulse-custom 1.5s infinite;
  }
  .animate-delay-150 {
    animation-delay: 150ms;
  }
  .animate-shake {
    animation: shake 0.5s forwards;
  }
  .animate-error-glow {
    animation: error-glow 1.5s infinite;
  }
  /* 🔥 Sleek Modern Error Input */
.field-error {
  border: 2px solid rgba(255, 77, 77, 0.8) !important;
  background: rgba(255, 77, 77, 0.05) !important;
  animation: error-pulse 1s ease-in-out infinite alternate;
  box-shadow: 0 0 8px rgba(255, 77, 77, 0.4);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

/* ⚡ Minimal, Modern Error Message */
.error-message {
  display: inline-block;
  background: rgba(255, 77, 77, 0.9);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  position: relative;
  animation: fade-in 0.3s ease-in-out;
}

/* 🔔 Subtle Alert Indicator (Floating Red Dot) */
.error-message::before {
  content: "!";
  position: absolute;
  top: -8px;
  right: -8px;
  width: 14px;
  height: 14px;
  background: #ff4d4d;
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 77, 77, 0.6);
}

/* 🔥 Subtle Pulse Animation for Attention */
@keyframes error-pulse {
  from {
    box-shadow: 0 0 8px rgba(255, 77, 77, 0.4);
  }
  to {
    box-shadow: 0 0 15px rgba(255, 77, 77, 0.8);
  }
}

/* 🎯 Fade-in Effect for Smooth Appearance */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

  
  /* Fix checkbox/radio text selection issues */
  .select-none * {
    user-select: none;
  }
  .form-checkbox-label,
  .form-radio-label {
    user-select: none;
  }

  /* 🔥 Graffiti-Inspired Neon Inputs */
input, 
textarea, 
select {
  color:#00fffa !important;
  font-size: 1rem;
  font-weight: normal;
  border: 2px solid transparent;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(30, 30, 30, 0.9));
  transition: all 0.4s ease-in-out;
  border-radius: 14px;
  padding: 14px 16px;
  
  font-family: 'Poppins', sans-serif;
}

input:hover, 
textarea:hover, 
select:hover {
  border-color: rgba(0, 255, 128, 0.8) !important;
  background: rgba(0, 255, 128, 0.1);
  box-shadow: 0 0 5px rgba(0, 255, 128, 0.7), 0 0 8px rgba(0, 255, 128, 0.3) inset;
  transform: scale(1) rotate(-2deg);
}

/* 🔥 Focus Effect - Wild Neon Spray */
input:focus, 
textarea:focus, 
select:focus {
  border-color: #ffcc00 !important;
  box-shadow: 0 0 30px rgba(255, 204, 0, 1), 0 0 50px rgba(255, 204, 0, 0.5) inset;
  animation: graffitiFlash 0.7s infinite alternate ease-in-out;
  transform: scale(1.05) rotate(1deg);
}


@keyframes graffitiFlash {
  0% {
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.7);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 204, 0, 1);
  }
}


  .form-checkbox-label span,
  .form-radio-label span {
    pointer-events: none;
  }
`

const { inputs } = config.contactForm || {}

const FormComponent = {
  text: FormInput,
  textarea: FormTextarea,
  select: FormSelect,
  radio: FormRadio,
  checkbox: FormCheckbox,
}

// Enhanced validation rules
const validationRules = {
  'first-name': {
    required: 'First name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Name cannot exceed 50 characters',
    },
    pattern: {
      value: /^[A-Za-z\s\-'.]+$/,
      message: 'Please enter a valid name (letters, spaces, hyphens, apostrophes only)',
    },
    validate: {
      noNumeric: (value) => !/\d/.test(value) || 'Name cannot contain numbers',
    },
  },
  'last-name': {
    required: 'Last name is required',
    minLength: {
      value: 2,
      message: 'Last name must be at least 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Last name cannot exceed 50 characters',
    },
    pattern: {
      value: /^[A-Za-z\s\-'.]+$/,
      message: 'Please enter a valid last name (letters, spaces, hyphens, apostrophes only)',
    },
    validate: {
      noNumeric: (value) => !/\d/.test(value) || 'Last name cannot contain numbers',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address',
    },
    validate: {
      noBannedDomains: (value) => {
        if (!value) return true
        const bannedDomains = ['tempmail.com', 'throwaway.com', 'mailinator.com']
        const domain = value.split('@')[1]
        return !domain || !bannedDomains.includes(domain) || 'This email domain is not allowed'
      },
    },
  },
  phone: {
    pattern: {
      value: /^(\+\d{1,3}[- ]?)?\d{10,14}$/,
      message: 'Please enter a valid phone number',
    },
    validate: {
      validCountryCode: (value) => {
        if (!value) return true // Skip if empty
        if (value.startsWith('+')) {
          const validCountryCodes = ['+1', '+44', '+61', '+91', '+86', '+33', '+49'] // Example codes
          return validCountryCodes.some((code) => value.startsWith(code)) || 'Invalid country code'
        }
        return true
      },
    },
  },
  budget: {
    required: 'Please select a budget option',
  },
  message: {
    required: 'Project description is required',
    minLength: {
      value: 100,
      message: 'Please provide at least 10 characters',
    },
    maxLength: {
      value: 10000,
      message: 'Message cannot exceed 10,000 characters',
    },
    validate: {
      noSensitiveInfo: (value) => {
        if (!value) return true
        const sensitivePatterns = [
          /\b(?:\d[ -]*?){13,16}\b/, // Credit card numbers
          /\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/, // SSN
        ]
        return (
          !sensitivePatterns.some((pattern) => pattern.test(value)) ||
          'Please do not include sensitive information (credit cards, SSN)'
        )
      },
      wordCount: (value) => {
        if (!value) return true
        const wordCount = value.split(/\s+/).filter(Boolean).length
        return wordCount >= 5 || 'Please provide at least 5 words'
      },
    },
  },
  terms: {
    required: 'You must accept the terms and conditions',
  },
}

// Enhanced error message component with animation
const ErrorMessage = ({ errors, name }) => {
  const error = errors[name]

  return error ? (
    <div className="error-message  rounded-sm border-l-2 border-red-500 bg-red-500/10 px-1 py-1 text-sm text-red-500">
      {error.message}
    </div>
  ) : null
}

// Modern loading spinner component
const LoadingSpinner = () => (
  <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center bg-gradient-to-br from-omega-900/80 to-omega-800/90 backdrop-blur-sm transition-all duration-300 ease-in-out">
    <div className="transform rounded-xl border border-alpha/20 bg-gradient-to-r from-omega-900 to-omega-800 p-8 shadow-2xl transition-transform">
      <div className="relative mb-6 flex justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-2 border-b-2 border-alpha"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-delay-150 h-12 w-12 animate-spin rounded-full border-r-2 border-l-2 border-beta"></div>
        </div>
        <div className="h-8 w-8 animate-pulse rounded-full bg-alpha"></div>
      </div>
      <p className="text-center text-lg font-light tracking-wider">
        <span className="inline-block animate-pulse">Sending</span> your message...
      </p>
    </div>
  </div>
)

// Modern success message component
const SuccessMessage = () => (
  <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center bg-gradient-to-br from-omega-900/80 to-omega-800/90 backdrop-blur-sm transition-all duration-500 ease-in-out">
    <div className="transform rounded-xl border border-alpha/20 bg-gradient-to-r from-omega-900 to-omega-800 p-8 shadow-2xl transition-all">
      <div className="relative mb-4 flex justify-center">
        <div className="relative h-20 w-20">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-alpha/10">
            <SlCheck className="animate-scale-in text-5xl text-alpha" />
          </div>
          <div className="animate-ripple absolute inset-0 rounded-full border-2 border-alpha/50"></div>
        </div>
      </div>
      <h5 className="animate-fade-in-up mb-2 text-center text-xl font-semibold">
        Thank you for contacting me.
      </h5>
      <p className="animate-fade-in-up animation-delay-200 text-center text-omega-300">
        I will get back to you as soon as possible.
      </p>
    </div>
  </div>
)

const Contact01 = ({ main = {} }) => {
  // Manage form submission state directly with useState
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)
  const [serviceError, setServiceError] = useState(null)
  const [touchedFields, setTouchedFields] = useState({})

  // Use the built-in hook-form validator
  const methods = useForm({
    defaultValues: {},
    mode: 'onChange', // Enables real-time validation
  })

  const {
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
    trigger,
    watch,
  } = methods

  // Mark field as touched on blur
  const onFieldBlur = (name) => {
    setTouchedFields((prev) => ({ ...prev, [name]: true }))
    trigger(name) // Validate the field
  }

  // Check if field has been touched and has errors
  const shouldShowError = (name) => {
    return (isSubmitted || touchedFields[name]) && errors[name]
  }

  // Complete implementation to auto-capitalize the first letter of first and last names
  // in the Contact01 component

  // Replace the existing registerField function in the Contact01 component with this updated version:

  // --- ENHANCED NAME CAPITALIZATION ---

  // This enhanced version capitalizes first letter of each word in names
  // and provides real-time feedback on remaining character count for messages

  const registerField = (name) => {
    const rules = validationRules[name] || {}

    // Create the base registration
    const registration = {
      ...register(name, rules),
      onBlur: () => onFieldBlur(name),
      className: classNames({
        'field-error': shouldShowError(name),
      }),
    }

    // Enhanced auto-capitalization for name fields
    if (name === 'first-name' || name === 'last-name') {
      registration.onInput = (e) => {
        const value = e.target.value
        if (value && value.length > 0) {
          // Capitalize the first letter of each word
          const capitalized = value
            .split(' ')
            .map((word) =>
              word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : ''
            )
            .join(' ')

          // Also handle hyphenated names
          const finalValue = capitalized
            .split('-')
            .map((part) => (part.length > 0 ? part.charAt(0).toUpperCase() + part.slice(1) : ''))
            .join('-')

          // Only update if it's different to avoid cursor position issues
          if (finalValue !== value) {
            // Save cursor position
            const start = e.target.selectionStart
            const end = e.target.selectionEnd
            const diff = finalValue.length - value.length

            // Update value
            e.target.value = finalValue

            // Restore cursor position
            e.target.setSelectionRange(start + (diff > 0 ? 1 : 0), end + (diff > 0 ? 1 : 0))

            // Manually update the form value
            const event = new Event('input', { bubbles: true })
            e.target.dispatchEvent(event)
          }
        }
      }
    }

    // Add message character counter
    if (name === 'message') {
      // Create a counter element if it doesn't exist
      registration.onFocus = (e) => {
        const textarea = e.target
        let counter = textarea.parentNode.querySelector('.char-counter')

        if (!counter) {
          counter = document.createElement('div')
          counter.className = 'char-counter text-xs text-omega-300 mt-1 text-right'
          textarea.parentNode.appendChild(counter)
        }

        // Initial update
        updateCounter(textarea, counter)
      }

      // Update counter on input
      registration.onInput = (e) => {
        const textarea = e.target
        const counter = textarea.parentNode.querySelector('.char-counter')
        if (counter) {
          updateCounter(textarea, counter)
        }

        // Check for common sensitive patterns and highlight them
        highlightSensitiveContent(textarea)
      }
    }

    return registration
  }

  // Function to update character counter
  const updateCounter = (textarea, counterElement) => {
    const value = textarea.value
    const maxLength = 10000
    const currentLength = value.length
    const wordCount = value.split(/\s+/).filter(Boolean).length

    let color = 'text-omega-300'
    if (currentLength > maxLength * 0.8) {
      color = 'text-yellow-500'
    }
    if (currentLength > maxLength * 0.9) {
      color = 'text-red-500'
    }

    counterElement.className = `char-counter text-xs mt-1 text-right ${color}`
    counterElement.innerHTML = `${currentLength}/${maxLength} characters | ${wordCount} words`
  }

  // Function to highlight potentially sensitive content
  const highlightSensitiveContent = (textarea) => {
    const value = textarea.value
    const sensitivePatterns = [
      /\b(?:\d[ -]*?){13,16}\b/, // Credit card numbers
      /\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/, // SSN
      /\b(?:[A-Za-z0-9]+(?:\+[A-Za-z0-9]+)?\@[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)+)\b/g, // Email addresses
    ]

    let hasSensitiveContent = false

    sensitivePatterns.forEach((pattern) => {
      if (pattern.test(value)) {
        hasSensitiveContent = true
      }
    })

    // Visual feedback for sensitive content
    if (hasSensitiveContent) {
      textarea.classList.add('border-red-500', 'bg-red-500/5', 'animate-pulse-custom')

      // Create warning if it doesn't exist
      let warning = textarea.parentNode.querySelector('.sensitive-warning')
      if (!warning) {
        warning = document.createElement('div')
        warning.className = 'sensitive-warning text-xs text-red-500 mt-1 animate-fade-in-up'
        warning.innerHTML =
          '⚠️ Potential sensitive information detected. Please remove before submitting.'
        textarea.parentNode.appendChild(warning)
      }
    } else {
      // Remove warning if it exists
      textarea.classList.remove('border-red-500', 'bg-red-500/5', 'animate-pulse-custom')
      const warning = textarea.parentNode.querySelector('.sensitive-warning')
      if (warning) {
        warning.parentNode.removeChild(warning)
      }
    }
  }

  // --- ENHANCED MESSAGE VALIDATION ---

  // Enhanced message validation with more sophisticated checks
  const enhancedMessageValidation = {
    required: 'Project description is required',
    minLength: {
      value: 100,
      message: 'Please provide at least 100 characters',
    },
    maxLength: {
      value: 10000,
      message: 'Message cannot exceed 10,000 characters',
    },
    validate: {
      noSensitiveInfo: (value) => {
        if (!value) return true
        const sensitivePatterns = [
          /\b(?:\d[ -]*?){13,16}\b/, // Credit card numbers
          /\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/, // SSN
          /\b[A-Z]{2}\d{6}[A-Z0-9]\b/i, // Passport numbers
          /\b\d{10,11}\b/, // Phone numbers without formatting
        ]
        return (
          !sensitivePatterns.some((pattern) => pattern.test(value)) ||
          'Please do not include sensitive information (credit cards, SSN, passport numbers)'
        )
      },
      wordCount: (value) => {
        if (!value) return true
        const wordCount = value.split(/\s+/).filter(Boolean).length
        return wordCount >= 5 || 'Please provide at least 5 words'
      },
      profanityCheck: (value) => {
        if (!value) return true
        // Simple profanity detector (basic example)
        const profanityList = ['badword1', 'badword2', 'badword3']
        const containsProfanity = profanityList.some((word) =>
          new RegExp(`\\b${word}\\b`, 'i').test(value)
        )
        return !containsProfanity || 'Please use professional language in your message'
      },
      meaningfulContent: (value) => {
        if (!value) return true
        // Check for repetitive characters
        const repetitivePattern = /(.)\1{4,}/
        if (repetitivePattern.test(value)) {
          return 'Your message contains repetitive characters. Please provide meaningful content.'
        }

        // Check for meaningful text (not just random characters)
        // This is a simple check for word/character ratio
        const words = value.split(/\s+/).filter(Boolean)
        const avgWordLength = value.replace(/\s+/g, '').length / (words.length || 1)

        return avgWordLength < 20 || 'Please provide a coherent message with normal word lengths'
      },
    },
  }

  const onSubmit = async (data) => {
    // Mark all fields as touched
    const allFields = Object.keys(validationRules)
    const allTouched = allFields.reduce((acc, field) => {
      acc[field] = true
      return acc
    }, {})
    setTouchedFields(allTouched)

    // Validate all fields before submission
    const isFormValid = await trigger()
    if (!isFormValid) {
      // Add shake animation to form elements with errors
      document.querySelectorAll('.field-error').forEach((el) => {
        el.classList.add('animate-shake')
        setTimeout(() => el.classList.remove('animate-shake'), 500)
      })
      return
    }

    // Immediately set submitting state to show loader
    setIsSubmitting(true)
    setServiceError(null)

    try {
      const res = await fetch(`/api/contact-form`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json',
          credentials: 'same-origin',
        }),
      })

      // Ensure the loader is visible for at least 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (res.status === 201) {
        setIsSubmitSuccessful(true)
        setIsSubmitting(false)
        return
      }

      const json = await res.json()
      if (json.error) {
        throw new Error(json.error)
      }

      // Handle specific error codes
      if (res.status === 429) {
        throw new Error('Too many requests. Please try again later.')
      }

      // If we get here, something unexpected happened
      throw new Error('Failed to send message. Please try again later.')
    } catch (error) {
      setServiceError(error.toString())
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Include custom animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      <div className="my-auto p-3 md:p-6 lg:p-12">
        <div className="prose prose-invert items-start lg:flex">
          <Reveal
            animation="fade-in slide-in-right"
            className="prose prose-invert basis-1/3 lg:mr-14"
          >
            <ContentRenderer source={main} />
          </Reveal>
          <Reveal
            animation="fade-in zoom-in"
            className="md:with-back-plate w-full max-w-3xl overflow-hidden rounded-lg border border-omega-700/90 shadow-xl md:before:bg-omega-700"
          >
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
                <div className="relative overflow-hidden shadow-inner">
                  {/* Show loading or success messages with immediate visibility */}
                  {isSubmitting && <LoadingSpinner />}
                  {isSubmitSuccessful && <SuccessMessage />}

                  <div className="bg-gradient-to-br from-omega-900 to-omega-800">
                    {inputs?.map(({ legend, columns, fields }, i) => (
                      <fieldset key={i} className="border-b border-dashed border-omega-700/70">
                        <div className="bg-omega-800/90 p-5">
                          <legend className="m-0 p-0 font-semibold tracking-wide">{legend}</legend>
                        </div>
                        <div
                          className={classNames('grid gap-3 p-6', {
                            'md:grid-cols-2': columns === 2,
                            'md:grid-cols-3': columns === 3,
                            'grid-cols-1': !columns || columns === 1,
                          })}
                        >
                          {fields.map((input, j) => {
                            const Component = FormComponent[input.type]
                            const fieldName = input.id || input.name
                            const hasError = shouldShowError(fieldName)

                            return input.type && Component ? (
                              <div key={fieldName + j} className="mb-2 flex flex-col">
                                {/* Checkbox and radio special handling */}
                                {input.type === 'checkbox' || input.type === 'radio' ? (
                                  <div className="select-none">
                                    <Component
                                      {...input}
                                      {...registerField(fieldName)}
                                      className={classNames(
                                        input.className,
                                        hasError ? 'animate-error-glow' : ''
                                      )}
                                    />
                                  </div>
                                ) : (
                                  <Component
                                    {...input}
                                    {...registerField(fieldName)}
                                    className={classNames(
                                      input.className,
                                      hasError ? 'field-error' : ''
                                    )}
                                    aria-invalid={hasError ? 'true' : 'false'}
                                  />
                                )}
                                {hasError && <ErrorMessage errors={errors} name={fieldName} />}
                              </div>
                            ) : null
                          })}
                        </div>
                      </fieldset>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-omega-900 to-omega-800 px-6 pt-6 pb-8 text-left md:px-8">
                    {serviceError && (
                      <div className="animate-shake mb-4 block rounded-md border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-400">
                        {serviceError}
                      </div>
                    )}
                    <Button
                      as="button"
                      type="submit"
                      size="sm"
                      className={`relative transform overflow-hidden transition-all duration-300 ease-out hover:scale-105 ${
                        isSubmitting ? 'opacity-80' : 'w-full sm:w-1/3'
                      }`}
                      disabled={isSubmitting}
                    >
                      <span className={`${isSubmitting ? 'invisible' : ''}`}>Submit</span>
                      {isSubmitting && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="mr-2">Sending</span>
                          <span className="flex">
                            <span className="mx-px h-1 w-1 animate-bounce rounded-full bg-white"></span>
                            <span className="animation-delay-150 mx-px h-1 w-1 animate-bounce rounded-full bg-white"></span>
                            <span className="animation-delay-300 mx-px h-1 w-1 animate-bounce rounded-full bg-white"></span>
                          </span>
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </Reveal>
        </div>
      </div>
    </>
  )
}

export default Contact01
