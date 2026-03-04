'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Post {
  _id: string
  image: string
  caption: string
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(() => {
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('posts')
      if (storedPosts) {
        return JSON.parse(storedPosts)
      }
    }
    return [
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
  })

  useEffect(() => {
    const handleStorageChange = () => {
      const storedPosts = localStorage.getItem('posts')
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts))
      }
    }

    // Listen for storage changes (when coming from create post page)
    window.addEventListener('storage', handleStorageChange)
    
    // Also check on focus in case same-tab navigation
    const handleFocus = () => {
      const storedPosts = localStorage.getItem('posts')
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts))
      }
    }
    
    window.addEventListener('focus', handleFocus)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

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