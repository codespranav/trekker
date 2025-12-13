"use client"

import { Card } from "@/components/ui/card"
import { Camera, MapPin, AlertTriangle, BarChart3, Navigation, Shield } from "lucide-react"
import Link from "next/link"

export function Features() {
  const features = [
    {
      icon: Camera,
      title: "Visual Assessment",
      description: "Analyze newly constructed and DLP roads using serial photos and video feeds with computer vision",
      link: "/monitoring",
    },
    {
      icon: AlertTriangle,
      title: "Pothole Detection",
      description: "Automatically identify and classify potholes, damaged stretches, and surface defects in real-time",
      link: "/monitoring",
    },
    {
      icon: MapPin,
      title: "Accident Zone Analysis",
      description: "Map and analyze accident-prone zones to recommend preventive maintenance and safety measures",
      link: "/analytics",
    },
    {
      icon: Navigation,
      title: "Congestion Monitoring",
      description: "Identify traffic congestion hotspots and recommend corrective actions for improved flow",
      link: "/analytics",
    },
    {
      icon: BarChart3,
      title: "Quality Metrics",
      description: "Track road quality scores, maintenance cycles, and performance indicators with detailed analytics",
      link: "/reports",
    },
    {
      icon: Shield,
      title: "IoT Integration",
      description: "Connect sensors, mobile devices, and GIS systems for comprehensive infrastructure monitoring",
      link: "/monitoring",
    },
  ]

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Comprehensive Road Monitoring Solution
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            Leverage AI, IoT, and GIS technology to transform road infrastructure management with intelligent automation
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link}>
              <Card className="group border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
