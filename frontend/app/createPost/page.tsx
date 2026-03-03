import React from 'react'

const createPost = () => {
  return (
    <main className="cp-page">
      <h1 className="cp-title">Create post</h1>

      <section className="cp-card" aria-label="Create post form">
        <form className="cp-form">
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

export default createPost