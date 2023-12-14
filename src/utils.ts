const languages = [
    "es",
    "ca",
    "en"
]

export function getLanguage (url: URL) {
    return languages.filter(lang => url.pathname.includes(`/${lang}`))
}