'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleStart = () => {
      timeoutId = setTimeout(() => setIsLoading(true), 100)
    }

    const handleComplete = () => {
      clearTimeout(timeoutId)
      setIsLoading(false)
    }

    // Listen for route changes
    const originalPush = router.push
    const originalReplace = router.replace
    const originalBack = router.back
    const originalForward = router.forward

    router.push = (...args) => {
      handleStart()
      return originalPush.apply(router, args).finally(handleComplete)
    }

    router.replace = (...args) => {
      handleStart()
      return originalReplace.apply(router, args).finally(handleComplete)
    }

    router.back = () => {
      handleStart()
      originalBack.call(router)
      // For back navigation, we need to listen to popstate
      const handlePopState = () => {
        handleComplete()
        window.removeEventListener('popstate', handlePopState)
      }
      window.addEventListener('popstate', handlePopState)
    }

    router.forward = () => {
      handleStart()
      originalForward.call(router)
      const handlePopState = () => {
        handleComplete()
        window.removeEventListener('popstate', handlePopState)
      }
      window.addEventListener('popstate', handlePopState)
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      handleStart()
      setTimeout(handleComplete, 500) // Give some time for the page to load
    }

    window.addEventListener('popstate', handlePopState)

    // Handle page visibility change (when user comes back to tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        handleComplete()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      
      // Restore original methods
      router.push = originalPush
      router.replace = originalReplace
      router.back = originalBack
      router.forward = originalForward
    }
  }, [router])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner