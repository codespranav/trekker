"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Camera as CameraIcon,
  Play,
  Pause,
  RefreshCw,
  AlertTriangle,
  Clock,
  CheckCircle,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

/* ---------------- CAMERA CAPTURE DIALOG ---------------- */

function CameraCaptureDialog({
  open,
  onOpenChange,
  img,
  setImg,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  img: string | null
  setImg: (v: string | null) => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [err, setErr] = useState("")

  useEffect(() => {
    if (!open) return stopCamera()

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: { ideal: "environment" } } })
      .then(stream => {
        if (videoRef.current) videoRef.current.srcObject = stream
      })
      .catch(() => setErr("Camera permission denied"))

    return stopCamera
  }, [open])

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream
    stream?.getTracks().forEach(t => t.stop())
  }

  const capture = () => {
    const v = videoRef.current!
    const c = canvasRef.current!
    c.width = v.videoWidth
    c.height = v.videoHeight
    c.getContext("2d")?.drawImage(v, 0, 0)

    const imageData = c.toDataURL("image/jpeg", 0.9)
    setImg(imageData)
    stopCamera()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Capture Road Image</DialogTitle>
        </DialogHeader>

        <div className="aspect-video bg-muted rounded overflow-hidden flex items-center justify-center">
          {err ? (
            err
          ) : img ? (
            <img src={img} className="w-full h-full object-cover" />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          <canvas ref={canvasRef} hidden />
        </div>

        <div className="flex justify-center gap-3 mt-4">
          {!img ? (
            <Button onClick={capture}>
              <CameraIcon className="mr-2 h-4 w-4" />
              Capture
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => setImg(null)}>
                Retake
              </Button>
              <Button onClick={() => onOpenChange(false)}>Use Image</Button>
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
  const [capturedImg, setCapturedImg] = useState<string | null>(null)

  const [analysisResult, setAnalysisResult] = useState<{
    label: string
    confidence: number
  } | null>(null)

  const [loading, setLoading] = useState(false)

  const cameras = [
    { id: 1, name: "Highway 101", status: "active" },
    { id: 2, name: "City Bridge", status: "inactive" },
    { id: 3, name: "Coastal Road", status: "active" },
  ]

  /* ---------- ROBOFLOW ANALYSIS ---------- */
  const analyzeImage = async () => {
    if (!capturedImg) return

    try {
      setLoading(true)

      const res = await fetch("/api/analyze-road", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: capturedImg }),
      })

      const data = await res.json()

      const classification = data?.outputs?.[0]?.classification

      if (!classification) {
        setAnalysisResult({
          label: "Unknown",
          confidence: 0,
        })
        return
      }

      setAnalysisResult({
        label: classification.top,
        confidence: classification.confidence,
      })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Live Road Monitoring</h1>
            <p className="text-muted-foreground">
              AI based road condition detection
            </p>
          </div>

          <Button onClick={() => setMonitoring(!monitoring)}>
            {monitoring ? <Pause /> : <Play />}
            {monitoring ? "Stop" : "Start"}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Camera Feed</CardTitle>
            <CardDescription>
              Selected Camera:{" "}
              {cameras.find(c => c.id === selectedCamera)?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded flex items-center justify-center">
              {capturedImg ? (
                <img
                  src={capturedImg}
                  className="w-full h-full object-cover"
                />
              ) : (
                "No image captured"
              )}
            </div>
          </CardContent>
        </Card>

        {capturedImg && (
          <Card>
            <CardHeader>
              <CardTitle>Analyze Result</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={analyzeImage} disabled={loading}>
                {loading ? "Analyzing..." : "Analyze Road"}
              </Button>

              {analysisResult && (
                <div>
                  {analysisResult.label === "No Crack" ? (
                    <Badge className="bg-green-600">
                      ✅ Road OK (
                      {Math.round(analysisResult.confidence * 100)}%)
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      ❌ Damage: {analysisResult.label} (
                      {Math.round(analysisResult.confidence * 100)}%)
                    </Badge>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <Button
          variant="outline"
          onClick={() => setCameraDialog(true)}
        >
          <CameraIcon className="mr-2 h-4 w-4" />
          Capture Road Image
        </Button>
      </div>

      <CameraCaptureDialog
        open={cameraDialog}
        onOpenChange={setCameraDialog}
        img={capturedImg}
        setImg={setCapturedImg}
      />
    </main>
  )
}
