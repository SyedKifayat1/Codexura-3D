"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Building, Users, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import 3D components with no SSR
const ClientOnlyCanvas = dynamic(() => import("@/components/client-only-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20" />,
})

// 3D Business Icon
function BusinessIcon3D() {
  return (
    <mesh>
      <boxGeometry args={[1.5, 2, 1]} />
      <meshStandardMaterial color="#10b981" />
    </mesh>
  )
}

export default function BusinessWebsitesPage() {
  const features = [
    "Custom Design & Branding",
    "Content Management System",
    "Contact Forms & Analytics",
    "SEO Optimization",
    "Mobile Responsive Design",
    "Social Media Integration",
    "SSL Security Certificate",
    "Performance Optimization",
  ]

  const benefits = [
    {
      icon: Building,
      title: "Professional Credibility",
      description:
        "Establish trust and credibility with a professional online presence that reflects your brand values.",
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description:
        "Engage with your customers through interactive features, contact forms, and social media integration.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Drive business growth with SEO-optimized content and conversion-focused design elements.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Built with security best practices and reliable hosting to ensure your website is always available.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and project requirements.",
    },
    {
      step: "02",
      title: "Design & Wireframing",
      description: "Create wireframes and design mockups that align with your brand identity.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your website using modern technologies with thorough testing.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your website and provide ongoing support and maintenance.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20" />

        {/* 3D Background */}
        <ClientOnlyCanvas camera={{ position: [0, 0, 6] }} className="absolute inset-0 opacity-20">
          <BusinessIcon3D />
        </ClientOnlyCanvas>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 text-lg px-4 py-2">
            Business Websites
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Business Websites
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Establish your digital presence with professional corporate websites that build credibility and drive
            business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 text-lg px-8 py-4"
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
              className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 bg-transparent text-lg px-8 py-4"
            >
              <Link href="/contact">Discuss Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              What's Included
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every business website comes with essential features to establish your professional online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center space-x-3 p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-green-500/50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Your Business Needs a Professional Website
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
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

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We follow a proven process to ensure your business website is delivered on time and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Professional Business Website
          </h2>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold text-white mb-4">
              $1,800
              <span className="text-2xl text-slate-400 font-normal"> starting</span>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              Complete business website with all essential features included
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              {features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">Get Started Today</Link>
            </Button>
          </div>
          <p className="text-slate-400 text-sm">
            * Final pricing may vary based on specific requirements and additional features
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Establish Your Digital Presence?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create a professional business website that represents your brand and drives growth. Get started with
            a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 text-lg px-8 py-4"
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
