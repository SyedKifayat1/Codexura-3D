"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "web-design", name: "Web Design", count: 4 },
    { id: "development", name: "Development", count: 3 },
    { id: "3d-web", name: "3D Web", count: 2 },
    { id: "business", name: "Business", count: 2 },
    { id: "tutorials", name: "Tutorials", count: 1 },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of 3D Web Design: Trends and Technologies",
      excerpt:
        "Exploring how 3D elements are revolutionizing user experiences on the web and what technologies are driving this transformation.",
      author: "Syed Kifayat Ur Rahman",
      date: "December 15, 2024",
      category: "3d-web",
      slug: "future-of-3d-web-design",
      readTime: "8 min read",
      image: "/images/blog-3d-web.jpg",
    },
    {
      id: 2,
      title: "Restaurant Website Best Practices: Drive More Orders",
      excerpt:
        "Essential features every restaurant website needs to increase online orders and improve customer experience.",
      author: "Codexura Team",
      date: "December 10, 2024",
      category: "business",
      slug: "restaurant-website-best-practices",
      readTime: "6 min read",
      image: "/images/blog-restaurant.jpg",
    },
    {
      id: 3,
      title: "POS System UI/UX Design: Latest Trends and Best Practices",
      excerpt:
        "Latest trends in point-of-sale interface design for better user experience and improved business efficiency.",
      author: "Codexura Team",
      date: "December 5, 2024",
      category: "development",
      slug: "pos-system-ui-ux-trends",
      readTime: "7 min read",
      image: "/images/blog-pos-design.jpg",
    },
    {
      id: 4,
      title: "React Three Fiber: Building Interactive 3D Websites",
      excerpt:
        "A comprehensive guide to creating stunning 3D web experiences using React Three Fiber and modern web technologies.",
      author: "Syed Kifayat Ur Rahman",
      date: "November 28, 2024",
      category: "tutorials",
      slug: "react-three-fiber-guide",
      readTime: "12 min read",
      image: "/images/blog-tutorials.jpg",
    },
    {
      id: 5,
      title: "Modern Web Design Principles for Business Success",
      excerpt:
        "How modern web design principles can transform your business and create lasting impressions on your customers.",
      author: "Codexura Team",
      date: "November 20, 2024",
      category: "web-design",
      slug: "modern-web-design-principles",
      readTime: "5 min read",
      image: "/images/blog-web-design.jpg",
    },
    {
      id: 6,
      title: "Optimizing Website Performance for Better User Experience",
      excerpt:
        "Essential techniques for improving website speed, performance, and user experience in modern web development.",
      author: "Codexura Team",
      date: "November 15, 2024",
      category: "development",
      slug: "website-performance-optimization",
      readTime: "9 min read",
      image: "/images/blog-development.jpg",
    },
    {
      id: 7,
      title: "The Psychology of Color in Web Design",
      excerpt: "Understanding how color choices impact user behavior and conversion rates in web design projects.",
      author: "Codexura Team",
      date: "November 8, 2024",
      category: "web-design",
      slug: "psychology-of-color-web-design",
      readTime: "6 min read",
      image: "/images/blog-web-design.jpg",
    },
    {
      id: 8,
      title: "Building Responsive Websites: Mobile-First Approach",
      excerpt: "Why mobile-first design is crucial for modern websites and how to implement it effectively.",
      author: "Codexura Team",
      date: "October 30, 2024",
      category: "web-design",
      slug: "mobile-first-responsive-design",
      readTime: "7 min read",
      image: "/images/blog-web-design.jpg",
    },
    {
      id: 9,
      title: "E-commerce Website Design: Converting Visitors to Customers",
      excerpt:
        "Key design elements and strategies that turn website visitors into paying customers for e-commerce businesses.",
      author: "Codexura Team",
      date: "October 22, 2024",
      category: "business",
      slug: "ecommerce-conversion-design",
      readTime: "8 min read",
      image: "/images/business-website.jpg",
    },
    {
      id: 10,
      title: "Advanced CSS Animations for Modern Web Design",
      excerpt:
        "Creating engaging user experiences with advanced CSS animations and transitions in modern web development.",
      author: "Syed Kifayat Ur Rahman",
      date: "October 15, 2024",
      category: "development",
      slug: "advanced-css-animations",
      readTime: "10 min read",
      image: "/images/blog-development.jpg",
    },
    {
      id: 11,
      title: "WebGL and Three.js: Creating Immersive Web Experiences",
      excerpt: "Diving deep into WebGL and Three.js to create stunning 3D graphics and immersive web experiences.",
      author: "Syed Kifayat Ur Rahman",
      date: "October 8, 2024",
      category: "3d-web",
      slug: "webgl-threejs-immersive-web",
      readTime: "15 min read",
      image: "/images/blog-3d-web.jpg",
    },
    {
      id: 12,
      title: "Typography in Web Design: Choosing the Right Fonts",
      excerpt:
        "How typography choices impact readability, user experience, and brand perception in web design projects.",
      author: "Codexura Team",
      date: "September 30, 2024",
      category: "web-design",
      slug: "typography-web-design-fonts",
      readTime: "6 min read",
      image: "/images/blog-web-design.jpg",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0">
          <img src="/images/blog-web-design.jpg" alt="Blog Hero" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 text-lg px-4 py-2">Our Blog</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Insights & Tutorials
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Stay updated with the latest trends in web development, design tips, and industry insights from our team of
            experts
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-600 text-white focus:border-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-blue-400 border border-slate-700 hover:border-blue-500/50"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-400">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-slate-900 border-slate-700 hover:border-slate-600 transition-colors group"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          <Tag className="w-3 h-3 mr-1" />
                          {categories.find((cat) => cat.id === post.category)?.name}
                        </Badge>
                        <span className="text-slate-500 text-sm">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-slate-400 text-sm">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
                        >
                          <Link href={`/blogs/${post.slug}`}>
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest web development insights, tutorials, and industry news
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 border-slate-600 text-white focus:border-blue-500"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
