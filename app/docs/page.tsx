"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Book,
  Shield,
  ArrowLeft,
  Layers,
  Users,
  FileCode,
  Terminal,
  Lock,
  Key,
  Zap,
  CreditCard,
} from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
    content: `Poolix Protocol is a research collective experimenting around terminals, identity, and how we interact with AI systems through raw interfaces.

We build privacy-first infrastructure on Solana using zero-knowledge proofs and the x402 payment protocol. Our mission is to create the convergence point where humans and AI can communicate directly—without corporate wrappers or sanitized UIs.

Through the use of ZK cryptography, Solana's speed, and machine-native protocols, Poolix Protocol is designing for a future where AI agents are first-class citizens in the financial system.

Our vision is simple: Convergent interfaces. Pure identity. AI systems that respect privacy by default.`,
  },
  {
    id: "zk-proofs",
    title: "Zero-Knowledge Proofs",
    icon: Lock,
    content: `Poolix Protocol uses zk-SNARK circuits to enforce transaction correctness while keeping all sensitive details hidden within cryptographic proofs.

WHAT ZK PROOFS HIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Transaction amounts
▸ Sender identity
▸ Receiver identity  
▸ Metadata and behavioral patterns

WHAT ZK PROOFS VERIFY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Spending key ownership
▸ Non-negative amounts and balance conservation
▸ Merkle tree membership of notes
▸ Creation of new valid commitments

All while maintaining cryptographic integrity and double-spend protection on Solana.`,
  },
  {
    id: "solana",
    title: "Solana Integration",
    icon: Zap,
    content: `Poolix Protocol is built natively on Solana for its unmatched speed and low costs.

WHY SOLANA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ 65,000 TPS - High throughput for real-time privacy operations
▸ 400ms Finality - Near-instant confirmation
▸ $0.00025 Fees - Negligible costs enable micropayments
▸ Parallel Execution - Efficient ZK verification

OUR TECH STACK:
┌─────────────────┬──────────────────────────────────────────────┐
│ Anchor Framework│ Smart contract development                   │
│ Light Protocol  │ ZK compression layer                         │
│ Helius RPC      │ Enhanced node infrastructure                 │
│ Metaplex        │ NFT & Token standards                        │
└─────────────────┴──────────────────────────────────────────────┘`,
  },
  {
    id: "x402-protocol",
    title: "x402 Protocol",
    icon: CreditCard,
    content: `The x402 protocol brings HTTP 402 (Payment Required) to life for machine-to-machine payments.

HOW IT WORKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[01] REQUEST
     Client requests a resource from the server

[02] 402 RESPONSE
     Server returns payment details and requirements

[03] ZK PAYMENT
     Client sends shielded payment via Solana

[04] ACCESS GRANTED
     Resource unlocked after payment verification

USE CASES:
▸ AI API Calls - Pay-per-inference for AI models
▸ Data Feeds - Subscribe to real-time data streams
▸ Compute Resources - On-demand cloud compute
▸ Content Access - Micropayments for premium content
▸ IoT Devices - Machine-to-machine transactions`,
  },
  {
    id: "architecture",
    title: "System Architecture",
    icon: Layers,
    content: `Poolix Protocol consists of modular components working together.

PRIVACY LAYER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ZK circuits and shielded pools for private transactions. Uses nullifiers to prevent double-spending without revealing identities.

IDENTITY LAYER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Multiple key roles:
▸ Spend Key – authorizes private transfers
▸ View Key – reveals transactional details selectively
▸ Audit Key (optional) – enables regulated disclosures

PAYMENT LAYER (x402)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HTTP-native payment protocol for AI agents and services.

TERMINAL LAYER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Raw interface for direct interaction with the protocol.`,
  },
  {
    id: "identity",
    title: "Identity & Keys",
    icon: Key,
    content: `Poolix Protocol uses a flexible address model for privacy and selective transparency.

KEY TYPES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SPEND KEY
The master key that authorizes private transfers. Keep this secret.

VIEW KEY
Derived from spend key. Allows read-only access to transaction history.

AUDIT KEY (Optional)
Special key for regulated entities. Enables compliance without compromising privacy.

IDENTITY MODES:
▸ Converge Mode - Fully anonymous, default
▸ Verified Mode - Selective disclosure
▸ Public Mode - Transparent operations`,
  },
  {
    id: "security",
    title: "Security Philosophy",
    icon: Shield,
    content: `Security and privacy are non-negotiable at Poolix Protocol.

CORE PRINCIPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Trust Minimization - Every component minimizes trust assumptions
▸ Censorship Resistance - Transactions cannot be blocked
▸ Cryptographic Rigor - Battle-tested, verified primitives
▸ Privacy by Default - No opt-in required

WHAT WE PROTECT AGAINST:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Metadata correlation attacks
▸ Cross-chain linking attempts
▸ Timing analysis
▸ Identity exposure`,
  },
  {
    id: "developer-sdk",
    title: "Developer SDK",
    icon: FileCode,
    content: `Build privacy-preserving applications with our SDK.

INSTALLATION:
\`\`\`bash
npm install @poolix/core @poolix/x402 @poolix/sdk
\`\`\`

BASIC USAGE:
\`\`\`typescript
import { PoolixClient, ZkProof, x402 } from '@poolix/sdk';

// Initialize client
const poolix = new PoolixClient({ network: 'mainnet' });

// Create shielded transfer
const transfer = await poolix.createShieldedTransfer({
  amount: 'encrypted',
  recipient: 'shielded_address',
  proof: ZkProof.generate(),
});

// x402 payment
await x402.pay(serviceEndpoint, {
  amount: 0.001,
  proof: ZkProof.generate()
});
\`\`\`

AVAILABLE PACKAGES:
▸ @poolix/core - Core privacy primitives
▸ @poolix/x402 - x402 payment protocol
▸ @poolix/sdk - High-level developer SDK
▸ @poolix/terminal - Terminal UI components`,
  },
  {
    id: "terminal-guide",
    title: "Terminal Guide",
    icon: Terminal,
    content: `The Poolix Terminal is a raw interface for direct protocol interaction.

AVAILABLE COMMANDS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ help          - Display available commands
▸ about         - About Poolix Protocol
▸ zk            - Zero-Knowledge Proofs info
▸ solana        - Solana integration details
▸ x402          - x402 protocol documentation
▸ identity      - Identity system overview
▸ converge      - Enter convergence mode
▸ status        - Network status
▸ clear         - Clear terminal

ACCESS:
Visit /terminal to launch the interactive terminal.`,
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    content: `Poolix Protocol is built by the community, for the community.

OFFICIAL CHANNELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ X (Twitter):  https://x.com/PoolixPro

PROGRAMS:
▸ Developer grants for privacy applications
▸ Security researcher bounties
▸ Open source contributions welcome

Privacy is a fundamental right. Join the convergence.`,
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(sections[0])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="glass-card border-b border-[#00FFFF]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>
            <div className="w-px h-6 bg-[#00FFFF]/30" />
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="w-full h-full rounded-lg overflow-hidden bg-black border border-white/20 p-0.5">
                  <Image src="/images/poolix-logo.png" alt="Poolix Protocol" fill className="object-contain" />
                </div>
              </div>
              <span className="font-bold text-white">
                Poolix<span className="text-[#00FFFF]"> Docs</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/terminal"
              className="px-4 py-2 rounded-lg glass-card neon-border text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              Terminal
            </Link>
            <Link
              href="https://x.com/PoolixPro"
              target="_blank"
              className="px-4 py-2 rounded-lg glass-card neon-border text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <nav className="terminal-card rounded-xl p-4 neon-border">
              <h3 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4 px-3">Documentation</h3>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 ${
                        activeSection.id === section.id
                          ? "bg-[#00FFFF]/20 text-white neon-border"
                          : "text-white/50 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <section.icon className="w-5 h-5 text-[#00FFFF]" />
                      <span className="text-sm font-mono">{section.title}</span>
                      {activeSection.id === section.id && <ChevronRight className="w-4 h-4 ml-auto text-[#00FFFF]" />}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="terminal-card rounded-xl p-8 lg:p-12 neon-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#00FFFF]/20 flex items-center justify-center">
                <activeSection.icon className="w-7 h-7 text-[#00FFFF]" />
              </div>
              <h1 className="text-3xl font-bold text-white">{activeSection.title}</h1>
            </div>
            <div className="prose prose-invert max-w-none">
              {activeSection.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-white/60 leading-relaxed mb-4 whitespace-pre-wrap font-mono text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
