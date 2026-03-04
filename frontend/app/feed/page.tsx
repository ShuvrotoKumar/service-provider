import Image from 'next/image'
import Link from 'next/link'

interface Post {
  _id: string
  image: string
  caption: string
}

async function getPosts(): Promise<Post[]> {
  // Mock data instead of API call
  const mockPosts: Post[] = [
    {
      _id: "1",
      image: "https://picsum.photos/400/300?random=1",
      caption: "Beautiful sunset at the beach"
    },
    {
      _id: "2", 
      image: "https://picsum.photos/400/300?random=2",
      caption: "Mountain hiking adventure"
    },
    {
      _id: "3",
      image: "https://picsum.photos/400/300?random=3",
      caption: "City lights at night"
    }
  ]
  return mockPosts
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