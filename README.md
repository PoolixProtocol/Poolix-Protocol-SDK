
OUR TECH STACK:
┌─────────────────┬──────────────────────────────────────────────┐
│ Anchor Framework│ Smart contract development                   │
│ Light Protocol  │ ZK compression layer                         │
│ Helius RPC      │ Enhanced node infrastructure                 │
│ Metaplex        │ NFT & Token standards                        │
└─────────────────┴──────────────────────────────────────────────┘


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
▸ IoT Devices - Machine-to-machine transactions`



------------------------

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
