const URL = "https://bookmarkbackend.onrender.com"

export const bookmarksLoader = async () => {
    const response = await fetch(URL + "/bookmarks")
    const bookmarks = await response.json()
    return bookmarks
}

export const bookmarkLoader = async ({params}) => {
    const response = await fetch(URL + "/bookmarks/" + params.id)
    const bookmark = await response.json()
    return bookmark
}