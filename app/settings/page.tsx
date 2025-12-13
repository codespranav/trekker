"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { User, Bell, Shield, Database, Camera, Cpu, Save } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [detectionSensitivity, setDetectionSensitivity] = useState([75])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="mt-2 text-muted-foreground">Manage your RoadPulse system preferences and configurations</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="ai">AI Detection</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <CardTitle>Profile Settings</CardTitle>
                </div>
                <CardDescription>Manage your account and profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" defaultValue="Admin User" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@roadpulse.com"
                      defaultValue="admin@roadpulse.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select defaultValue="infrastructure">
                      <SelectTrigger id="department">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="monitoring">Monitoring</SelectItem>
                        <SelectItem value="analytics">Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="admin">
                      <SelectTrigger id="role">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="engineer">Engineer</SelectItem>
                        <SelectItem value="analyst">Analyst</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="ist">
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                      <SelectItem value="pst">PST (UTC-8:00)</SelectItem>
                      <SelectItem value="est">EST (UTC-5:00)</SelectItem>
                      <SelectItem value="gmt">GMT (UTC+0:00)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <CardTitle>Notification Preferences</CardTitle>
                </div>
                <CardDescription>Configure how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="critical-alerts">Critical Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts for critical road damage and emergencies
                      </p>
                    </div>
                    <Switch id="critical-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="maintenance-updates">Maintenance Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about scheduled and completed maintenance
                      </p>
                    </div>
                    <Switch id="maintenance-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weekly-reports">Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">Receive weekly summary reports via email</p>
                    </div>
                    <Switch id="weekly-reports" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="system-updates">System Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications about system updates and new features
                      </p>
                    </div>
                    <Switch id="system-updates" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive critical alerts via SMS</p>
                    </div>
                    <Switch id="sms-notifications" />
                  </div>
                </div>
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <CardTitle>Monitoring Configuration</CardTitle>
                </div>
                <CardDescription>Configure camera and monitoring system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="refresh-rate">Camera Refresh Rate</Label>
                    <Select defaultValue="5">
                      <SelectTrigger id="refresh-rate">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 second</SelectItem>
                        <SelectItem value="5">5 seconds</SelectItem>
                        <SelectItem value="10">10 seconds</SelectItem>
                        <SelectItem value="30">30 seconds</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-quality">Video Quality</Label>
                    <Select defaultValue="high">
                      <SelectTrigger id="video-quality">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low (480p)</SelectItem>
                        <SelectItem value="medium">Medium (720p)</SelectItem>
                        <SelectItem value="high">High (1080p)</SelectItem>
                        <SelectItem value="ultra">Ultra (4K)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-recording">Automatic Recording</Label>
                      <p className="text-sm text-muted-foreground">Automatically record when issues are detected</p>
                    </div>
                    <Switch id="auto-recording" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="night-vision">Night Vision Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable enhanced night vision capabilities</p>
                    </div>
                    <Switch id="night-vision" defaultChecked />
                  </div>
                </div>
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Configuration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <CardTitle>AI Detection Settings</CardTitle>
                </div>
                <CardDescription>Fine-tune AI detection parameters and thresholds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sensitivity">Detection Sensitivity</Label>
                      <Badge variant="secondary">{detectionSensitivity}%</Badge>
                    </div>
                    <Slider
                      id="sensitivity"
                      value={detectionSensitivity}
                      onValueChange={setDetectionSensitivity}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      Higher sensitivity detects more issues but may increase false positives
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ai-model">AI Model Version</Label>
                    <Select defaultValue="v2.5">
                      <SelectTrigger id="ai-model">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="v2.5">Version 2.5 (Latest)</SelectItem>
                        <SelectItem value="v2.0">Version 2.0</SelectItem>
                        <SelectItem value="v1.5">Version 1.5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="pothole-detection">Pothole Detection</Label>
                      <p className="text-sm text-muted-foreground">Enable AI-powered pothole identification</p>
                    </div>
                    <Switch id="pothole-detection" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="crack-detection">Crack Detection</Label>
                      <p className="text-sm text-muted-foreground">Enable detection of road surface cracks</p>
                    </div>
                    <Switch id="crack-detection" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="congestion-analysis">Congestion Analysis</Label>
                      <p className="text-sm text-muted-foreground">Analyze traffic patterns and congestion hotspots</p>
                    </div>
                    <Switch id="congestion-analysis" defaultChecked />
                  </div>
                </div>
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save AI Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle>Security Settings</CardTitle>
                </div>
                <CardDescription>Manage security and access control settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" placeholder="Enter current password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" placeholder="Enter new password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                  </div>
                  <Button variant="outline" className="w-full md:w-auto bg-transparent">
                    Change Password
                  </Button>
                </div>
                <div className="space-y-4 border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Auto Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Automatically log out after period of inactivity</p>
                    </div>
                    <Switch id="session-timeout" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <CardTitle>Data Management</CardTitle>
                </div>
                <CardDescription>Manage data storage, retention, and export settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="retention">Data Retention Period</Label>
                    <Select defaultValue="90">
                      <SelectTrigger id="retention">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-backup">Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">Automatically backup data daily</p>
                    </div>
                    <Switch id="auto-backup" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="cloud-sync">Cloud Synchronization</Label>
                      <p className="text-sm text-muted-foreground">Sync data with cloud storage</p>
                    </div>
                    <Switch id="cloud-sync" defaultChecked />
                  </div>
                </div>
                <div className="space-y-4 border-t pt-6">
                  <h4 className="font-semibold">Data Export</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    <Button variant="outline">Export Reports</Button>
                    <Button variant="outline">Export Analytics</Button>
                    <Button variant="outline">Export Camera Data</Button>
                    <Button variant="outline">Export All Data</Button>
                  </div>
                </div>
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Data Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
