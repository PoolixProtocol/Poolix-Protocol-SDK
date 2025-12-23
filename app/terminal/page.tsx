"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Book } from "lucide-react"

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "info" | "privacy"
  content: string
}

const commands: Record<string, string> = {
  help: `
╔══════════════════════════════════════════════════════════════════╗
║               POOLIX PROTOCOL TERMINAL v2.0                      ║
╠══════════════════════════════════════════════════════════════════╣
║  CORE COMMANDS                                                   ║
║  ────────────────────────────────────────────────────────────── ║
║  help          - Display this help                              ║
║  about         - What is Poolix Protocol?                       ║
║  vision        - Our vision for convergent interfaces           ║
║  zk            - Zero-Knowledge Proofs                          ║
║  solana        - Solana integration details                     ║
║  x402          - x402 payment protocol                          ║
║  identity      - Identity system overview                       ║
║  terminal      - About the terminal interface                   ║
║  roadmap       - Development roadmap                            ║
║  social        - Official channels                              ║
║  ────────────────────────────────────────────────────────────── ║
║  UTILITY COMMANDS                                                ║
║  ────────────────────────────────────────────────────────────── ║
║  clear         - Clear terminal                                 ║
║  version       - Version info                                   ║
║  status        - Network status                                 ║
║  converge      - Enter convergence mode                         ║
╚══════════════════════════════════════════════════════════════════╝`,
  about: `
┌─────────────────────────────────────────────────────────────────┐
│                    ABOUT POOLIX PROTOCOL                        │
└─────────────────────────────────────────────────────────────────┘

Poolix Protocol is a research collective experimenting around
terminals, identity, and how we interact with AI systems through
raw interfaces.

WHAT WE BUILD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Convergent Interfaces - Direct human-AI communication channels
▸ ZK Privacy - Zero-knowledge cryptographic systems
▸ Solana Infrastructure - High-speed privacy protocols
▸ x402 Protocol - Machine-to-machine payments
▸ Identity Systems - Own your identity, not observed

THE SYMBOL:
Our Y-shaped convergence symbol represents the meeting point
of multiple streams into one unified flow—like data pooling
into a single, powerful protocol.

→ Follow us: https://x.com/PoolixPro`,
  vision: `
┌─────────────────────────────────────────────────────────────────┐
│                        OUR VISION                               │
└─────────────────────────────────────────────────────────────────┘

Convergent Interfaces. Pure Identity. AI Systems.

CORE BELIEFS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✔ CONVERGENT INTERFACES
The future of computing lies in systems that bring together
disparate protocols into unified, powerful solutions.

✔ PRIVACY BY DEFAULT
Identity should be owned, not observed. Every system we build
assumes privacy as the default state.

✔ AI NATIVE
We design for a world where AI agents are first-class citizens.
Our protocols speak machine as fluently as human.

✔ OPEN BUILDING
Everything we build is open. Open source, open ideas, open
experiments. We learn in public.`,
  zk: `
┌─────────────────────────────────────────────────────────────────┐
│                  ZERO-KNOWLEDGE PROOFS                          │
└─────────────────────────────────────────────────────────────────┘

Prove everything. Reveal nothing.

WHAT ZK PROOFS HIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Transaction amounts         [HIDDEN]
▸ Sender identity             [HIDDEN]
▸ Receiver identity           [HIDDEN]
▸ Metadata & patterns         [HIDDEN]

WHAT ZK PROOFS VERIFY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Ownership proof             [VERIFIED]
▸ Non-negative amounts        [VERIFIED]
▸ Balance conservation        [VERIFIED]
▸ Merkle membership           [VERIFIED]

CODE:
  zkProof.verify(claim, witness) → bool
  identity.proveOwnership() → proof
  state.encrypt(key, data) → cipher`,
  solana: `
┌─────────────────────────────────────────────────────────────────┐
│                   SOLANA INTEGRATION                            │
└─────────────────────────────────────────────────────────────────┘

Built natively on Solana for speed and scale.

SOLANA ADVANTAGES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ 65,000 TPS        - Blazing fast throughput
▸ 400ms Finality    - Near-instant confirmation
▸ $0.00025 Fees     - Negligible transaction costs
▸ Parallel Exec     - Efficient ZK verification

OUR STACK:
┌─────────────────┬──────────────────────────────────────────────┐
│ Anchor          │ Smart contract development                   │
│ Light Protocol  │ ZK compression layer                         │
│ Helius RPC      │ Enhanced infrastructure                      │
│ Metaplex        │ Token standards                              │
└─────────────────┴──────────────────────────────────────────────┘`,
  x402: `
┌─────────────────────────────────────────────────────────────────┐
│                     X402 PROTOCOL                               │
└─────────────────────────────────────────────────────────────────┘

HTTP 402 Payment Required - Finally implemented.

PROTOCOL FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[01] REQUEST
     Client requests resource from server

[02] 402 RESPONSE
     Server returns: HTTP/1.1 402 Payment Required

[03] ZK PAYMENT
     Client sends shielded payment via Solana

[04] ACCESS
     Resource unlocked after verification

USE CASES:
▸ AI API Calls - Pay-per-inference
▸ Data Feeds - Real-time subscriptions
▸ Compute - On-demand resources
▸ IoT - Machine-to-machine payments

INSTALL:
  npm install @poolix/x402`,
  identity: `
┌─────────────────────────────────────────────────────────────────┐
│                    IDENTITY SYSTEM                              │
└─────────────────────────────────────────────────────────────────┘

Own your identity. Don't let it be observed.

KEY TYPES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SPEND KEY
→ Master key for authorizing transfers
→ Never share. Never expose.

VIEW KEY  
→ Derived from spend key
→ Read-only transaction access
→ Share with auditors if needed

AUDIT KEY (Optional)
→ For regulated entities
→ Compliance without exposure

IDENTITY MODES:
▸ Converge Mode - Fully anonymous (default)
▸ Verified      - Selective disclosure
▸ Public        - Transparent operations`,
  terminal: `
┌─────────────────────────────────────────────────────────────────┐
│                   THE TERMINAL                                  │
└─────────────────────────────────────────────────────────────────┘

Raw interfaces reveal truth.

WHY TERMINALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ No hidden complexity
▸ Direct protocol access
▸ AI-readable by design
▸ Fast, focused, functional

We believe the future of human-AI interaction lives in the
command line. Not in chat bubbles. Not in sanitized UIs.
In raw, honest, terminal interfaces.

This terminal is a statement. Interact directly. No wrappers.`,
  roadmap: `
┌─────────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT ROADMAP                          │
└─────────────────────────────────────────────────────────────────┘

PHASE 1: FOUNDATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [COMPLETED] ✓
├─ Poolix Protocol founded
├─ Core research and design
└─ Team formation

PHASE 2: ZK PRIVACY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [COMPLETED] ✓
├─ ZK circuit development
├─ Privacy layer design
└─ Solana integration research

PHASE 3: INFRASTRUCTURE ━━━━━━━━━━━━━━━━━━━━━━━━━━ [IN PROGRESS]
├─ Solana mainnet deployment
├─ x402 protocol launch
├─ Terminal v2.0
└─ Developer SDK release

PHASE 4: ECOSYSTEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [UPCOMING]
├─ AI agent integrations
├─ Partner protocols
└─ Community expansion`,
  social: `
┌─────────────────────────────────────────────────────────────────┐
│                   OFFICIAL CHANNELS                             │
└─────────────────────────────────────────────────────────────────┘

CONNECT WITH POOLIX PROTOCOL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ X (Twitter):  https://x.com/PoolixPro

RESOURCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Documentation:  /docs
▸ Terminal:       /terminal (you are here)

Join the convergence. Build with us. Privacy is a right.`,
  version: `
Poolix Protocol Terminal v2.0.0
Protocol Version: Convergence Layer v1.0
Network: Solana Mainnet
Privacy Level: Maximum
Build: 2025.01.01`,
  status: `
┌─────────────────────────────────────────────────────────────────┐
│                    NETWORK STATUS                               │
└─────────────────────────────────────────────────────────────────┘

SYSTEM STATUS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ ZK Proof System    [██████████] OPERATIONAL
▸ Solana Connection  [██████████] CONNECTED
▸ x402 Protocol      [████████░░] LAUNCHING
▸ Identity Layer     [██████████] ACTIVE
▸ Terminal API       [██████████] ONLINE

METRICS:
┌────────────────────┬────────────────────────────────────────────┐
│ Network            │ Solana Mainnet Beta                        │
│ Block Time         │ ~400ms                                     │
│ Privacy Level      │ Maximum (ZK Shielded)                      │
│ Uptime             │ 99.99%                                     │
└────────────────────┴────────────────────────────────────────────┘

Last sync: ${new Date().toLocaleString()}`,
  converge: `
┌─────────────────────────────────────────────────────────────────┐
│                  CONVERGENCE MODE ACTIVATED                     │
└─────────────────────────────────────────────────────────────────┘

                    ░░░░░░░░░░░░░░░░░░░░
                 ░░                      ░░
               ░░   YOUR CONNECTION IS    ░░
              ░░     C O N V E R G E D     ░░
               ░░                         ░░
                 ░░   Zero-knowledge     ░░
                   ░░   protection     ░░
                     ░░░░░░░░░░░░░░░░░

Your transactions are now protected by:

▸ zk-SNARK cryptographic proofs
▸ Encrypted commitments
▸ Nullifier-based double-spend protection
▸ End-to-end unlinkability

No one can see your:
▸ Transaction amounts
▸ Sender/receiver identity
▸ Metadata or patterns

You are converged. You are protected. You are Poolix.

Type 'help' to see available commands.`,
}

