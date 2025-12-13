import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Dashboard } from "@/components/dashboard"
import { Stats } from "@/components/stats"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Dashboard />
    </main>
  )
}
