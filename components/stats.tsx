import { Card } from "@/components/ui/card"

export function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Roads Monitored",
      description: "Active surveillance across regions",
    },
    {
      value: "98.5%",
      label: "Detection Accuracy",
      description: "AI-powered pothole identification",
    },
    {
      value: "60%",
      label: "Faster Response",
      description: "Reduced maintenance cycle time",
    },
    {
      value: "24/7",
      label: "Real-time Monitoring",
      description: "Continuous infrastructure tracking",
    },
  ]

  return (
    <section className="border-b border-border bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
