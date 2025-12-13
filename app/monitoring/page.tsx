"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Camera,
  Camera as CameraIcon,
  Play,
  Pause,
  RefreshCw,
  AlertTriangle,
  Clock,
  CheckCircle,
  MapPin,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

/* ---------------- CAMERA CAPTURE DIALOG ---------------- */

const CameraCaptureDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [img, setImg] = useState<string | null>(null)
  const [err, setErr] = useState("")

  useEffect(() => {
    if (!open) return stop()
    navigator.mediaDevices
      ?.getUserMedia({ video: { facingMode: "environment" } })
      .then(s => videoRef.current && (videoRef.current.srcObject = s))
      .catch(() => setErr("Camera permission denied"))
    return stop
  }, [open])

  const stop = () => {
    const s = videoRef.current?.srcObject as MediaStream
    s?.getTracks().forEach(t => t.stop())
  }

  const capture = () => {
    const v = videoRef.current!, c = canvasRef.current!
    c.width = v.videoWidth
    c.height = v.videoHeight
    c.getContext("2d")?.drawImage(v, 0, 0)
    setImg(c.toDataURL("image/jpeg", 0.9))
    stop()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Capture Road Image</DialogTitle>
        </DialogHeader>

        <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
          {err ? err : img ? (
            <img src={img} className="w-full h-full object-cover" />
          ) : (
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
          )}
          <canvas ref={canvasRef} hidden />
        </div>

        <div className="flex justify-center gap-3 mt-4">
          {!img ? (
            <Button onClick={capture}>
              <CameraIcon className="mr-2 h-4 w-4" /> Capture
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => setImg(null)}>Retake</Button>
              <Button onClick={() => onOpenChange(false)}>Upload</Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

/* ---------------- MAIN PAGE ---------------- */

export default function MonitoringPage() {
  const [monitoring, setMonitoring] = useState(false)
  const [cameraDialog, setCameraDialog] = useState(false)
  const [selectedCamera, setSelectedCamera] = useState(1)

  const cameras = [
    { id: 1, name: "Highway 101", status: "active", issues: 3 },
    { id: 2, name: "City Bridge", status: "inactive", issues: 0 },
    { id: 3, name: "Coastal Road", status: "active", issues: 5 },
  ]

  const detections = [
    { id: 1, type: "Pothole", severity: "High", time: "2 min ago", cam: 1 },
    { id: 2, type: "Crack", severity: "Medium", time: "5 min ago", cam: 3 },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Live Road Monitoring</h1>
            <p className="text-muted-foreground">AI based road condition detection</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>

            <Button
              onClick={() => setMonitoring(!monitoring)}
              className={monitoring ? "bg-destructive" : ""}
            >
              {monitoring ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {monitoring ? "Stop" : "Start"}
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* FEED */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex justify-between">
                Camera Feed
                <Badge>{monitoring ? "LIVE" : "PAUSED"}</Badge>
              </CardTitle>
              <CardDescription>Selected Camera: {cameras.find(c => c.id === selectedCamera)?.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg" />
            </CardContent>
          </Card>

          {/* SIDE */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Cameras</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {cameras.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCamera(c.id)}
                    className="w-full p-2 border rounded flex justify-between"
                  >
                    {c.name}
                    {c.status === "active" ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Action</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setCameraDialog(true)}
                >
                  <CameraIcon className="mr-2 h-4 w-4" />
                  Capture Road Image
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* RECENT */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Detections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {detections.map(d => (
              <div key={d.id} className="flex justify-between border p-2 rounded">
                <div className="flex gap-2 items-center">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  {d.type}
                </div>
                <span className="text-xs text-muted-foreground">{d.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <CameraCaptureDialog open={cameraDialog} onOpenChange={setCameraDialog} />
    </main>
  )
}
