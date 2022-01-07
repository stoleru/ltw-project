import Head from 'next/head'
import { getSortedNotesData } from "../../lib/notes"
import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      <main>
        <div className="notes">
            <h1>Note: ({post.title})</h1>
            <code>{post.content}</code>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const allNotesData = getSortedNotesData()

  return {
      props: {
          post: allNotesData.filter(item => item.id === params.id)[0]
      }
  }
}

export async function getStaticPaths() {
    const allNotesData = getSortedNotesData()
    return {
        paths: allNotesData.map(item => {
            return {
                params: { 
                    id: item.id
                }
            }
        }),
        fallback: false
    }
}