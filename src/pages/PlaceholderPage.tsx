import { Link } from 'react-router-dom'

type PlaceholderPageProps = {
  eyebrow: string
  title: string
}

export function PlaceholderPage({ eyebrow, title }: PlaceholderPageProps) {
  return (
    <section className="placeholder container" aria-labelledby="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="page-title">{title}</h1>
      <p>This page isn't available. Check the address or return to the homepage.</p>
      <Link className="text-link" to="/">Back to homepage <span aria-hidden="true">↗</span></Link>
    </section>
  )
}
