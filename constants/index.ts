export const DUMMY_DESCRIPTION = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent vel convallis erat.Maecenas justo ligula, consectetur imperdiet ornare eget, facilisis id risus.Curabitur a elit tortor.Quisque lacus justo, maximus sed commodo ac, laoreet vel lectus.Cras eu mi id dolor interdum eleifend ac ut urna.Donec fermentum vehicula lobortis.Phasellus vel lectus non est congue luctus.
`

export const SITE_URL = "http://localhost:3000" // :D
export const SITE_NAME = "The NEWS"

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_NEWS_API_URL ?? ""
export const API_KEY =
  process.env.NEWS_API_KEY ?? process.env.NEXT_PUBLIC_NEWS_API_KEY ?? ""
export const NEWS_REVALIDATE_SECONDS = 60