import { Calendar, Clock, User, Tag } from 'lucide-react'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  slug: string
  category: string
  readTime: string
  publishDate: string
  author: string
  image: string
  tags: string[]
  content?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Complete Guide to Junk Removal in Auckland: What You Need to Know",
    excerpt: "Everything you need to know about professional junk removal services in Auckland. From pricing to eco-friendly disposal methods, this comprehensive guide covers it all.",
    slug: "complete-guide-junk-removal-auckland",
    category: "Guides",
    readTime: "8 min read",
    publishDate: "2025-01-20",
    author: "Bin Busters Team",
    image: "/junk-removal-action.jpg",
    tags: ["junk removal", "auckland", "guide", "pricing", "eco-friendly"]
  },
  {
    id: 2,
    title: "How to Choose the Right Junk Removal Service in Auckland",
    excerpt: "Not all junk removal services are created equal. Learn the key factors to consider when choosing a reliable and professional junk removal company in Auckland.",
    slug: "choose-right-junk-removal-service-auckland",
    category: "Tips",
    readTime: "6 min read",
    publishDate: "2025-01-18",
    author: "Bin Busters Team",
    image: "/before-after-1.jpg",
    tags: ["junk removal service", "auckland", "tips", "choosing", "professional"]
  },
  {
    id: 3,
    title: "Eco-Friendly Waste Disposal Methods: What Happens to Your Junk?",
    excerpt: "Discover how professional junk removal services in Auckland ensure environmentally responsible disposal. Learn about recycling, donation programs, and sustainable waste management.",
    slug: "eco-friendly-waste-disposal-methods-auckland",
    category: "Environment",
    readTime: "7 min read",
    publishDate: "2025-01-15",
    author: "Bin Busters Team",
    image: "/before-after-2.jpg",
    tags: ["eco-friendly", "recycling", "waste disposal", "sustainability", "auckland"]
  },
  {
    id: 4,
    title: "Preparing for a House Clearance: A Step-by-Step Guide",
    excerpt: "Planning a house clearance in Auckland? Our step-by-step guide will help you prepare efficiently and ensure a smooth junk removal process.",
    slug: "preparing-house-clearance-step-guide-auckland",
    category: "Guides",
    readTime: "10 min read",
    publishDate: "2025-01-12",
    author: "Bin Busters Team",
    image: "/before-after-3.jpg",
    tags: ["house clearance", "auckland", "preparation", "guide", "tips"]
  },
  {
    id: 5,
    title: "Commercial Waste Collection Best Practices for Auckland Businesses",
    excerpt: "Businesses in Auckland need efficient waste management solutions. Learn about commercial junk removal services and best practices for maintaining a clean workspace.",
    slug: "commercial-waste-collection-best-practices-auckland",
    category: "Commercial",
    readTime: "9 min read",
    publishDate: "2025-01-10",
    author: "Bin Busters Team",
    image: "/junk-removal-action.jpg",
    tags: ["commercial waste", "business", "auckland", "office junk removal", "best practices"]
  },
  {
    id: 6,
    title: "Tenancy Clean-Up Checklist: End of Lease Junk Removal",
    excerpt: "Moving out of your rental property? Use our comprehensive tenancy clean-up checklist to ensure you get your full bond back and leave the property spotless.",
    slug: "tenancy-clean-up-checklist-end-lease-auckland",
    category: "Tenancy",
    readTime: "5 min read",
    publishDate: "2025-01-08",
    author: "Bin Busters Team",
    image: "/before-after-1.jpg",
    tags: ["tenancy clean up", "end of lease", "auckland", "checklist", "bond"]
  },
  {
    id: 7,
    title: "North Shore Junk Removal: Complete Service Guide",
    excerpt: "Everything you need to know about junk removal services in North Shore Auckland. From Takapuna to Devonport, we cover all areas with professional service.",
    slug: "north-shore-junk-removal-complete-guide",
    category: "Area Guides",
    readTime: "6 min read",
    publishDate: "2025-01-05",
    author: "Bin Busters Team",
    image: "/auckland-skyline.jpg",
    tags: ["north shore", "auckland", "junk removal", "takapuna", "devonport"]
  },
  {
    id: 8,
    title: "South Auckland Rubbish Removal: Professional Service Areas",
    excerpt: "Professional junk removal services across South Auckland including Manukau, Papatoetoe, and Manurewa. Fast, reliable, and eco-friendly disposal.",
    slug: "south-auckland-rubbish-removal-guide",
    category: "Area Guides",
    readTime: "5 min read",
    publishDate: "2025-01-03",
    author: "Bin Busters Team",
    image: "/junk-removal-action.jpg",
    tags: ["south auckland", "manukau", "papatoetoe", "manurewa", "rubbish removal"]
  }
]

export const categories = [
  { name: "All", count: blogPosts.length, active: true },
  { name: "Guides", count: blogPosts.filter(post => post.category === "Guides").length, active: false },
  { name: "Tips", count: blogPosts.filter(post => post.category === "Tips").length, active: false },
  { name: "Environment", count: blogPosts.filter(post => post.category === "Environment").length, active: false },
  { name: "Commercial", count: blogPosts.filter(post => post.category === "Commercial").length, active: false },
  { name: "Tenancy", count: blogPosts.filter(post => post.category === "Tenancy").length, active: false },
  { name: "Area Guides", count: blogPosts.filter(post => post.category === "Area Guides").length, active: false }
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const related = blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit)
  
  // If not enough related posts, add random ones
  if (related.length < limit) {
    const remaining = blogPosts
      .filter(post => post.id !== currentPost.id && !related.includes(post))
      .slice(0, limit - related.length)
    related.push(...remaining)
  }
  
  return related
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts
  return blogPosts.filter(post => post.category === category)
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  )
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatShortDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
