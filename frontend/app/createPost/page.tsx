'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function CreatePost() {
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File
    const caption = formData.get('caption') as string

    if (!file || !caption) {
      alert('Please select an image and enter a caption')
      return
    }

    try {
      // Create object URL for the uploaded image
      const imageUrl = URL.createObjectURL(file)
      
      // Get existing posts from localStorage
      const existingPosts = localStorage.getItem('posts')
      const posts = existingPosts ? JSON.parse(existingPosts) : []
      
      // Create new post
      const newPost = {
        _id: Date.now().toString(),
        image: imageUrl,
        caption: caption
      }
      
      // Add new post to the beginning of the array
      posts.unshift(newPost)
      
      // Save to localStorage
      localStorage.setItem('posts', JSON.stringify(posts))
      
      // Mock successful post creation
      alert('Post created successfully!')
      
      // Success: go back to feed
      router.push('/feed')
    } catch (err) {
      console.error(err)
      alert('Error creating post')
    }
  }

  return (
    <main className="cp-page">
      <h1 className="cp-title">Create post</h1>

      <section className="cp-card" aria-label="Create post form">
        <form className="cp-form" onSubmit={handleSubmit}>
          <input className="cp-file" type="file" name="image" accept="image/*" />
          <input className="cp-caption" type="text" name="caption" placeholder="Enter caption" />
          <button className="cp-submit" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}