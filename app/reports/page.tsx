"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Download,
  Eye,
  Calendar,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
  Search,
} from "lucide-react"
import { useState } from "react"

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<number | null>(null)

  const reports = [
    {
      id: 1,
      title: "Highway 101 Monthly Infrastructure Assessment",
      type: "Infrastructure",
      date: "2024-01-15",
      location: "Highway 101 - North Sector",
      status: "completed",
      issues: 45,
      priority: "High",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "Coastal Highway Pothole Detection Report",
      type: "Pothole Analysis",
      date: "2024-01-14",
      location: "Coastal Highway",
      status: "completed",
      issues: 78,
      priority: "Critical",
      size: "3.1 MB",
    },
    {
      id: 3,
      title: "City Center Road Quality Inspection",
      type: "Quality Inspection",
      date: "2024-01-13",
      location: "City Center Loop",
      status: "completed",
      issues: 12,
      priority: "Low",
      size: "1.8 MB",
    },
    {
      id: 4,
      title: "Mountain Pass Accident-Prone Zone Analysis",
      type: "Safety Analysis",
      date: "2024-01-12",
      location: "Mountain Pass Route",
      status: "in-progress",
      issues: 23,
      priority: "High",
      size: "2.9 MB",
    },
    {
      id: 5,
      title: "Industrial Road Maintenance Report Q1 2024",
      type: "Maintenance",
      date: "2024-01-10",
      location: "Industrial Road - West Zone",
      status: "completed",
      issues: 34,
      priority: "Medium",
      size: "4.2 MB",
    },
    {
      id: 6,
      title: "Weekly Detection Summary - All Zones",
      type: "Summary",
      date: "2024-01-08",
      location: "All Monitored Areas",
      status: "completed",
      issues: 156,
      priority: "Medium",
      size: "5.6 MB",
    },
  ]

  const recentActivity = [
    { action: "Report Generated", report: "Highway 101 Monthly Assessment", time: "2 hours ago", user: "System" },
    { action: "Report Downloaded", report: "Coastal Highway Analysis", time: "5 hours ago", user: "John Doe" },
    { action: "Report Viewed", report: "City Center Inspection", time: "1 day ago", user: "Jane Smith" },
    { action: "Report Shared", report: "Mountain Pass Analysis", time: "2 days ago", user: "Admin" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Documentation</h1>
            <p className="text-muted-foreground">Generate and manage infrastructure assessment reports</p>
          </div>
          <Button size="lg">
            <FileText className="mr-2 h-4 w-4" />
            Generate New Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">48</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">3</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">45</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Download className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">124</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Reports</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                        selectedReport === report.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-accent/50"
                      }`}
                      onClick={() => setSelectedReport(report.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {report.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {report.location}
                            </span>
                          </div>
                        </div>
                        <Badge
                          variant={
                            report.status === "completed"
                              ? "default"
                              : report.status === "in-progress"
                                ? "secondary"
                                : "outline"
                          }
                          className="ml-2"
                        >
                          {report.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <AlertTriangle
                              className={`h-4 w-4 ${
                                report.priority === "Critical"
                                  ? "text-destructive"
                                  : report.priority === "High"
                                    ? "text-orange-500"
                                    : report.priority === "Medium"
                                      ? "text-yellow-500"
                                      : "text-blue-500"
                              }`}
                            />
                            <span className="text-sm font-medium text-foreground">{report.issues} issues</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {report.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{report.size}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Generate</CardTitle>
                <CardDescription>Create reports by category</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <AlertTriangle className="mr-2 h-4 w-4 text-destructive" />
                  Critical Issues Report
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  Location-Based Report
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                  Monthly Summary
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Maintenance Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest report actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground truncate">{activity.report}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{activity.user}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export as PDF
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export as Excel
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export as CSV
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
