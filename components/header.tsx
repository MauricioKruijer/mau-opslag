"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AppointmentForm } from "@/components/appointment-form"

const navigation = [
  { name: "KIES EEN VESTIGING", href: "#" },
  { name: "PARTICULIERE OPSLAG", href: "#" },
  { name: "ZAKELIJKE OPSLAG", href: "#" },
  { name: "OVER MAUSAFE", href: "#" },
]

export function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40' fill='none'%3E%3Cpath d='M10 20L20 10l10 10v20H10V20z' fill='%23FFD700' stroke='%23003366' stroke-width='2'/%3E%3Cpath d='M30 20h20v20H30z' fill='%23FFD700' stroke='%23003366' stroke-width='2'/%3E%3Cpath d='M35 30h10v10H35z' fill='%23003366'/%3E%3Cpath d='M60 15h55v5H60zM60 25h40v5H60z' fill='%23003366'/%3E%3C/svg%3E"
              alt="MAUSAFE Logo - House with Garage"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 lg:flex">
            <span className="text-xs font-medium text-secondary">BEL GRATIS</span>
            <a href="tel:0800-MAU-VIES" className="flex items-center gap-2 text-lg font-bold text-primary-foreground">
              <Phone className="h-4 w-4" />
              0800 - MAU VI ES
            </a>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" className="hidden font-medium lg:inline-flex">
                MAAK EEN AFSPRAAK
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Maak een afspraak</DialogTitle>
                <DialogDescription>
                  Vul het formulier in om een afspraak te maken. We nemen zo snel mogelijk contact met u op.
                </DialogDescription>
              </DialogHeader>
              <AppointmentForm />
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-auto"
                >
                  <rect width="30" height="20" fill="#21468B" />
                  <rect width="30" height="13.33" fill="#FFFFFF" />
                  <rect width="30" height="6.67" fill="#AE1C28" />
                </svg>
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-6"
                >
                  <rect width="30" height="20" fill="#21468B" />
                  <rect width="30" height="13.33" fill="#FFFFFF" />
                  <rect width="30" height="6.67" fill="#AE1C28" />
                </svg>
                Nederlands
              </DropdownMenuItem>
              <DropdownMenuItem>
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-6"
                >
                  <rect width="30" height="6.67" fill="#00732F" />
                  <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
                  <rect y="13.33" width="30" height="6.67" fill="#000000" />
                  <rect width="10" height="20" fill="#FF0000" />
                </svg>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}

