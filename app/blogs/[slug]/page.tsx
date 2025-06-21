"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or API
const getBlogPost = (slug: string) => {
  const posts = {
    "future-of-3d-web-design": {
      title: "The Future of 3D Web Design: Trends and Technologies",
      author: "Syed Kifayat Ur Rahman",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "3D Web",
      image: "/images/blog-3d-web.jpg",
      content: `
        <p>The web is evolving rapidly, and 3D design is at the forefront of this transformation. As browsers become more powerful and technologies like WebGL and WebGPU mature, we're seeing an unprecedented opportunity to create immersive web experiences that were once only possible in native applications.</p>

        <h2>The Current State of 3D Web Technology</h2>
        <p>Today's web browsers support sophisticated 3D graphics through technologies like WebGL, which provides a JavaScript API for rendering interactive 3D graphics. Libraries like Three.js and React Three Fiber have made 3D web development more accessible to developers, abstracting complex WebGL operations into intuitive APIs.</p>

        <h2>Emerging Trends in 3D Web Design</h2>
        <p>Several key trends are shaping the future of 3D web design:</p>
        
        <h3>1. Performance Optimization</h3>
        <p>Modern 3D web applications are becoming more performance-conscious, utilizing techniques like level-of-detail (LOD) rendering, frustum culling, and efficient texture compression to ensure smooth experiences across devices.</p>
        
        <h3>2. Augmented Reality Integration</h3>
        <p>WebXR APIs are enabling AR experiences directly in browsers, allowing users to place 3D objects in their real-world environment without downloading apps.</p>
        
        <h3>3. Procedural Generation</h3>
        <p>Algorithms that generate 3D content on-the-fly are becoming more sophisticated, enabling infinite worlds and personalized experiences that adapt to user behavior.</p>

        <h2>The Role of AI in 3D Web Design</h2>
        <p>Artificial Intelligence is revolutionizing how we create and optimize 3D content for the web. AI-powered tools can now generate 3D models from text descriptions, optimize mesh topology for web delivery, and even create realistic animations automatically.</p>

        <h2>Challenges and Solutions</h2>
        <p>While 3D web technology is advancing rapidly, several challenges remain:</p>
        <ul>
          <li><strong>Performance:</strong> 3D graphics are computationally intensive, requiring careful optimization for mobile devices and slower connections.</li>
          <li><strong>Accessibility:</strong> Ensuring 3D experiences are accessible to users with disabilities requires thoughtful design and alternative interaction methods.</li>
          <li><strong>Loading Times:</strong> 3D assets can be large, necessitating efficient compression and progressive loading strategies.</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>The future of 3D web design is incredibly promising. As WebGPU becomes widely adopted, we'll see even more sophisticated graphics capabilities. The integration of machine learning directly in browsers will enable real-time content generation and optimization.</p>
        
        <p>At Codexura, we're committed to staying at the forefront of these technologies, ensuring our clients benefit from the latest innovations in 3D web design. The web of tomorrow will be more immersive, interactive, and engaging than ever before.</p>
      `,
    },
    "restaurant-website-best-practices": {
      title: "Restaurant Website Best Practices: Drive More Orders",
      author: "Codexura Team",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Business",
      image: "/images/blog-restaurant.jpg",
      content: `
        <p>In today's digital-first world, your restaurant's website is often the first impression potential customers have of your establishment. A well-designed restaurant website can significantly increase online orders, table reservations, and overall customer engagement.</p>

        <h2>Essential Features Every Restaurant Website Needs</h2>
        
        <h3>1. Online Menu with High-Quality Images</h3>
        <p>Your menu is the heart of your website. Ensure it's easily accessible, well-organized, and features mouth-watering photos of your signature dishes. Consider organizing items by category and including detailed descriptions with ingredients and allergen information.</p>
        
        <h3>2. Online Ordering System</h3>
        <p>Integrate a seamless online ordering system that allows customers to place orders for pickup or delivery. The system should be intuitive, mobile-friendly, and integrate with your POS system for efficient order management.</p>
        
        <h3>3. Table Reservation System</h3>
        <p>Implement a real-time reservation system that shows available time slots and allows customers to book tables instantly. This reduces phone calls and improves the customer experience.</p>

        <h2>Design Best Practices</h2>
        
        <h3>Mobile-First Approach</h3>
        <p>Over 60% of restaurant website visits come from mobile devices. Ensure your website is fully responsive and provides an excellent experience on smartphones and tablets.</p>
        
        <h3>Fast Loading Times</h3>
        <p>Restaurant websites should load in under 3 seconds. Optimize images, use efficient hosting, and minimize unnecessary plugins to ensure quick loading times.</p>
        
        <h3>Clear Call-to-Actions</h3>
        <p>Make it easy for customers to take action with prominent buttons for "Order Now," "Make Reservation," and "View Menu." Use contrasting colors to make these buttons stand out.</p>

        <h2>Content Strategy</h2>
        
        <h3>Compelling Food Photography</h3>
        <p>Invest in professional food photography. High-quality images of your dishes can increase online orders by up to 30%. Ensure photos are well-lit, properly styled, and showcase your food's best features.</p>
        
        <h3>Customer Reviews and Testimonials</h3>
        <p>Display positive reviews prominently on your website. Customer testimonials build trust and can significantly influence dining decisions.</p>
        
        <h3>Location and Hours Information</h3>
        <p>Make it easy for customers to find you. Include your address, phone number, hours of operation, and an embedded map. Consider adding parking information and public transportation options.</p>

        <h2>SEO for Restaurant Websites</h2>
        
        <h3>Local SEO Optimization</h3>
        <p>Optimize for local search by including location-based keywords, claiming your Google My Business listing, and ensuring consistent NAP (Name, Address, Phone) information across all platforms.</p>
        
        <h3>Menu SEO</h3>
        <p>Use descriptive names for your dishes and include relevant keywords. This helps your restaurant appear in searches for specific cuisines or dishes.</p>

        <h2>Integration and Analytics</h2>
        
        <h3>POS System Integration</h3>
        <p>Ensure your online ordering system integrates seamlessly with your POS system to streamline operations and reduce errors.</p>
        
        <h3>Analytics and Tracking</h3>
        <p>Implement Google Analytics and other tracking tools to understand customer behavior, popular menu items, and conversion rates. Use this data to continuously improve your website's performance.</p>

        <h2>Conclusion</h2>
        <p>A well-designed restaurant website is a powerful tool for driving business growth. By implementing these best practices, you can create an online presence that not only showcases your restaurant beautifully but also converts visitors into customers. Remember, your website should reflect the quality and personality of your restaurant while making it as easy as possible for customers to order food and make reservations.</p>
      `,
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blogs">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Back Button */}
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <Button
          asChild
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
        >
          <Link href="/blogs">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto max-w-4xl px-6">
        <header className="mb-12">
          <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">{post.category}</Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-slate-400 flex items-center">
              <Share2 className="w-4 h-4 mr-2" />
              Share:
            </span>
            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>

          {/* Featured Image */}
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-12 w-full object-cover"
          />
        </header>

        {/* Article Content */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            color: "#e2e8f0",
            lineHeight: "1.8",
          }}
        />

        {/* Author Bio */}
        <Card className="bg-slate-900 border-slate-700 mb-12">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <img
                src={post.author === "Syed Kifayat Ur Rahman" ? "/images/ceo-kifayat.jpg" : "/images/team-codexura.jpg"}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {post.author === "Syed Kifayat Ur Rahman"
                    ? "CEO and Founder of Codexura, passionate about creating innovative web experiences and pushing the boundaries of 3D web technology."
                    : "The Codexura team consists of experienced web developers and designers dedicated to creating exceptional digital experiences for our clients."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "POS System UI/UX Design: Latest Trends",
                excerpt: "Latest trends in point-of-sale interface design for better user experience.",
                slug: "pos-system-ui-ux-trends",
                image: "/images/blog-pos-design.jpg",
              },
              {
                title: "Modern Web Design Principles for Business",
                excerpt: "How modern web design principles can transform your business success.",
                slug: "modern-web-design-principles",
                image: "/images/blog-web-design.jpg",
              },
            ].map((article, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 hover:border-slate-600 transition-colors">
                <CardContent className="p-6">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 w-full object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                    <Link href={`/blogs/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
                  >
                    <Link href={`/blogs/${article.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </article>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence with cutting-edge web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent text-lg px-8 py-4 transition-all duration-300"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
