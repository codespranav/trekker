"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, ArrowRight, Zap, Shield, BarChart3, Camera } from "lucide-react"
import Link from "next/link"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Get Started with RoadPulse</h1>
            <p className="text-lg text-muted-foreground">Transform your road infrastructure monitoring in minutes</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Account</CardTitle>
                  <CardDescription>Start your free 30-day trial today</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="john@organization.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name</Label>
                      <Input id="organization" placeholder="Your Organization" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Create a strong password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the Terms of Service and Privacy Policy
                      </label>
                    </div>
                    <Button className="w-full" size="lg">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">Unlimited camera connections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">Real-time AI detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">Advanced analytics dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">Automated report generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">24/7 customer support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">No credit card required</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How It Works</CardTitle>
                  <CardDescription>Three simple steps to better road monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Connect Your Cameras</h3>
                      <p className="text-sm text-muted-foreground">
                        Integrate your existing camera infrastructure or add new cameras to the RoadPulse network
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">AI Starts Monitoring</h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI automatically detects potholes, cracks, and other road issues in real-time
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Take Action</h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant alerts and actionable insights to maintain safer roads efficiently
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <Zap className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-base">Fast Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get started in less than 10 minutes with our quick setup wizard
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <Shield className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-base">Enterprise Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Bank-level encryption and security for your data</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <BarChart3 className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-base">Real Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Track trends and make data-driven maintenance decisions
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <Camera className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-base">AI-Powered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Advanced AI detection with 98% accuracy rate</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-primary bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Need Help?</h3>
                    <p className="mb-4 text-muted-foreground">
                      Our team is here to assist you with setup and onboarding
                    </p>
                    <Button variant="outline" size="lg">
                      Schedule a Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
