import { Places } from "@/components/home/Places/Places";
import { ContactForm } from "@/components/home/ContactForm/ContactForm";
import { ComingPlaces } from "@/components/home/ComingPlaces/ComingPlaces";

export const metadata = {
  title: "Ingenia",
  description: "Generated by Ingenia",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Places />
      <ContactForm />
      <ComingPlaces />
    </main>
  )
}
