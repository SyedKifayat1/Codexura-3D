"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, UtensilsCrossed, ShoppingCart, Calendar, Star, CreditCard } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import 3D components with no SSR
const ClientOnlyCanvas = dynamic(() => import("@/components/client-only-canvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/20" />,
})

// 3D Restaurant Icon
function RestaurantIcon3D() {
  return (
    <mesh>
      <cylinderGeometry args={[1, 1.5, 2]} />
      <meshStandardMaterial color="#f59e0b" />
    </mesh>
  )
}

export default function RestaurantWebsitesPage() {
  const features = [
    "Online Menu & Ordering System",
    "Table Reservation System",
    "Photo Galleries & Reviews",
    "Location & Hours Display",
    "Customer Loyalty Programs",
    "Payment Gateway Integration",
    "Mobile-First Design",
    "Social Media Integration",
    "SEO Optimization",
    "Analytics Dashboard",
  ]

  const benefits = [
    {
      icon: ShoppingCart,
      title: "Increase Online Orders",
      description: "Boost revenue with seamless online ordering and delivery integration that works 24/7.",
    },
    {
      icon: Calendar,
      title: "Table Reservations",
      description: "Let customers book tables online with real-time availability and automated confirmations.",
    },
    {
      icon: Star,
      title: "Customer Reviews",
      description: "Build trust with integrated review systems and showcase your best customer feedback.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Accept payments online with secure, PCI-compliant payment processing systems.",
    },
  ]

  const restaurantTypes = [
    "Fine Dining Restaurants",
    "Fast Casual Chains",
    "Food Trucks & Pop-ups",
    "Cafes & Coffee Shops",
    "Bakeries & Dessert Shops",
    "Pizza & Delivery Services",
    "Ethnic Cuisine Restaurants",
    "Bars & Breweries",
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/20" />

        {/* 3D Background */}
        <ClientOnlyCanvas camera={{ position: [0, 0, 6] }} className="absolute inset-0 opacity-20">
          <RestaurantIcon3D />
        </ClientOnlyCanvas>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 text-lg px-4 py-2">
            Restaurant Websites
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Appetizing Restaurant Websites
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Drive more customers to your restaurant with stunning websites featuring online ordering, reservations, and
            customer engagement tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">
                Start Your Restaurant Website
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 bg-transparent text-lg px-8 py-4"
            >
              <Link href="/contact">Discuss Your Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Everything Your Restaurant Needs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our restaurant websites come packed with features designed to increase orders and improve customer
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center space-x-3 p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-orange-500/50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Grow Your Restaurant Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
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

      {/* Restaurant Types */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Perfect for Any Restaurant Type
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're a fine dining establishment or a casual eatery, we create websites tailored to your
              restaurant's unique style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurantTypes.map((type, index) => (
              <div
                key={type}
                className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-lg text-center hover:border-orange-500/50 transition-colors"
              >
                <UtensilsCrossed className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Restaurant Website Package
          </h2>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold text-white mb-4">
              $2,200
              <span className="text-2xl text-slate-400 font-normal"> starting</span>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              Complete restaurant website with online ordering and reservation system
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              {features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">Order Your Website Today</Link>
            </Button>
          </div>
          <p className="text-slate-400 text-sm">
            * Pricing includes setup, design, and basic training. Monthly hosting and maintenance available separately.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Ready to Serve More Customers Online?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create a mouth-watering website that brings customers to your door and keeps them coming back for
            more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 text-lg px-8 py-4"
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
