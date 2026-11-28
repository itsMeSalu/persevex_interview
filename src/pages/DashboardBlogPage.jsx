import { useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import { samplePosts } from './blogs/sample-posts.js'
import { adaptBlogPost, blogTopics, matchesTopic } from './blogs/blog-data.js'
import './dashboard-blog.css'

const posts = samplePosts.map(adaptBlogPost)

export default function DashboardBlogPage() {
  const [category, setCategory] = useState('All Posts')
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post => matchesTopic(post, category) && `${post.title} ${post.description}`.toLowerCase().includes(query.trim().toLowerCase()))

  return <div className="dashboard-blog">
    <header className="dashboard-blog-heading"><h1>Blog</h1><p>Useful reads for interviews, projects, and career preparation.</p></header>
    <div className="dashboard-blog-layout">
      <div className="dashboard-blog-main"><div className="dashboard-blog-grid">{filtered.map(post => <article className="dashboard-blog-card" key={post.slug}><a className="dashboard-blog-card-image" href={post.href} aria-label={`Read ${post.title}`}><img src={post.image} alt="" loading="lazy" /></a><div className="dashboard-blog-card-content"><h2><a href={post.href}>{post.title}</a></h2><p>{post.description}</p><a className="dashboard-blog-read" href={post.href}>Read article <ArrowRight size={15} /></a></div></article>)}{!filtered.length && <div className="dashboard-blog-empty">No articles found. <button type="button" onClick={() => { setCategory('All Posts'); setQuery('') }}>Show all</button></div>}</div></div>
      <aside className="dashboard-blog-side" aria-label="Blog tools"><label className="dashboard-blog-search"><Search size={18} aria-hidden="true"/><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search articles" aria-label="Search blog articles"/></label><section className="dashboard-blog-side-panel"><h2>Categories</h2><div className="dashboard-blog-categories">{blogTopics.map(topic => <button key={topic} type="button" className={category === topic ? 'active' : ''} onClick={() => setCategory(topic)}><span>{topic}</span><span>{posts.filter(post => matchesTopic(post, topic)).length}</span></button>)}</div></section></aside>
    </div>
  </div>
}
