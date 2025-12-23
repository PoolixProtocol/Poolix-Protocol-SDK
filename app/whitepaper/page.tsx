"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, ExternalLink, Sparkles } from "lucide-react"

const sections = [
  { number: "0", title: "The Weird Manifesto", page: "1" },
  { number: "1", title: "Introduction: Why Weird?", page: "5" },
  { number: "2", title: "Blob Technology Fundamentals", page: "12" },
  { number: "3", title: "The Weird Virtual Machine", page: "24" },
  { number: "4", title: "Multi-Dimensional Liquidity", page: "38" },
  { number: "5", title: "Organic Yield Algorithms", page: "52" },
  { number: "6", title: "Cross-Chain Blob Bridges", page: "64" },
  { number: "7", title: "$WEIRD Tokenomics", page: "78" },
  { number: "8", title: "Security in Non-Euclidean Space", page: "89" },
  { number: "9", title: "The Weird Path Forward", page: "95" },
  { number: "∞", title: "Appendix: Transcendence Guide", page: "99" },
]

export default function WhitepaperPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #0a0e27 0%, #0f1535 50%, #080c1f 100%)" }}
    >
      {/* Header */}
      <header className="glass-card border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>
            <div className="w-px h-6 bg-white/10" />
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-xl neon-border-small p-0.5">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-[#0a0e27]/90">
                    <Image src="/images/vn2m.png" alt="VN2M" fill className="object-contain p-1" />
                  </div>
                </div>
              </div>
              <span className="font-bold text-white">Weird Paper</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div
              className="absolute inset-0 rounded-3xl neon-border-rainbow p-1 animate-spin-slow"
              style={{ animationDuration: "20s" }}
            >
              <div className="w-full h-full rounded-3xl bg-[#0a0e27]/90 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-[#8b5cf6] animate-wiggle" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            VN2M <span className="gradient-text-vn2m">Weird Paper</span>
          </h1>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            A comprehensive document explaining blob technology, multi-dimensional liquidity, organic yield algorithms,
            and why we made DeFi weird.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-8 py-4 rounded-2xl font-bold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 animate-bounce-weird"
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #22d3ee 50%, #4ade80 100%)",
                boxShadow: "0 0 40px rgba(139,92,246,0.4)",
              }}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
            <Link
              href="/docs"
              className="px-8 py-4 rounded-2xl font-bold text-white glass-card neon-border-small flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              Read Weird Docs
            </Link>
          </div>
        </div>

        {/* Document Info */}
        <div className="glass-card rounded-3xl p-8 mb-12 neon-border-small">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black gradient-text-vn2m mb-2">v?.?</div>
              <div className="text-white/40 text-xs font-mono">Version (Fluid)</div>
            </div>
            <div>
              <div className="text-3xl font-black gradient-text-warm mb-2">42</div>
              <div className="text-white/40 text-xs font-mono">Dimensions</div>
            </div>
            <div>
              <div className="text-3xl font-black gradient-text-nature mb-2">∞</div>
              <div className="text-white/40 text-xs font-mono">Pages (Morphing)</div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="glass-card rounded-3xl p-8 neon-border-small">
          <h2 className="text-2xl font-black text-white mb-6">Table of Weird Contents</h2>
          <div className="space-y-3">
            {sections.map((section, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8b5cf6] via-[#22d3ee] to-[#4ade80] flex items-center justify-center text-sm font-bold text-white">
                    {section.number}
                  </span>
                  <span className="text-white/80 group-hover:text-white transition-colors">{section.title}</span>
                </div>
                <span className="text-white/30 text-xs font-mono">p.{section.page}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Abstract Preview */}
        <div className="mt-12 glass-card rounded-3xl p-8 neon-border-rainbow">
          <h2 className="text-2xl font-black text-white mb-6">The Weird Abstract</h2>
          <div className="text-white/60 leading-relaxed space-y-4 font-mono text-sm">
            <p>
              This paper introduces VN2M, a protocol that emerged from a collective hallucination shared by developers
              who were tired of boring DeFi. We asked: what if finance was weird? What if liquidity pools behaved like
              living organisms? What if yield grew organically?
            </p>
            <p>
              We present Blob Technology, a novel approach to decentralized finance that replaces traditional smart
              contracts with organic data structures that morph and adapt. Through multi-dimensional liquidity pools and
              non-euclidean execution environments, we demonstrate how DeFi can transcend its current limitations.
            </p>
            <p>
              Our system architecture includes the Blob Layer, Weird VM, Flow Engine, Void Storage, and Dimension
              Bridges. Together, these components enable financial primitives that shouldn't exist - but somehow do.
            </p>
            <p className="text-[#8b5cf6]">Warning: Reading this paper may cause you to question consensus reality.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
