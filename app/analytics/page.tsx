"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, TrendingDown, AlertCircle, Download, Filter } from "lucide-react"
import { useState } from "react"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")

  const getDetectionTrend = () => {
    switch (timeRange) {
      case "24h":
        return [
          { date: "12am", potholes: 5, cracks: 3, damages: 1 },
          { date: "4am", potholes: 2, cracks: 1, damages: 0 },
          { date: "8am", potholes: 8, cracks: 6, damages: 2 },
          { date: "12pm", potholes: 12, cracks: 8, damages: 3 },
          { date: "4pm", potholes: 15, cracks: 10, damages: 4 },
          { date: "8pm", potholes: 9, cracks: 7, damages: 2 },
        ]
      case "7d":
        return [
          { date: "Mon", potholes: 45, cracks: 32, damages: 12 },
          { date: "Tue", potholes: 52, cracks: 28, damages: 15 },
          { date: "Wed", potholes: 38, cracks: 35, damages: 10 },
          { date: "Thu", potholes: 61, cracks: 42, damages: 18 },
          { date: "Fri", potholes: 55, cracks: 38, damages: 14 },
          { date: "Sat", potholes: 42, cracks: 30, damages: 11 },
          { date: "Sun", potholes: 48, cracks: 33, damages: 13 },
        ]
      case "30d":
        return [
          { date: "Week 1", potholes: 180, cracks: 145, damages: 52 },
          { date: "Week 2", potholes: 210, cracks: 168, damages: 63 },
          { date: "Week 3", potholes: 195, cracks: 155, damages: 58 },
          { date: "Week 4", potholes: 225, cracks: 178, damages: 71 },
        ]
      case "90d":
        return [
          { date: "Month 1", potholes: 810, cracks: 636, damages: 244 },
          { date: "Month 2", potholes: 875, cracks: 698, damages: 278 },
          { date: "Month 3", potholes: 920, cracks: 745, damages: 302 },
        ]
      default:
        return []
    }
  }

  const getSeverityData = () => {
    switch (timeRange) {
      case "24h":
        return [
          { name: "Critical", value: 15, color: "hsl(var(--destructive))" },
          { name: "High", value: 24, color: "hsl(25, 95%, 53%)" },
          { name: "Medium", value: 42, color: "hsl(45, 93%, 47%)" },
          { name: "Low", value: 31, color: "hsl(217, 91%, 60%)" },
        ]
      case "7d":
        return [
          { name: "Critical", value: 145, color: "hsl(var(--destructive))" },
          { name: "High", value: 234, color: "hsl(25, 95%, 53%)" },
          { name: "Medium", value: 421, color: "hsl(45, 93%, 47%)" },
          { name: "Low", value: 312, color: "hsl(217, 91%, 60%)" },
        ]
      case "30d":
        return [
          { name: "Critical", value: 580, color: "hsl(var(--destructive))" },
          { name: "High", value: 936, color: "hsl(25, 95%, 53%)" },
          { name: "Medium", value: 1684, color: "hsl(45, 93%, 47%)" },
          { name: "Low", value: 1248, color: "hsl(217, 91%, 60%)" },
        ]
      case "90d":
        return [
          { name: "Critical", value: 1740, color: "hsl(var(--destructive))" },
          { name: "High", value: 2808, color: "hsl(25, 95%, 53%)" },
          { name: "Medium", value: 5052, color: "hsl(45, 93%, 47%)" },
          { name: "Low", value: 3744, color: "hsl(217, 91%, 60%)" },
        ]
      default:
        return []
    }
  }

  const getStatsByTimeRange = () => {
    switch (timeRange) {
      case "24h":
        return { total: 112, critical: 15, resolutionRate: 87.5, avgTime: 3.2 }
      case "7d":
        return { total: 1112, critical: 145, resolutionRate: 93.2, avgTime: 1.5 }
      case "30d":
        return { total: 4448, critical: 580, resolutionRate: 94.8, avgTime: 1.2 }
      case "90d":
        return { total: 13344, critical: 1740, resolutionRate: 96.1, avgTime: 0.9 }
      default:
        return { total: 1112, critical: 145, resolutionRate: 93.2, avgTime: 1.5 }
    }
  }

  const detectionTrend = getDetectionTrend()
  const severityData = getSeverityData()
  const stats = getStatsByTimeRange()

  const roadCondition = [
    { zone: "Highway 101", excellent: 45, good: 30, fair: 15, poor: 10 },
    { zone: "Coastal Hwy", excellent: 25, good: 35, fair: 25, poor: 15 },
    { zone: "Mountain Pass", excellent: 35, good: 40, fair: 15, poor: 10 },
    { zone: "Industrial Rd", excellent: 20, good: 30, fair: 30, poor: 20 },
    { zone: "City Center", excellent: 50, good: 30, fair: 15, poor: 5 },
  ]

  const maintenanceEfficiency = [
    { month: "Jan", resolved: 245, pending: 45, avgTime: 2.3 },
    { month: "Feb", resolved: 289, pending: 52, avgTime: 2.1 },
    { month: "Mar", resolved: 312, pending: 38, avgTime: 1.9 },
    { month: "Apr", resolved: 334, pending: 41, avgTime: 1.8 },
    { month: "May", resolved: 378, pending: 35, avgTime: 1.6 },
    { month: "Jun", resolved: 402, pending: 29, avgTime: 1.5 },
  ]

  return (
    <main className="min-h-screen bg-background animate-fade-in">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Data-driven insights and performance metrics</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border border-border rounded-lg p-1">
              {["24h", "7d", "30d", "90d"].map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                  className="h-8 transition-all hover:scale-105"
                >
                  {range}
                </Button>
              ))}
            </div>
            <Button variant="outline" className="transition-transform hover:scale-105 bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button className="transition-transform hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 animate-scale-in">
          <Card className="transition-all hover:shadow-lg hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Total Detections</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stats.total.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-green-500 font-medium">+12.5%</span>
                <span className="text-muted-foreground">vs last period</span>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Critical Issues</span>
                <AlertCircle className="h-4 w-4 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stats.critical}</div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-destructive font-medium">+8.2%</span>
                <span className="text-muted-foreground">requires attention</span>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Resolution Rate</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stats.resolutionRate}%</div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-green-500 font-medium">+5.1%</span>
                <span className="text-muted-foreground">improvement</span>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Avg Response Time</span>
                <TrendingDown className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stats.avgTime}d</div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-green-500 font-medium">-18.9%</span>
                <span className="text-muted-foreground">faster</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Detection Trends</CardTitle>
              <CardDescription>Weekly issue identification by type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={detectionTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="potholes" stroke="hsl(var(--destructive))" strokeWidth={2} />
                  <Line type="monotone" dataKey="cracks" stroke="hsl(45, 93%, 47%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="damages" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Issue Severity Distribution</CardTitle>
              <CardDescription>Breakdown by priority level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={severityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {severityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Road Condition by Zone</CardTitle>
              <CardDescription>Quality assessment across monitored areas</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={roadCondition}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="zone" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="excellent" stackId="a" fill="hsl(142, 76%, 36%)" />
                  <Bar dataKey="good" stackId="a" fill="hsl(217, 91%, 60%)" />
                  <Bar dataKey="fair" stackId="a" fill="hsl(45, 93%, 47%)" />
                  <Bar dataKey="poor" stackId="a" fill="hsl(var(--destructive))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Maintenance Efficiency</CardTitle>
              <CardDescription>Resolution trends and response time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={maintenanceEfficiency}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="resolved" fill="hsl(142, 76%, 36%)" />
                  <Bar dataKey="pending" fill="hsl(45, 93%, 47%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
