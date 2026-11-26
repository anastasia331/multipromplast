import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'https://multipromplast.ru'

function upsert(selector, create, attr, value) {
    let el = document.head.querySelector(selector)
    if (!el) {
        el = create()
        document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
}

const metaByName = (name) => () => {
    const el = document.createElement('meta')
    el.setAttribute('name', name)
    return el
}
const metaByProp = (prop) => () => {
    const el = document.createElement('meta')
    el.setAttribute('property', prop)
    return el
}

export default function usePageMeta(title, description) {
    const { pathname } = useLocation()

    useEffect(() => {
        const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
        const url = SITE + path

        document.title = title

        upsert('meta[name="description"]', metaByName('description'), 'content', description)
        upsert('meta[property="og:title"]', metaByProp('og:title'), 'content', title)
        upsert('meta[property="og:description"]', metaByProp('og:description'), 'content', description)
        upsert('meta[property="og:url"]', metaByProp('og:url'), 'content', url)

        upsert(
            'link[rel="canonical"]',
            () => {
                const el = document.createElement('link')
                el.setAttribute('rel', 'canonical')
                return el
            },
            'href',
            url
        )
    }, [title, description, pathname])
}