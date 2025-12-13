"use client"

import { Button } from "@/components/ui/button"
import { Menu, Bell, Settings, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SignInButton, useClerk, UserButton } from "@clerk/nextjs"

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { signOut, isSignedIn } = useClerk()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Left Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary-foreground"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-lg font-semibold">RoadPulse</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "/", label: "Dashboard" },
              { href: "/monitoring", label: "Monitoring" },
              { href: "/analytics", label: "Analytics" },
              { href: "/reports", label: "Reports" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex hover:scale-110"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:scale-110">
              <Bell className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/settings">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:scale-110">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>

          {/* Auth Buttons */}
          {isSignedIn ? (
            // <Button
            //   variant="ghost"
            //   className="hidden md:flex"
            //   onClick={() => signOut()}
            // >
            //   Sign Out
            // </Button>
            <UserButton afterSignOutUrl="/"/>
          ) : (
            <Link href="/sign-in">
              <div className="button bg-blue-500 p-4 rounded-md hover:bg-blue-700 transition-all cursor-pointer">
                <SignInButton/>
              </div>
            </Link>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

        </div>
      </div>
    </header>
  )
}
