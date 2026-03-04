import Image from 'next/image'
import Link from 'next/link'

interface Post {
  _id: string
  image: string
  caption: string
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost:3000/posts', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch posts')
  const data = await res.json()
  return data.posts || []
}

export default async function Feed() {
  const posts = await getPosts()

  return (
    <main className="feed-page">
      <div className="feed-container">
        <div className="feed-actions">
          <Link className="feed-createBtn" href="/createPost">
            Create post
          </Link>
        </div>
        {posts.map((post: Post) => (
          <article className="post-card" key={post._id}>
            <div className="post-imageWrap">
              <Image
                className="post-image"
                src={post.image}
                alt={post.caption}
                width={1200}
                height={800}
                priority={posts.indexOf(post) === 0}
              />
            </div>
            <div className="post-caption">{post.caption}</div>
          </article>
        ))}
      </div>
    </main>
  )
}