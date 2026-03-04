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
      // Mock successful post creation
      alert('Post created successfully! (Mock)')
      
      // Success: go back to feed
      router.push('/feed')
    } catch (err) {
      console.error(err)
      alert('Network error')
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