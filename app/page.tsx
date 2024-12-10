import Camp from "@/app/components/Camp";
import Features from "@/app/components/Features";
import GetApp from "@/app/components/Contact";
import Guide from "@/app/components/Services";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <>
     <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}