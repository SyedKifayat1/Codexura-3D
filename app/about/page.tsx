"use client"

import { useRef, useEffect } from "react"
import { Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users, Lightbulb, Heart } from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// 3D Timeline Element
function TimelineElement3D({ color = "#3b82f6" }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".timeline-item")
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }
  }, [])

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Codexura was founded with a vision to create innovative web solutions that push boundaries.",
      color: "#3b82f6",
    },
    {
      year: "2021",
      title: "First Major Projects",
      description: "Delivered our first business websites and established our reputation for quality and innovation.",
      color: "#10b981",
    },
    {
      year: "2022",
      title: "3D Web Expertise",
      description: "Pioneered 3D web experiences, becoming specialists in immersive web technologies.",
      color: "#8b5cf6",
    },
    {
      year: "2023",
      title: "Restaurant Solutions",
      description: "Expanded into restaurant websites and POS systems, serving the hospitality industry.",
      color: "#f59e0b",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as a leading 3D web development agency with 50+ successful projects.",
      color: "#ef4444",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of web technology to create unique experiences.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every project is crafted with passion and attention to detail.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand and exceed their expectations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work and client relationships.",
    },
  ]

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "4+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0">
          <img src="/images/about-hero.jpg" alt="About Codexura" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40" />
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30 text-lg px-4 py-2">
            About Codexura
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            We are a passionate team of web developers and designers dedicated to creating innovative 3D web experiences
            that transform businesses
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">Leadership</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Meet Our CEO</h2>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Syed Kifayat Ur Rahman</h3>
                <p className="text-slate-400 mb-4">Founder & Chief Executive Officer</p>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                "At Codexura, we believe that every business deserves a digital presence that truly represents their
                vision and values. Our mission is to bridge the gap between cutting-edge technology and meaningful user
                experiences."
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                "We don't just build websites; we craft digital experiences that tell stories, engage audiences, and
                drive real business results. Every project is an opportunity to push the boundaries of what's possible
                on the web."
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                <Link href="/contact">Connect with Our Team</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/ceo-kifayat.jpg"
                alt="Syed Kifayat Ur Rahman - CEO"
                className="aspect-square rounded-2xl object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To empower businesses with innovative web solutions that combine cutting-edge 3D technology with
                  exceptional user experiences. We strive to transform digital presence and drive meaningful business
                  growth through creative and technical excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  To be the leading 3D web development agency that sets new standards for digital innovation. We
                  envision a future where every business can leverage immersive web technologies to create memorable
                  experiences and achieve unprecedented success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">Our Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Story Timeline
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here's how Codexura has evolved over the years
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`timeline-item flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="bg-slate-900 border-slate-700">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative z-10">
                  <div className="w-4 h-4 rounded-full border-4 border-white" style={{ backgroundColor: item.color }} />
                </div>

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              What Drives Us
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="bg-slate-900 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Achievements</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Our Success in Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-slate-300 text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and discover how we can help transform your digital presence with innovative web
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-4"
            >
              <Link href="/get-quote">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 bg-transparent text-lg px-8 py-4 transition-all duration-300"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
