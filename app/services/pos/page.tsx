"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Monitor, Smartphone, BarChart3, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import 3D components with no SSR
const ClientOnlyCanvas = dynamic(() => import("@/components/client-only-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />,
})

// 3D POS Icon
function POSIcon3D() {
  return (
    <mesh>
      <boxGeometry args={[2, 1.2, 0.2]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  )
}

export default function POSSystemsPage() {
  const features = [
    "Touch-Friendly Interface",
    "Inventory Management",
    "Payment Processing",
    "Sales Analytics & Reports",
    "Multi-Device Support",
    "Staff Management Tools",
    "Customer Database",
    "Receipt & Invoice Generation",
    "Real-time Synchronization",
    "Offline Mode Support",
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized interfaces that process transactions quickly, reducing customer wait times.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable architecture for 24/7 operation.",
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description: "Comprehensive reporting and analytics to help you make data-driven business decisions.",
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Role-based access control and staff performance tracking for better team management.",
    },
  ]

  const industries = [
    {
      title: "Restaurants & Cafes",
      description: "Table management, kitchen display systems, and order tracking",
      icon: "🍽️",
    },
    {
      title: "Retail Stores",
      description: "Inventory tracking, barcode scanning, and customer management",
      icon: "🛍️",
    },
    {
      title: "Salons & Spas",
      description: "Appointment scheduling, service tracking, and client profiles",
      icon: "💅",
    },
    {
      title: "Healthcare",
      description: "Patient check-in, billing systems, and appointment management",
      icon: "🏥",
    },
    {
      title: "Hotels & Hospitality",
      description: "Room management, guest services, and billing integration",
      icon: "🏨",
    },
    {
      title: "Automotive",
      description: "Service tracking, parts inventory, and customer history",
      icon: "🚗",
    },
  ]

  const techFeatures = [
    {
      icon: Monitor,
      title: "Multi-Screen Support",
      description: "Optimized for various screen sizes from tablets to large displays",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Works seamlessly on tablets and mobile devices for flexibility",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />

        {/* 3D Background */}
        <ClientOnlyCanvas camera={{ position: [0, 0, 6] }} className="absolute inset-0 opacity-20">
          <POSIcon3D />
        </ClientOnlyCanvas>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30 text-lg px-4 py-2">
            POS UI Systems
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Intuitive POS Interfaces
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Streamline your business operations with custom-designed point-of-sale interfaces that prioritize efficiency
            and user experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">
                Design Your POS System
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 bg-transparent text-lg px-8 py-4"
            >
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive POS Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every POS interface we design includes essential features for modern business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center space-x-3 p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Our POS Interfaces
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
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

      {/* Industries Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tailored for Every Industry
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We design POS interfaces specifically for your industry's unique requirements and workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={industry.title}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-purple-500/50 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with modern technologies for optimal performance and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techFeatures.map((feature, index) => (
              <Card key={feature.title} className="bg-slate-900 border-slate-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Custom POS Interface Design
          </h2>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold text-white mb-4">
              $3,500
              <span className="text-2xl text-slate-400 font-normal"> starting</span>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              Complete POS interface design with custom features for your business
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              {features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">Start Your POS Project</Link>
            </Button>
          </div>
          <p className="text-slate-400 text-sm">
            * Custom pricing based on complexity and specific requirements. Integration support available.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's design a POS interface that makes your business operations faster, more efficient, and more
            profitable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">Get Free Consultation</Link>
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
