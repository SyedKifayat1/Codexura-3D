"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Palette, Camera, Briefcase, User, Heart, Zap } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import 3D components with no SSR
const ClientOnlyCanvas = dynamic(() => import("@/components/client-only-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-purple-900/20" />,
})

// 3D Portfolio Icon
function PortfolioIcon3D() {
  return (
    <mesh>
      <octahedronGeometry args={[1.2]} />
      <meshStandardMaterial color="#ec4899" />
    </mesh>
  )
}

export default function PortfolioWebsitesPage() {
  const features = [
    "Interactive Project Galleries",
    "Client Testimonials",
    "Contact & Inquiry Forms",
    "Blog Integration",
    "Social Media Links",
    "Custom Animations",
    "Mobile-Responsive Design",
    "SEO Optimization",
    "Fast Loading Times",
    "Professional Typography",
  ]

  const benefits = [
    {
      icon: Palette,
      title: "Showcase Your Creativity",
      description:
        "Beautiful galleries and layouts that let your work speak for itself with stunning visual presentation.",
    },
    {
      icon: User,
      title: "Personal Branding",
      description: "Build a strong personal brand that reflects your unique style and professional expertise.",
    },
    {
      icon: Heart,
      title: "Client Connection",
      description:
        "Create emotional connections with potential clients through compelling storytelling and testimonials.",
    },
    {
      icon: Zap,
      title: "Lead Generation",
      description: "Convert visitors into clients with strategic call-to-actions and inquiry forms.",
    },
  ]

  const portfolioTypes = [
    {
      title: "Photographers",
      description: "Stunning image galleries with lightbox effects and client proofing systems",
      icon: Camera,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Graphic Designers",
      description: "Interactive project showcases with case studies and design process documentation",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Freelancers",
      description: "Professional profiles with service offerings and client testimonials",
      icon: User,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Agencies",
      description: "Team showcases, case studies, and comprehensive service portfolios",
      icon: Briefcase,
      color: "from-green-500 to-blue-500",
    },
  ]

  const galleryFeatures = [
    "Masonry Grid Layouts",
    "Lightbox Image Viewing",
    "Category Filtering",
    "Lazy Loading",
    "Touch Gestures",
    "Zoom Functionality",
    "Slideshow Mode",
    "Social Sharing",
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-purple-900/20" />

        {/* 3D Background */}
        <ClientOnlyCanvas camera={{ position: [0, 0, 6] }} className="absolute inset-0 opacity-20">
          <PortfolioIcon3D />
        </ClientOnlyCanvas>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-pink-500/20 text-pink-400 border-pink-500/30 text-lg px-4 py-2">
            Portfolio Websites
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Stunning Portfolio Websites
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Showcase your creative work with beautiful portfolio websites that captivate audiences and convert visitors
            into clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">
                Create Your Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 bg-transparent text-lg px-8 py-4"
            >
              <Link href="/contact">View Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio Features That Impress
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every portfolio website includes professional features designed to showcase your work beautifully
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center space-x-3 p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-pink-500/50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-white text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Why Your Portfolio Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Types */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Perfect for Creative Professionals
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're a freelancer or agency, we create portfolios tailored to your creative field
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioTypes.map((type, index) => (
              <Card
                key={type.title}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-pink-500/50 transition-colors overflow-hidden"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Features */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Advanced Gallery Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcase your work with professional gallery features that provide the best viewing experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryFeatures.map((feature, index) => (
              <div
                key={feature}
                className="p-6 bg-slate-900 border border-slate-700 rounded-lg text-center hover:border-pink-500/50 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-3" />
                <h3 className="text-white font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Professional Portfolio Website
          </h2>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold text-white mb-4">
              $1,500
              <span className="text-2xl text-slate-400 font-normal"> starting</span>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              Complete portfolio website with interactive galleries and professional design
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              {features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">Launch Your Portfolio</Link>
            </Button>
          </div>
          <p className="text-slate-400 text-sm">
            * Pricing includes design, development, and basic content setup. Additional customization available.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Showcase Your Work?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create a stunning portfolio that represents your creative vision and attracts your ideal clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 bg-transparent text-lg px-8 py-4"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
