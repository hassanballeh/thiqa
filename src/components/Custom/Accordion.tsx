import { ReactNode } from "react"

export const AccordionItem = ({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string
  content: ReactNode
  isOpen: boolean
  onToggle: () => void
}) => (
  <div className="border-b border-gray-300">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-4 font-bold text-start text-gray1"
    >
      <span>{title}</span>
      <span className="text-lg font-light">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="leading-relaxed font-light pb-4 text-xs max-w-md">{content}</div>
    )}
  </div>
)
