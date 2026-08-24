import { useState, useEffect, useCallback } from 'react'

interface AsyncState<T> {
  data: T | null
  error: Error | null
  loading: boolean
}

export function useAsync<T>(fn: () => Promise<T>, deps: unknown[] = []) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    loading: true,
  })

  const execute = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: null }))
    try {
      const data = await fn()
      setState({ data, error: null, loading: false })
    } catch (error) {
      setState({ data: null, error: error as Error, loading: false })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => {
    const controller = new AbortController()
    let cancelled = false

    async function run() {
      setState((s) => ({ ...s, loading: true, error: null }))
      try {
        const data = await fn()
        if (!cancelled) {
          setState({ data, error: null, loading: false })
        }
      } catch (error) {
        if (!cancelled) {
          setState({ data: null, error: error as Error, loading: false })
        }
      }
    }

    run()
    return () => {
      cancelled = true
      controller.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { ...state, reload: execute }
}
