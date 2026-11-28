import BlogsPage from './BlogsPage.jsx'
import { samplePosts } from './sample-posts.js'
import SiteHeader from '../../components/SiteHeader.jsx'
import SiteFooter from '../../components/SiteFooter.jsx'
import useSectionReveal from './useSectionReveal.js'
import { useRef } from 'react'

export default function BlogRoutes() {
  const root = useRef(null)
  useSectionReveal(root)
  const slug = window.location.pathname.split('/').filter(Boolean)[1]
  if (!slug) return <BlogsPage posts={samplePosts} />
  const blog = samplePosts.find(post => post.slug === slug)
  if (!blog) return <><SiteHeader /><main className="page-width py-24"><h1 className="text-4xl font-bold">Article not found</h1><a href="/blogs" className="mt-6 inline-block text-[#fa7405]">Back to articles</a></main><SiteFooter /></>
  return (
    <>
      <SiteHeader />
      <main ref={root} className="relative min-h-screen w-full overflow-x-hidden bg-white text-[#281e1a]">
        <div className="flex min-h-screen w-full flex-col items-center justify-start px-4 pt-24 sm:px-8">
          <div className="w-full max-w-4xl">
            <img src={blog.thumbnailUrl} alt={blog.title} className="mb-8 aspect-[16/9] w-full object-cover" />
            <h1 className="mb-4 text-5xl font-bold">{blog.title}</h1>
            <p className="mb-8 text-[#76685e]">Sample preparation guide · Sample article</p>
            <p className="mb-12 border-l-4 border-[#f5d7bc] pl-4 text-xl italic text-[#76685e]">{blog.description}</p>
            <article className="mb-12 max-w-none bg-transparent text-lg leading-relaxed backdrop-blur-xl">
              {blog.sections.map(([heading, body]) => <section key={heading} className="mb-8"><h2 className="mb-3 text-2xl font-bold">{heading}</h2><p className="text-[#615349]">{body}</p></section>)}
            </article>
            <a href="/blogs" className="mb-16 inline-block font-semibold text-[#fa7405]">← All articles</a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
