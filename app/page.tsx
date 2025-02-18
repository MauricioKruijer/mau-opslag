import { Header } from "@/components/header"
import { ServicesGrid } from "@/components/services-grid"

export default function Home() {
  return (
    <main>
      <Header />
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-3xl font-bold text-primary md:text-4xl">KIES JOUW OPSLAG EN BEREKEN JE PRIJS</h1>
        <ServicesGrid />
      </section>
    </main>
  )
}

