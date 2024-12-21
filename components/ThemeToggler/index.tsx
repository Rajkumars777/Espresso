// components/ThemeToggler.tsx
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  )
}