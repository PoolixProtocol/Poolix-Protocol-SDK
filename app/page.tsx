import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { ZkPrivacySection } from "@/components/zk-privacy-section"
import { SolanaSection } from "@/components/solana-section"
import { X402Section } from "@/components/x402-section"
import { TerminalSection } from "@/components/terminal-section"
import { IdentitySection } from "@/components/identity-section"
import { AIInterfaceSection } from "@/components/ai-interface-section"
import { ExperimentsSection } from "@/components/experiments-section"
import { VisionSection } from "@/components/vision-section"
import { LabSection } from "@/components/lab-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { GridBackground } from "@/components/grid-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <GridBackground />
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <ZkPrivacySection />
      <SolanaSection />
      <X402Section />
      <ManifestoSection />
      <TerminalSection />
      <IdentitySection />
      <AIInterfaceSection />
      <ExperimentsSection />
      <VisionSection />
      <LabSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