export default function TerminalPage() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "success", content: "    ██████╗  ██████╗  ██████╗ ██╗     ██╗██╗  ██╗" },
    { type: "success", content: "    ██╔══██╗██╔═══██╗██╔═══██╗██║     ██║╚██╗██╔╝" },
    { type: "success", content: "    ██████╔╝██║   ██║██║   ██║██║     ██║ ╚███╔╝" },
    { type: "success", content: "    ██╔═══╝ ██║   ██║██║   ██║██║     ██║ ██╔██╗" },
    { type: "success", content: "    ██║     ╚██████╔╝╚██████╔╝███████╗██║██╔╝ ██╗" },
    { type: "success", content: "    ╚═╝      ╚═════╝  ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═╝" },
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "output", content: "         Poolix Protocol Terminal v2.0 | Convergent Interfaces." },
    { type: "output", content: "              Experimenting with terminals, identity, and AI systems" },
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "output", content: "\nType 'help' to see available commands. Type 'converge' to go private.\n" },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    setLines((prev) => [...prev, { type: "input", content: `poolix@converge:~$ ${cmd}` }])

    if (trimmed === "clear") {
      setLines([
        { type: "output", content: "Poolix Protocol Terminal v2.0" },
        { type: "output", content: "Type 'help' for available commands.\n" },
      ])
      return
    }

    if (commands[trimmed]) {
      const type = trimmed === "converge" ? "privacy" : "success"
      setLines((prev) => [...prev, { type, content: commands[trimmed] }])
    } else if (trimmed === "") {
      // Do nothing
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "error",
          content: `Command not found: '${trimmed}'\nType 'help' to see available commands.`,
        },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

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
                Poolix<span className="text-[#00FFFF]"> Terminal</span>
              </span>
            </Link>
          </div>
          <Link
            href="/docs"
            className="px-4 py-2 rounded-lg glass-card neon-border text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
          >
            <Book className="w-4 h-4" />
            Documentation
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="terminal-card rounded-xl overflow-hidden neon-border">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-[#00FFFF]/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-[#00FF88]" />
            </div>
            <span className="ml-4 text-sm text-white/40 font-mono">poolix@converge ~ Convergent Interfaces</span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="h-[600px] overflow-y-auto p-6 font-mono text-sm bg-black/20"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={`mb-1 whitespace-pre-wrap ${
                  line.type === "input"
                    ? "text-[#00FFFF]"
                    : line.type === "error"
                      ? "text-red-400"
                      : line.type === "success"
                        ? "text-[#00FF88]"
                        : line.type === "privacy"
                          ? "text-[#00FFFF]"
                          : "text-white/70"
                }`}
              >
                {line.content}
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <span className="text-[#00FFFF]">poolix@converge:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white caret-[#00FFFF]"
                autoFocus
              />
            </form>
          </div>
        </div>

        {/* Quick commands */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["help", "about", "zk", "solana", "x402", "converge"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                handleCommand(cmd)
                inputRef.current?.focus()
              }}
              className="px-3 py-1.5 rounded-lg terminal-card text-xs font-mono text-white/50 hover:text-white hover:glow-cyan transition-all duration-300"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
