import classNames from 'classnames'
import ICCaretRight from '~/assets/icons/ICCaretRight'

interface SideBarMenuProps {
  icon: React.ReactNode
  text: string
  active?: boolean
}

export function SideBarMenu({ icon, text, active = false }: SideBarMenuProps) {
  return (
    <button
      className={classNames(
        'flex h-10 items-center rounded-r-full pl-1 text-sm font-medium',
        active
          ? 'bg-[#e8f0fe] text-blue-text'
          : 'hover:bg-black hover:bg-opacity-[0.04]'
      )}
    >
      <span className="w-6"></span>
      <div className="w-11">{icon}</div>
      {text}
    </button>
  )
}

interface CollapsibleSideBarMenuProps extends SideBarMenuProps {
  children?: React.ReactNode
}

export function CollapsibleSideBarMenu({
  icon,
  text,
  active = false,
}: CollapsibleSideBarMenuProps) {
  return (
    <button
      className={classNames(
        'flex h-10 items-center rounded-r-full pl-1 text-sm font-medium',
        active
          ? 'bg-[#e8f0fe] text-blue-text'
          : 'hover:bg-black hover:bg-opacity-[0.04]'
      )}
    >
      <div className="flex w-6 justify-center text-gray-600">
        <ICCaretRight></ICCaretRight>
      </div>
      <div className="w-11">{icon}</div>
      {text}
    </button>
  )
}
