import { useLayoutEffect } from 'react'

const defaultTitle = 'Jeremy Joyner | Technology & AI Transformation'
const defaultDescription = 'Jeremy Joyner — Technology & AI Transformation Leader.'

export function usePageMetadata(title: string, description: string) {
  useLayoutEffect(() => {
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    document.title = title
    if (metaDescription) metaDescription.content = description

    return () => {
      document.title = defaultTitle
      if (metaDescription) metaDescription.content = defaultDescription
    }
  }, [title, description])
}
