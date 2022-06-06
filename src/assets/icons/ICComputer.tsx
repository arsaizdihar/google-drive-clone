import React from 'react'

function ICComputer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="currentColor"
      focusable="false"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
    </svg>
  )
}

export default ICComputer
