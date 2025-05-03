'use client'
import { useEffect, useState } from 'react'

const useMediaQuery = (query: string): boolean | null => {
  const [matches, setMatches] = useState<boolean | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handleChange = () => setMatches(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

export default useMediaQuery
