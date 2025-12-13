"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  MapPin,
  Video,
  Camera,
  AlertTriangle,
  CheckCircle,
  Clock,
  Play,
  Pause,
  RefreshCw,
  Upload,
  X,
} from "lucide-react"
import { useState } from "react"

export default function MonitoringPage() {
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [selectedCamera, setSelectedCamera] = useState(1)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [addCameraOpen, setAddCameraOpen] = useState(false)
  const [mapOpen, setMapOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const cameras = [
    { id: 1, name: "Highway 101 - North", status: "active", issues: 3, location: "Mile 45.2" },
    { id: 2, name: "Main Street Bridge", status: "active", issues: 1, location: "Downtown" },
    { id: 3, name: "Industrial Road", status: "inactive", issues: 0, location: "West Zone" },
    { id: 4, name: "Coastal Highway", status: "active", issues: 5, location: "Mile 78.9" },
    { id: 5, name: "Mountain Pass Route", status: "active", issues: 2, location: "Elevation 2,400ft" },
    { id: 6, name: "City Center Loop", status: "inactive", issues: 0, location: "Central District" },
  ]

  const recentDetections = [
    { id: 1, type: "Pothole", severity: "High", location: "Highway 101 - Mile 45.2", time: "2 min ago", camera: 1 },
    { id: 2, type: "Crack", severity: "Medium", location: "Coastal Highway - Mile 78.5", time: "5 min ago", camera: 4 },
    {
      id: 3,
      type: "Pothole",
      severity: "Critical",
      location: "Coastal Highway - Mile 79.1",
      time: "8 min ago",
      camera: 4,
    },
    {
      id: 4,
      type: "Surface Damage",
      severity: "Low",
      location: "Mountain Pass - Elevation 2,400ft",
      time: "12 min ago",
      camera: 5,
    },
    { id: 5, type: "Crack", severity: "Medium", location: "Highway 101 - Mile 45.8", time: "15 min ago", camera: 1 },
  ]

  return (
    <main className="min-h-screen bg-background animate-fade-in">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Live Road Monitoring</h1>
            <p className="text-muted-foreground">Real-time analysis and detection from connected cameras</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="transition-transform hover:scale-110 bg-transparent">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`transition-all hover:scale-105 ${isMonitoring ? "bg-destructive hover:bg-destructive/90" : ""}`}
            >
              {isMonitoring ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Stop Monitoring
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start Monitoring
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="transition-all hover:shadow-lg animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Camera Feed - {cameras.find((c) => c.id === selectedCamera)?.name}</span>
                  <Badge variant={isMonitoring ? "default" : "secondary"}>{isMonitoring ? "Live" : "Paused"}</Badge>
                </CardTitle>
                <CardDescription>AI-powered real-time road condition analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                  <img
                    src="/highway-road-camera-view-with-monitoring-overlay.jpg"
                    alt="Camera feed"
                    className="w-full h-full object-cover"
                  />
                  {isMonitoring && (
                    <>
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-destructive/90 px-3 py-1.5 rounded-md animate-pulse">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                        </span>
                        <span className="text-xs font-medium text-white">RECORDING</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-3 rounded-md">
                        <div className="flex items-center justify-between text-white text-sm">
                          <span>AI Detection: Active</span>
                          <span>3 Issues Detected</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Card className="bg-card/50 transition-all hover:shadow-md hover:scale-105">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-foreground">12</div>
                      <div className="text-xs text-muted-foreground">Potholes</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 transition-all hover:shadow-md hover:scale-105">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-foreground">8</div>
                      <div className="text-xs text-muted-foreground">Cracks</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 transition-all hover:shadow-md hover:scale-105">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-foreground">3</div>
                      <div className="text-xs text-muted-foreground">Damages</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 transition-all hover:shadow-md hover:scale-105">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-foreground">98%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Recent Detections</CardTitle>
                <CardDescription>Latest road issues identified by AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentDetections.map((detection) => (
                    <div
                      key={detection.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedCamera(detection.camera)}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-md ${
                            detection.severity === "Critical"
                              ? "bg-destructive/20"
                              : detection.severity === "High"
                                ? "bg-orange-500/20"
                                : detection.severity === "Medium"
                                  ? "bg-yellow-500/20"
                                  : "bg-blue-500/20"
                          }`}
                        >
                          <AlertTriangle
                            className={`h-4 w-4 ${
                              detection.severity === "Critical"
                                ? "text-destructive"
                                : detection.severity === "High"
                                  ? "text-orange-500"
                                  : detection.severity === "Medium"
                                    ? "text-yellow-500"
                                    : "text-blue-500"
                            }`}
                          />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{detection.type}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            {detection.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            detection.severity === "Critical"
                              ? "destructive"
                              : detection.severity === "High"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {detection.severity}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {detection.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Camera Network</CardTitle>
                <CardDescription>Connected monitoring stations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {cameras.map((camera) => (
                    <button
                      key={camera.id}
                      onClick={() => setSelectedCamera(camera.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedCamera === camera.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:bg-accent/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Camera className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium text-sm text-foreground">{camera.name}</span>
                        </div>
                        {camera.status === "active" ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{camera.location}</span>
                        {camera.issues > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {camera.issues} issues
                          </Badge>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent transition-all hover:scale-105"
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Upload Video for Analysis
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Upload Video for Analysis</DialogTitle>
                      <DialogDescription>
                        Upload a road video to analyze for potholes, cracks, and other infrastructure issues.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="video-file">Video File</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="video-file"
                            type="file"
                            accept="video/*"
                            onChange={(e) => setSelectedFile(e.target.files?.[0]?.name || null)}
                            className="flex-1"
                          />
                          {selectedFile && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setSelectedFile(null)}
                              className="h-9 w-9"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="location">Location (Optional)</Label>
                        <Input id="location" placeholder="e.g., Highway 101, Mile 45" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description (Optional)</Label>
                        <Input id="description" placeholder="Add notes about this video..." />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setUploadOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setUploadOpen(false)}>
                        <Upload className="mr-2 h-4 w-4" />
                        Start Analysis
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog open={addCameraOpen} onOpenChange={setAddCameraOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent transition-all hover:scale-105"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Add New Camera
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Add New Camera</DialogTitle>
                      <DialogDescription>
                        Configure a new camera station to expand your monitoring network.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="camera-name">Camera Name</Label>
                        <Input id="camera-name" placeholder="e.g., Highway 101 - South" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="camera-location">Location</Label>
                        <Input id="camera-location" placeholder="e.g., Mile 52.3" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="camera-ip">Camera IP/Stream URL</Label>
                        <Input id="camera-ip" placeholder="rtsp://192.168.1.100:554/stream" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="camera-zone">Zone</Label>
                        <Input id="camera-zone" placeholder="e.g., North Zone" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setAddCameraOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setAddCameraOpen(false)}>
                        <Camera className="mr-2 h-4 w-4" />
                        Add Camera
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog open={mapOpen} onOpenChange={setMapOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent transition-all hover:scale-105"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle>Camera Network Map</DialogTitle>
                      <DialogDescription>
                        Interactive map showing all camera locations and detected issues.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                          <p className="text-sm text-muted-foreground">Map view with camera locations</p>
                          <p className="text-xs text-muted-foreground">6 active cameras • 11 issues detected</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-muted-foreground">Active (4)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                          <span className="text-muted-foreground">Warning (2)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="h-3 w-3 rounded-full bg-destructive"></div>
                          <span className="text-muted-foreground">Critical (1)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
                          <span className="text-muted-foreground">Inactive (2)</span>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={() => setMapOpen(false)}>Close</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
