"use client"

import { useState } from "react"
import { Archive, Car, CircleDollarSign, MailboxIcon as MailBox, Warehouse } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ServiceModalContent } from "@/components/service-modal-content"

const services = [
  {
    name: "OPSLAGRUIMTE",
    href: "#",
    icon: Warehouse,
    description: "Veilige en flexibele opslagruimte voor al uw spullen.",
    examples: [
      "Seizoensgebonden items zoals kerstversiering of tuinmeubelen",
      "Tijdens een verhuizing of renovatie",
      "Bedrijfsinventaris of archieven",
      "Persoonlijke bezittingen die u niet dagelijks nodig heeft",
    ],
  },
  {
    name: "VOERTUIGOPSLAG",
    href: "#",
    icon: Car,
    description: "Beschermde opslag voor uw voertuigen, van auto's tot boten.",
    examples: [
      "Winterstalling voor caravans of campers",
      "Klassieke auto's die niet dagelijks worden gebruikt",
      "Motorfietsen buiten het seizoen",
      "Bedrijfsvoertuigen die tijdelijk niet nodig zijn",
    ],
  },
  {
    name: "BANDENOPSLAG",
    href: "#",
    icon: CircleDollarSign,
    description: "Professionele opslag voor uw banden in optimale omstandigheden.",
    examples: [
      "Winterbanden tijdens de zomermaanden",
      "Zomerbanden tijdens de winterperiode",
      "Reservebanden voor bedrijfsvoertuigen",
      "Speciale banden voor racewagens of oldtimers",
    ],
  },
  {
    name: "ARCHIEFOPSLAG",
    href: "#",
    icon: Archive,
    description: "Veilige en georganiseerde opslag voor uw belangrijke documenten.",
    examples: [
      "Bedrijfsadministratie en financiële documenten",
      "Medische dossiers",
      "Juridische documenten en contracten",
      "Historische archieven of onderzoeksgegevens",
    ],
  },
  {
    name: "POSTBUS HUUR",
    href: "#",
    icon: MailBox,
    description: "Een professioneel postadres voor uw bedrijf of persoonlijk gebruik.",
    examples: [
      "Voor startende ondernemers zonder vast kantoor",
      "Als discreet afleveradres voor online bestellingen",
      "Voor expats of mensen die vaak verhuizen",
      "Als centraal punt voor bedrijven met meerdere vestigingen",
    ],
  },
]

export function ServicesGrid() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Dialog
          key={service.name}
          open={openModal === service.name}
          onOpenChange={(open) => setOpenModal(open ? service.name : null)}
        >
          <DialogTrigger asChild>
            <button className="group relative flex flex-col items-center justify-center rounded-lg bg-muted p-6 transition-colors hover:bg-secondary/20">
              <div className="mb-4 rounded-full bg-secondary p-4">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-primary">{service.name}</h2>
              <div className="absolute right-4 top-4 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                →
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <ServiceModalContent name={service.name} description={service.description} examples={service.examples} />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

