import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const notesDirectory = path.join(process.cwd(), 'notes')

export function getSortedNotesData() {
    const fileNames = fs.readdirSync(notesDirectory)
    const allNotesData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(notesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')
        const matterResult = matter(fileContents)
        
        return {
            id,
            ...matterResult.data,
            content: matterResult.content
        }
    })

    return allNotesData.sort(({ date: a }, { date: b }) => {
        if( a < b ) {
            return 1
        } else if ( a > b ) {
            return -1
        } else {
            return 0
        }
    })
}