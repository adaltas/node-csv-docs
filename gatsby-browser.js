
import 'react-tooltip/dist/react-tooltip.css'

const siteOrigins = ['https://csv.js.org']

const isExternalHttpLink = (href) => {
  try {
    const url = new URL(href, window.location.href)
    const origins = [window.location.origin, ...siteOrigins]
    return ['http:', 'https:'].includes(url.protocol) && !origins.includes(url.origin)
  } catch (e) {
    return false
  }
}

const addNoopener = (anchor) => {
  const rel = new Set((anchor.getAttribute('rel') || '').split(/\s+/).filter(Boolean))
  rel.add('noopener')
  anchor.setAttribute('rel', Array.from(rel).join(' '))
}

const openExternalLinksInNewTab = () => {
  document.querySelectorAll('a[href]').forEach((anchor) => {
    if (!isExternalHttpLink(anchor.href)) {
      return
    }
    anchor.setAttribute('target', '_blank')
    addNoopener(anchor)
  })
}

export const onInitialClientRender = openExternalLinksInNewTab
export const onRouteUpdate = openExternalLinksInNewTab
