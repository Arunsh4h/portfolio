// FormCheckbox.jsx - Improved version with better alignment
import React from 'react'
import { useFormContext } from 'react-hook-form'
import classNames from 'clsx'

const FormCheckbox = React.forwardRef(
  ({ name, label, className, value, defaultChecked, error, required, ...rest }, ref) => {
    const methods = useFormContext()

    return (
      <div className={classNames('flex w-full items-start', className)}>
        <div className="flex h-5 items-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            className="h-4 w-4 cursor-pointer rounded border-gray-500 text-alpha focus:ring-alpha-500"
            defaultChecked={defaultChecked}
            value={value}
            ref={ref}
            required={required}
            {...rest}
          />
        </div>

        <label
          htmlFor={name}
          className="ml-2 block cursor-pointer select-none text-sm text-omega-300"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      </div>
    )
  }
)

FormCheckbox.displayName = 'FormCheckbox'

export default FormCheckbox
