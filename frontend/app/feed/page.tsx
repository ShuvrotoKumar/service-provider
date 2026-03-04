import Image from 'next/image'
import Link from 'next/link'

const feed = () => {
  const posts = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80',
      caption: 'test_caption_2',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      caption: 'another_caption',
    },
  ]

  return (
    <main className="feed-page">
      <div className="feed-container">
        <div className="feed-actions">
          <Link className="feed-createBtn" href="/createPost">
            Create post
          </Link>
        </div>
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <div className="post-imageWrap">
              <Image
                className="post-image"
                src={post.imageUrl}
                alt={post.caption}
                width={1200}
                height={800}
                priority={post.id === '1'}
              />
            </div>
            <div className="post-caption">{post.caption}</div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default feed