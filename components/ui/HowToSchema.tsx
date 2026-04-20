import { howToSchema } from "@/lib/schema"

interface Step {
  title: string
  description: string
}

interface HowToSchemaProps {
  name: string
  steps: Step[]
}

export default function HowToSchemaInjector({ name, steps }: HowToSchemaProps) {
  const schema = howToSchema(name, steps)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
