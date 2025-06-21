"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Globe, ShoppingCart, Palette, Star, Quote } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import 3D components with no SSR
const ClientOnlyCanvas = dynamic(() => import("@/components/client-only-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />,
})

// 3D Hero Component
function Hero3D() {
  const meshRef = useRef<any>()

  useEffect(() => {
    if (typeof window !== "undefined" && meshRef.current) {
      import("gsap").then(({ gsap }) => {
        gsap.to(meshRef.current.rotation, {
          y: Math.PI * 2,
          duration: 20,
          repeat: -1,
          ease: "none",
        })
      })
    }
  }, [])

  return (
    <group>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" wireframe />
      </mesh>
      <mesh position={[-2, 1, 0]}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      <mesh position={[0, -1.5, 1]}>
        <icosahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#06b6d4" wireframe />
      </mesh>
    </group>
  )
}

// Service Preview Card
function ServicePreviewCard({ service, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && cardRef.current) {
      Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
        .then(([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger)

          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50, rotateX: -15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 1,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
        .catch(() => {
          // Fallback animation without GSAP
          if (cardRef.current) {
            cardRef.current.style.opacity = "1"
            cardRef.current.style.transform = "translateY(0) rotateX(0)"
          }
        })
    }
  }, [index])

  return (
    <Card
      ref={cardRef}
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 overflow-hidden cursor-pointer opacity-0"
      style={{ transform: "translateY(50px) rotateX(-15deg)" }}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <service.icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.description}</p>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
          >
            <Link href={service.href}>
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && isClient) {
      import("gsap")
        .then(({ gsap }) => {
          const tl = gsap.timeline()

          if (titleRef.current) {
            tl.fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
          }

          if (subtitleRef.current) {
            tl.fromTo(
              subtitleRef.current,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
              "-=0.8",
            )
          }

          if (heroRef.current) {
            gsap.to(heroRef.current, {
              y: -20,
              duration: 3,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
            })
          }
        })
        .catch(() => {
          // Fallback without GSAP
          if (titleRef.current) {
            titleRef.current.style.opacity = "1"
            titleRef.current.style.transform = "translateY(0)"
          }
          if (subtitleRef.current) {
            subtitleRef.current.style.opacity = "1"
            subtitleRef.current.style.transform = "translateY(0)"
          }
        })
    }
  }, [isClient])

  const services = [
    {
      icon: Globe,
      title: "Business Websites",
      description: "Professional corporate websites that establish your digital presence and drive growth.",
      href: "/services/business",
      image: "/images/business-website.jpg",
    },
    {
      icon: ShoppingCart,
      title: "Restaurant Websites",
      description: "Appetizing restaurant websites with online ordering, menus, and reservation systems.",
      href: "/services/restaurant",
      image: "/images/restaurant-website.jpg",
    },
    {
      icon: Smartphone,
      title: "POS UI Systems",
      description: "Intuitive point-of-sale interfaces designed for efficiency and user experience.",
      href: "/services/pos",
      image: "/images/pos-system.jpg",
    },
    {
      icon: Palette,
      title: "Portfolio Websites",
      description: "Stunning portfolio websites for creatives, agencies, and professionals.",
      href: "/services/portfolio",
      image: "/images/portfolio-website.jpg",
    },
  ]

  const whyChooseUs = [
    {
      title: "3D Innovation",
      description: "Cutting-edge 3D web experiences that set you apart from competitors",
      icon: "🚀",
    },
    {
      title: "Mobile-First",
      description: "Responsive designs that work perfectly on all devices and screen sizes",
      icon: "📱",
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO best practices to boost your search engine rankings",
      icon: "🎯",
    },
    {
      title: "Fast Performance",
      description: "Lightning-fast loading times and optimized user experiences",
      icon: "⚡",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Codexura transformed our online presence with a stunning 3D website that perfectly represents our brand.",
      rating: 5,
      image: "/images/client-sarah.jpg",
    },
    {
      name: "Mike Chen",
      company: "Bella Vista Restaurant",
      text: "The restaurant website they built increased our online orders by 300%. Absolutely incredible work!",
      rating: 5,
      image: "/images/client-mike.jpg",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      text: "Our portfolio website is now a masterpiece. Clients are impressed before they even see our work.",
      rating: 5,
      image: "/images/client-emily.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero-3d-web.jpg"
            alt="3D Web Development"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
        </div>

        {/* 3D Background */}
        {isClient && (
          <ClientOnlyCanvas camera={{ position: [0, 0, 8] }} className="absolute inset-0 opacity-30">
            <Hero3D />
          </ClientOnlyCanvas>
        )}

        <div ref={heroRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0"
            style={{ transform: "translateY(100px)" }}
          >
            We Craft Next-Gen
            <br />
            3D Web Experiences
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed opacity-0"
            style={{ transform: "translateY(50px)" }}
          >
            Transform your digital presence with immersive 3D websites, cutting-edge business solutions, and
            professional web development services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-3"
            >
              <Link href="/get-quote">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent text-lg px-8 py-3 transition-all duration-300"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What We Create
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From business websites to restaurant platforms and POS systems, we deliver comprehensive web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <ServicePreviewCard key={service.title} service={service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Excellence in Every Detail
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-slate-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"
                          e.currentTarget.parentElement!.style.background =
                            "linear-gradient(to right, #3b82f6, #8b5cf6)"
                        }}
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">Latest Insights</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              From Our Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "The Future of 3D Web Design",
                excerpt: "Exploring how 3D elements are revolutionizing user experiences on the web.",
                date: "Dec 15, 2024",
                slug: "future-of-3d-web-design",
                image: "/images/blog-3d-web.jpg",
              },
              {
                title: "Restaurant Website Best Practices",
                excerpt: "Essential features every restaurant website needs to drive online orders.",
                date: "Dec 10, 2024",
                slug: "restaurant-website-best-practices",
                image: "/images/blog-restaurant.jpg",
              },
              {
                title: "POS System UI/UX Trends",
                excerpt: "Latest trends in point-of-sale interface design for better user experience.",
                date: "Dec 5, 2024",
                slug: "pos-system-ui-ux-trends",
                image: "/images/blog-pos-design.jpg",
              },
            ].map((post, index) => (
              <Card
                key={post.slug}
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
                    <div className="text-slate-400 text-sm mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-all duration-300"
                    >
                      <Link href={`/blogs/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0"
            >
              <Link href="/blogs">
                View All Posts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get a free consultation and discover how we can elevate your
            business with cutting-edge web technology.
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

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Codexura
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Crafting next-generation 3D web experiences with cutting-edge technology and creative excellence.
              </p>
              <div className="text-slate-400 text-sm">
                <div>CEO: Syed Kifayat Ur Rahman</div>
                <div>Professional Web Development Agency</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/services/business" className="hover:text-blue-400 transition-colors">
                    Business Websites
                  </Link>
                </li>
                <li>
                  <Link href="/services/restaurant" className="hover:text-blue-400 transition-colors">
                    Restaurant Websites
                  </Link>
                </li>
                <li>
                  <Link href="/services/pos" className="hover:text-blue-400 transition-colors">
                    POS UI Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/portfolio" className="hover:text-blue-400 transition-colors">
                    Portfolio Websites
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/about" className="hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>hello@codexura.com</li>
                <li>+1 (555) 123-4567</li>
                <li>WhatsApp Chat</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            © 2024 Codexura. All rights reserved. Built with passion and cutting-edge technology.
          </div>
        </div>
      </footer>
    </div>
  )
}
