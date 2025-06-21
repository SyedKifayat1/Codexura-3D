"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, ShoppingCart, Smartphone, Palette, Search, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import 3D components with no SSR
const ClientOnlyCanvas = dynamic(() => import("@/components/client-only-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />,
})

// 3D Service Icon Component
function ServiceIcon3D({ color = "#3b82f6" }) {
  return (
    <mesh>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Enhanced Service Card
function ServiceCard({ service, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && cardRef.current) {
      Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
        .then(([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger)

          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 100, rotateX: -20 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 1.2,
              delay: index * 0.2,
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
      className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 overflow-hidden h-full opacity-0"
      style={{ transform: "translateY(100px) rotateX(-20deg)" }}
    >
      <CardHeader className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
            {service.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

        <div className="space-y-3 mb-6">
          <h4 className="text-white font-semibold">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-slate-400 text-sm">
            Starting from <span className="text-white font-bold text-lg">{service.price}</span>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
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

export default function ServicesPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Business Websites",
      description:
        "Professional corporate websites that establish your digital presence, build credibility, and drive business growth with modern design and functionality.",
      features: [
        "Custom Design & Branding",
        "Content Management System",
        "Contact Forms & Analytics",
        "SEO Optimization",
        "Mobile Responsive Design",
        "Social Media Integration",
      ],
      price: "$1,800",
      href: "/services/business",
    },
    {
      icon: ShoppingCart,
      title: "Restaurant Websites",
      description:
        "Appetizing restaurant websites with online ordering, digital menus, reservation systems, and customer engagement features to boost your food business.",
      features: [
        "Online Menu & Ordering System",
        "Table Reservation System",
        "Photo Galleries & Reviews",
        "Location & Hours Display",
        "Customer Loyalty Programs",
        "Payment Gateway Integration",
      ],
      price: "$2,200",
      href: "/services/restaurant",
    },
    {
      icon: Smartphone,
      title: "POS UI Systems",
      description:
        "Intuitive point-of-sale interfaces designed for efficiency, ease of use, and seamless transaction processing across multiple devices and platforms.",
      features: [
        "Touch-Friendly Interface",
        "Inventory Management",
        "Payment Processing",
        "Sales Analytics & Reports",
        "Multi-Device Support",
        "Staff Management Tools",
      ],
      price: "$3,500",
      href: "/services/pos",
    },
    {
      icon: Palette,
      title: "Portfolio Websites",
      description:
        "Stunning portfolio websites for creatives, agencies, and professionals to showcase their work with beautiful galleries and interactive elements.",
      features: [
        "Interactive Project Galleries",
        "Client Testimonials",
        "Contact & Inquiry Forms",
        "Blog Integration",
        "Social Media Links",
        "Custom Animations",
      ],
      price: "$1,500",
      href: "/services/portfolio",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies that deliver exceptional user experiences.",
      features: [
        "React & Next.js Development",
        "Responsive Design",
        "Performance Optimization",
        "Modern JavaScript/TypeScript",
        "Component Libraries",
        "API Integration",
      ],
      price: "$2,500",
      href: "/services",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Comprehensive search engine optimization to boost your visibility, increase organic traffic, and improve search rankings across all major search engines.",
      features: [
        "Technical SEO Audit",
        "Keyword Research & Strategy",
        "Content Optimization",
        "Local SEO Setup",
        "Performance Monitoring",
        "Monthly Reports",
      ],
      price: "$800",
      href: "/services",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

        {/* 3D Background */}
        {isClient && (
          <ClientOnlyCanvas camera={{ position: [0, 0, 8] }} className="absolute inset-0 opacity-20">
            <ServiceIcon3D color="#3b82f6" />
          </ClientOnlyCanvas>
        )}

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 text-lg px-4 py-2">All Services</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Complete Web Solutions
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            From concept to deployment, we deliver cutting-edge web solutions that drive results and exceed expectations
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4"
          >
            <Link href="/get-quote">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. Get a free consultation and project quote.
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
              className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 bg-transparent text-lg px-8 py-4"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
