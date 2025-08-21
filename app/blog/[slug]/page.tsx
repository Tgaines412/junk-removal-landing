import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getRelatedPosts, formatDate } from '@/components/blog-content-manager'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Bin Busters',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | Bin Busters Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <a
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            ← Back to Blog
          </a>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category and Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                📅 {formatDate(post.publishDate)}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                ⏱️ {post.readTime}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                👤 {post.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Hero Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Content Placeholder */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">
                  Content Coming Soon!
                </h2>
                <p className="text-gray-600 mb-6">
                  This blog post is currently being written. Check back soon for the full article.
                </p>
                <a
                  href="/"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BB</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Bin Busters Team</h3>
                  <p className="text-gray-600">
                    Auckland's #1 rated junk removal service with years of experience in professional 
                    waste disposal and eco-friendly practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold mb-2">{relatedPost.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {relatedPost.excerpt.substring(0, 100)}...
                      </p>
                      <a
                        href={`/blog/${relatedPost.slug}`}
                        className="text-red-600 text-sm font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Clear Your Space?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Get instant quotes and same-day service from Auckland's most trusted junk removal team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:021448097"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call Now: 021 448 097
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
