interface Props {
  section: String,
}

export default function MenuItem({ section }: Props) {
  return (
    <li>
      <a href="#" className="relative block px-3 py-2 transition text-purple-500 hover:text-purple-500 dark:text-purple-100 dark:hover:text-purple-400">
        {section}
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/40 dark:to-purple-400/0"></span>
      </a>
    </li>
  )
}