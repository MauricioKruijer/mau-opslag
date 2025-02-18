import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ServiceModalContentProps {
  name: string
  description: string
  examples: string[]
}

export function ServiceModalContent({ name, description, examples }: ServiceModalContentProps) {
  return (
    <div className="space-y-4">
      <DialogHeader>
        <DialogTitle>{name}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <div className="space-y-2">
        <h4 className="font-medium">Voorbeelden van gebruik:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button asChild className="w-full">
          <a href="https://bunq.me/mauricio/1337" target="_blank" rel="noopener noreferrer">
            Huur nu!
          </a>
        </Button>
      </div>
    </div>
  )
}

