"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, TrendingUp, TrendingDown, MapPin, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Dashboard() {
  const [selectedAlert, setSelectedAlert] = useState<number | null>(null)

  const recentAlerts = [
    {
      id: 1,
      type: "Pothole",
      location: "Highway 101, Mile 45",
      severity: "High",
      status: "Pending",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "Surface Damage",
      location: "Main Street, Zone B",
      severity: "Medium",
      status: "In Progress",
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "Congestion",
      location: "Interstate 5, Exit 12",
      severity: "Low",
      status: "Resolved",
      time: "1 day ago",
    },
  ]

  const metrics = [
    {
      label: "Active Alerts",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: AlertCircle,
      link: "/monitoring",
    },
    {
      label: "Roads Scanned",
      value: "1,245",
      change: "+8%",
      trend: "up",
      icon: Activity,
      link: "/analytics",
    },
    {
      label: "Avg Response Time",
      value: "2.4h",
      change: "-15%",
      trend: "down",
      icon: TrendingDown,
      link: "/analytics",
    },
    {
      label: "Quality Score",
      value: "94.2%",
      change: "+3%",
      trend: "up",
      icon: TrendingUp,
      link: "/analytics",
    },
  ]

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">Live Monitoring Dashboard</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Real-time insights and alerts from your road infrastructure network
          </p>
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Link key={index} href={metric.link}>
              <Card className="border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                      <span
                        className={`text-sm font-medium ${metric.trend === "up" ? "text-chart-5" : "text-chart-2"}`}
                      >
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <metric.icon className="h-5 w-5" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="border border-border bg-card">
          <div className="border-b border-border p-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">Recent Alerts</h3>
            <Link href="/monitoring">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="divide-y divide-border">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-center justify-between p-6 transition-colors cursor-pointer ${
                  selectedAlert === alert.id ? "bg-accent" : "hover:bg-accent/50"
                }`}
                onClick={() => setSelectedAlert(selectedAlert === alert.id ? null : alert.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <p className="font-semibold text-foreground">{alert.type}</p>
                      <Badge
                        variant={
                          alert.severity === "High"
                            ? "destructive"
                            : alert.severity === "Medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{alert.location}</span>
                      <span>•</span>
                      <span>{alert.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{alert.status}</Badge>
                  <Link href="/monitoring">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
