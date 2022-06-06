import classNames from 'classnames'
import React from 'react'

function IconButton({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      type="button"
      className={classNames(
        className,
        'flex items-center justify-center rounded-full p-2 hover:bg-black hover:bg-opacity-10'
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton
