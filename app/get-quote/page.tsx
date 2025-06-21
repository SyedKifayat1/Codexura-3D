"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, CheckCircle, Upload } from "lucide-react"
import Link from "next/link"

export default function GetQuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    serviceType: "",
    businessType: "",
    features: [] as string[],
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const totalSteps = 4

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFeatureToggle = (feature: string) => {
    setFormData({
      ...formData,
      features: formData.features.includes(feature)
        ? formData.features.filter((f) => f !== feature)
        : [...formData.features, feature],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote request submitted:", formData)
    // Handle form submission
  }

  const serviceOptions = [
    { value: "business", label: "Business Website", price: "Starting at $1,800" },
    { value: "restaurant", label: "Restaurant Website", price: "Starting at $2,200" },
    { value: "pos", label: "POS UI System", price: "Starting at $3,500" },
    { value: "portfolio", label: "Portfolio Website", price: "Starting at $1,500" },
    { value: "frontend", label: "Frontend Development", price: "Starting at $2,500" },
    { value: "seo", label: "SEO Optimization", price: "Starting at $800" },
  ]

  const featureOptions = [
    "3D Interactive Elements",
    "Online Ordering System",
    "Payment Gateway Integration",
    "Inventory Management",
    "Customer Portal",
    "Multi-language Support",
    "Analytics Dashboard",
    "Social Media Integration",
    "Email Marketing Integration",
    "Live Chat Support",
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 text-lg px-4 py-2">Get Quote</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start Your Project
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get a personalized quote for your project in just a few steps. Tell us about your requirements and we'll
            provide a detailed proposal.
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

      {/* Multi-step Form */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    step <= currentStep ? "bg-blue-500 border-blue-500 text-white" : "border-slate-600 text-slate-400"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
                </div>
              ))}
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-slate-400">
              <span>Service Type</span>
              <span>Features</span>
              <span>Budget & Timeline</span>
              <span>Contact Info</span>
            </div>
          </div>

          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Step {currentStep} of {totalSteps}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Type */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">What service do you need?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {serviceOptions.map((service) => (
                        <div
                          key={service.value}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.serviceType === service.value
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-slate-600 hover:border-slate-500"
                          }`}
                          onClick={() => setFormData({ ...formData, serviceType: service.value })}
                        >
                          <h4 className="text-white font-semibold mb-2">{service.label}</h4>
                          <p className="text-slate-400 text-sm">{service.price}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        What type of business is this for?
                      </label>
                      <Input
                        type="text"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="bg-slate-800 border-slate-600 text-white focus:border-blue-500"
                        placeholder="e.g., Restaurant, Tech Startup, Consulting Firm"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Features */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">What features do you need?</h3>
                    <p className="text-slate-300 mb-6">Select all features that apply to your project:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {featureOptions.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <Checkbox
                            id={feature}
                            checked={formData.features.includes(feature)}
                            onCheckedChange={() => handleFeatureToggle(feature)}
                            className="border-slate-600"
                          />
                          <label htmlFor={feature} className="text-white cursor-pointer">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Budget & Timeline */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">Budget & Timeline</h3>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Project Budget</label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="under-2k">Under $2,000</SelectItem>
                          <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                          <SelectItem value="over-20k">Over $20,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Project Timeline</label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                      >
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="asap">ASAP (Rush job)</SelectItem>
                          <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                          <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                          <SelectItem value="1-2months">1-2 months</SelectItem>
                          <SelectItem value="flexible">Flexible timeline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Additional Requirements (Optional)
                      </label>
                      <Textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-slate-800 border-slate-600 text-white focus:border-blue-500"
                        placeholder="Tell us about any specific requirements, design preferences, or questions you have..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Information */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-slate-800 border-slate-600 text-white focus:border-blue-500"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-slate-800 border-slate-600 text-white focus:border-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-slate-800 border-slate-600 text-white focus:border-blue-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-slate-800 border-slate-600 text-white focus:border-blue-500"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-300 mb-2">Upload Reference Files (Optional)</p>
                      <p className="text-slate-400 text-sm">
                        Upload any design references, logos, or documents that might help us understand your vision
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4 border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 bg-transparent"
                      >
                        Choose Files
                      </Button>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    >
                      Next
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0"
                    >
                      Submit Quote Request
                      <CheckCircle className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Happens Next?</h2>
            <p className="text-slate-300">Here's what you can expect after submitting your quote request:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Review & Analysis</h3>
              <p className="text-slate-300 text-sm">
                We'll review your requirements and analyze the scope of your project within 24 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Detailed Proposal</h3>
              <p className="text-slate-300 text-sm">
                You'll receive a comprehensive proposal with timeline, pricing, and project breakdown.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Project Kickoff</h3>
              <p className="text-slate-300 text-sm">
                Once approved, we'll schedule a kickoff call and begin bringing your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
