"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, AlertTriangle, CheckCircle2, Info, XCircle, Clock, Settings } from "lucide-react"
import { useState } from "react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "critical",
      title: "Critical Road Damage Detected",
      message: "Severe pothole detected on NH-44, KM 235. Immediate action required.",
      time: "2 minutes ago",
      read: false,
      icon: AlertTriangle,
    },
    {
      id: 2,
      type: "warning",
      title: "Maintenance Schedule Updated",
      message: "Road maintenance for MG Road has been rescheduled to next Monday.",
      time: "15 minutes ago",
      read: false,
      icon: Clock,
    },
    {
      id: 3,
      type: "success",
      title: "Repair Work Completed",
      message: "Pothole repair on Brigade Road has been successfully completed and verified.",
      time: "1 hour ago",
      read: true,
      icon: CheckCircle2,
    },
    {
      id: 4,
      type: "info",
      title: "Weekly Report Generated",
      message: "Your weekly road infrastructure report is ready for review.",
      time: "2 hours ago",
      read: true,
      icon: Info,
    },
    {
      id: 5,
      type: "critical",
      title: "Accident-Prone Zone Alert",
      message: "Multiple incidents reported at Airport Road junction in the past 48 hours.",
      time: "3 hours ago",
      read: true,
      icon: XCircle,
    },
    {
      id: 6,
      type: "warning",
      title: "Camera Offline",
      message: "Camera CAM-023 on Outer Ring Road has gone offline. Check connection.",
      time: "5 hours ago",
      read: true,
      icon: AlertTriangle,
    },
    {
      id: 7,
      type: "info",
      title: "System Update",
      message: "AI detection model has been updated to version 2.5 with improved accuracy.",
      time: "1 day ago",
      read: true,
      icon: Info,
    },
    {
      id: 8,
      type: "success",
      title: "Quality Check Passed",
      message: "Newly constructed bypass road has passed all quality inspections.",
      time: "1 day ago",
      read: true,
      icon: CheckCircle2,
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case "critical":
        return "border-l-4 border-l-red-500 bg-red-500/5"
      case "warning":
        return "border-l-4 border-l-yellow-500 bg-yellow-500/5"
      case "success":
        return "border-l-4 border-l-green-500 bg-green-500/5"
      default:
        return "border-l-4 border-l-blue-500 bg-blue-500/5"
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "critical":
        return "text-red-500"
      case "warning":
        return "text-yellow-500"
      case "success":
        return "text-green-500"
      default:
        return "text-blue-500"
    }
  }

  const filterNotifications = (filter: string) => {
    if (filter === "all") return notifications
    if (filter === "unread") return notifications.filter((n) => !n.read)
    return notifications.filter((n) => n.type === filter)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
            <p className="mt-2 text-muted-foreground">
              Stay updated with all your road infrastructure alerts and updates
            </p>
          </div>
          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <Button onClick={markAllAsRead} variant="outline">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Mark All as Read
              </Button>
            )}
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <Badge variant="secondary">{notifications.length}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Unread</span>
                <Badge variant="default">{unreadCount}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Critical</span>
                <Badge variant="destructive">{notifications.filter((n) => n.type === "critical").length}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Warnings</span>
                <Badge className="bg-yellow-500">{notifications.filter((n) => n.type === "warning").length}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">All Notifications</CardTitle>
              <CardDescription>View and manage your notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                  <TabsTrigger value="critical">Critical</TabsTrigger>
                  <TabsTrigger value="warning">Warnings</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>

                {["all", "unread", "critical", "warning", "info"].map((filter) => (
                  <TabsContent key={filter} value={filter} className="space-y-4">
                    {filterNotifications(filter).length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Bell className="mb-4 h-12 w-12 text-muted-foreground/50" />
                        <p className="text-muted-foreground">No notifications in this category</p>
                      </div>
                    ) : (
                      filterNotifications(filter).map((notification) => {
                        const Icon = notification.icon
                        return (
                          <div
                            key={notification.id}
                            className={`rounded-lg p-4 transition-all hover:shadow-md ${getNotificationStyle(
                              notification.type,
                            )} ${notification.read ? "opacity-60" : ""}`}
                          >
                            <div className="flex items-start gap-4">
                              <div className={`mt-1 rounded-full bg-background p-2 ${getIconColor(notification.type)}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <div className="mb-1 flex items-start justify-between">
                                  <h3 className="font-semibold text-foreground">{notification.title}</h3>
                                  {!notification.read && (
                                    <Badge variant="default" className="ml-2">
                                      New
                                    </Badge>
                                  )}
                                </div>
                                <p className="mb-2 text-sm text-muted-foreground">{notification.message}</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                                  <div className="flex gap-2">
                                    {!notification.read && (
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => markAsRead(notification.id)}
                                        className="h-8 text-xs"
                                      >
                                        Mark as Read
                                      </Button>
                                    )}
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => deleteNotification(notification.id)}
                                      className="h-8 text-xs text-destructive hover:text-destructive"
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
