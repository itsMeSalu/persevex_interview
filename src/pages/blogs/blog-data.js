// Post has no stored category. Topic controls search its real text, without
// inventing category metadata or replacing the company's published content.
export const blogTopics = ['All Posts', 'Career Growth', 'Interview Preparation', 'Projects & Portfolio', 'AI & Skills'];
const topicKeywords = {
  'Career Growth': /career|resume|interview|placement|job|hiring/i,
  'Interview Preparation': /interview|practice|preparation|coding|technical/i,
  'Projects & Portfolio': /project|portfolio|capstone|github|build/i,
  'AI & Skills': /\bai\b|artificial intelligence|machine learning|skill|coding|data science|technology/i,
};
function plainText(markdown='') {
  return markdown.replace(/!\[[^\]]*\]\([^)]*\)/g,'').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[#*_`>~]/g,'').replace(/\s+/g,' ').trim();
}
export function adaptBlogPost(post) {
 const content = plainText(post.content);
 return { slug:post.slug, href:`/blogs/${post.slug}`, image:post.thumbnailUrl || '', title:post.title || content.slice(0,95) || post.slug,
  description:plainText(post.description || post.content), author:post.author || '', date:post.createdAt,
  minutes:Math.max(1,Math.ceil(post.content.trim().split(/\s+/).filter(Boolean).length/200)),
  topicText:`${post.title || ''} ${post.description || ''} ${content}` };
}
export function matchesTopic(blog,topic) { return topic==='All Posts' || !!topicKeywords[topic]?.test(blog.topicText); }
