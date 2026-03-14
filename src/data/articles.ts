export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: number;
  author: string;
  podcastCallout: { title: string; source: string; description: string };
  relatedSlugs: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Bitcoin vs. Ethereum: What's the Actual Difference?",
    slug: "bitcoin-vs-ethereum",
    excerpt: "Think of Bitcoin as digital gold and Ethereum as a digital app store. Here's why that matters.",
    readTime: 8,
    author: "CryptoNovice Team",
    podcastCallout: {
      title: "Bankless: ETH Upgrades Explained",
      source: "Bankless",
      description: "A deep dive into what makes Ethereum different and where it's headed next.",
    },
    relatedSlugs: ["first-crypto-wallet", "defi-explained"],
    content: `## The Simple Analogy

Imagine Bitcoin as **digital gold**. It was created in 2009 with one clear purpose: to be a decentralized, scarce store of value. There will only ever be 21 million Bitcoin. Like gold, people buy it, hold it, and treat it as a hedge against inflation.

Now imagine Ethereum as a **digital app store with its own currency**. Launched in 2015, Ethereum does everything Bitcoin does—but it also lets developers build applications on top of it. Its currency, Ether (ETH), powers these applications.

## The Key Differences

### Purpose
- **Bitcoin**: Store of value. "Digital gold." It's designed to be money.
- **Ethereum**: A platform for decentralized applications. ETH is the fuel that runs them.

### Speed & Cost
- **Bitcoin**: ~10 minutes per transaction. Fees vary but can spike during busy periods.
- **Ethereum**: ~12 seconds per transaction. Fees (called "gas") can also fluctuate but are generally faster.

### Supply
- **Bitcoin**: Hard cap of 21 million coins. Ever.
- **Ethereum**: No hard cap, but it now *burns* a portion of fees, making it potentially deflationary.

### Technology
- **Bitcoin**: Relatively simple by design. It does one thing extremely well.
- **Ethereum**: Complex and programmable. It supports smart contracts—self-executing agreements written in code.

## Smart Contracts: The Game Changer

This is where Ethereum really separates itself. A smart contract is a program that runs exactly as written, with no middleman. Think of a vending machine: you put in money, select your item, and the machine delivers it automatically. No cashier needed.

Smart contracts power:
- **DeFi** (Decentralized Finance): Lending, borrowing, and trading without banks
- **NFTs**: Digital ownership of art, music, and collectibles
- **DAOs**: Organizations run by code and community votes

## Which One Should You Care About?

Both. They serve different purposes:

- If you want a **long-term store of value** with the simplest thesis, Bitcoin is your pick.
- If you're excited about **the future of decentralized technology** and applications, Ethereum is the ecosystem to watch.

Many experienced investors hold both—and that's perfectly reasonable.

## Key Takeaways

1. Bitcoin = digital gold. Simple, scarce, secure.
2. Ethereum = programmable money. It's a platform, not just a currency.
3. They're not competitors—they solve different problems.
4. Both are decentralized, meaning no single entity controls them.
5. Understanding both gives you a massive head start in crypto.`,
  },
  {
    id: 2,
    title: "Your First Crypto Wallet: A Stress-Free Guide",
    slug: "first-crypto-wallet",
    excerpt: "Setting up a crypto wallet doesn't have to be intimidating. Here's your step-by-step walkthrough.",
    readTime: 10,
    author: "CryptoNovice Team",
    podcastCallout: {
      title: "Wallet Security 101",
      source: "Unchained",
      description: "Everything you need to know about keeping your crypto safe, explained for beginners.",
    },
    relatedSlugs: ["bitcoin-vs-ethereum", "defi-explained"],
    content: `## What Is a Crypto Wallet?

Let's clear up the biggest misconception first: **a crypto wallet doesn't actually store your crypto.** Your crypto lives on the blockchain (a public ledger). Your wallet stores the *keys* that prove you own it.

Think of it like your email. Your emails live on Google's servers, but you need your password to access them. A crypto wallet is like that password—except way more important, because if you lose it, no one can reset it for you.

## Two Types of Keys

- **Public Key**: Like your email address. You share it so people can send you crypto.
- **Private Key**: Like your password. Never share this with anyone. Ever.

## Types of Wallets

### Hot Wallets (Connected to the Internet)
**Best for**: Beginners, small amounts, everyday use

- **Mobile apps**: Trust Wallet, Coinbase Wallet, MetaMask (mobile)
- **Browser extensions**: MetaMask, Phantom (for Solana)
- **Exchange wallets**: Coinbase, Kraken (your crypto stays on the exchange)

**Pros**: Easy to set up, convenient, free
**Cons**: Connected to the internet = slightly higher risk

### Cold Wallets (Offline)
**Best for**: Larger amounts, long-term storage

- **Hardware devices**: Ledger, Trezor
- **Paper wallets**: Your keys printed on paper (old school but effective)

**Pros**: Extremely secure, offline
**Cons**: Cost $60-$200, less convenient for quick trades

## Setting Up Your First Wallet (Step by Step)

We recommend starting with **MetaMask** (for Ethereum) or **Coinbase Wallet** (for simplicity):

### Step 1: Download the App
Visit the official website (always double-check the URL). Download from the official app store.

### Step 2: Create a New Wallet
The app will generate your wallet. It takes about 30 seconds.

### Step 3: Write Down Your Seed Phrase
This is the most critical step. You'll see 12 or 24 random words. **Write them down on paper.** Not in your Notes app. Not in a screenshot. On actual paper.

### Step 4: Verify Your Seed Phrase
The app will quiz you on the order. This ensures you wrote it down correctly.

### Step 5: You're Done
Your wallet is ready. You'll see your public address (a long string starting with 0x for Ethereum).

## The Seed Phrase: Your Master Key

Your seed phrase (also called recovery phrase) is **the single most important thing in crypto.** Here's what you need to know:

- It's 12 or 24 words in a specific order
- It can recover your wallet on any device
- Anyone who has it can steal all your crypto
- No customer support can recover it if you lose it

### Storage Rules
✅ Write it on paper and store in a safe
✅ Consider a metal backup (fire/water resistant)
✅ Store copies in different locations
❌ Never type it into any website
❌ Never store it digitally (no photos, no cloud)
❌ Never share it with anyone

## Common Mistakes to Avoid

1. **Storing seed phrases digitally** — Hackers love cloud storage and screenshots
2. **Using fake wallet apps** — Always download from official sources
3. **Sending to the wrong network** — ETH on the Bitcoin network is gone forever
4. **Ignoring gas fees** — Always check the fee before confirming a transaction
5. **Keeping everything on an exchange** — "Not your keys, not your crypto"

## Your Action Plan

1. Download MetaMask or Coinbase Wallet today
2. Write your seed phrase on paper and secure it
3. Send a tiny amount ($5-$10) to practice
4. Once comfortable, consider a hardware wallet for larger amounts`,
  },
  {
    id: 3,
    title: "Understanding DeFi in 10 Minutes (Without the Jargon)",
    slug: "defi-explained",
    excerpt: "DeFi is reinventing banking. Here's how it works, explained like you're having coffee with a friend.",
    readTime: 10,
    author: "CryptoNovice Team",
    podcastCallout: {
      title: "DeFi for Beginners",
      source: "Coin Bureau",
      description: "A beginner-friendly breakdown of decentralized finance and why it matters.",
    },
    relatedSlugs: ["bitcoin-vs-ethereum", "first-crypto-wallet"],
    content: `## The Banking Analogy

Right now, when you put money in a bank, here's what happens:
- The bank takes your deposit
- Lends it to someone else at a higher rate
- Keeps most of the profit
- Pays you ~0.5% interest (if you're lucky)

**DeFi (Decentralized Finance) cuts out the bank.** It uses smart contracts on blockchains like Ethereum to let people lend, borrow, and trade directly with each other. The profits that used to go to the bank? They go to *you*.

## How DeFi Works (The Coffee Shop Version)

Imagine a coffee shop where:
- There's no owner or manager
- The rules are written on a sign that can't be changed
- Customers serve each other and split the tips
- Everything runs automatically

That's DeFi. The "sign" is a smart contract—code that executes automatically when conditions are met. No humans needed to approve, process, or manage anything.

## The Three Pillars of DeFi

### 1. Lending & Borrowing
**Traditional way**: Go to a bank, fill out forms, wait for approval, get charged high interest.

**DeFi way**: Connect your wallet to a protocol like Aave or Compound, deposit crypto, and earn interest instantly. Or borrow against your crypto as collateral—no credit check, no bank.

- **Lending**: You deposit crypto and earn 2-10% APY (compared to bank's 0.5%)
- **Borrowing**: You put up collateral (say, $1,000 in ETH) and borrow up to ~75% of its value

### 2. Decentralized Exchanges (DEXs)
**Traditional way**: Use a stock broker or crypto exchange (Coinbase, Binance). They hold your funds and charge fees.

**DeFi way**: Use Uniswap, SushiSwap, or Curve. Trade directly from your wallet. No account needed. No KYC. Open 24/7.

How it works: Instead of matching buyers and sellers, DEXs use **liquidity pools**—big pots of crypto funded by regular people (called liquidity providers) who earn a cut of every trade.

### 3. Yield Farming
This is where it gets exciting (and risky). Yield farming means moving your crypto between different DeFi protocols to maximize returns. Think of it as:

- Depositing in a savings account (lending)
- Getting a receipt token
- Depositing that receipt token in *another* protocol for additional rewards
- Stacking returns on top of returns

Some farmers earn 20-100%+ APY—but this comes with significant risk.

## The Risks (Be Honest With Yourself)

DeFi isn't all upside. Here's what can go wrong:

### Smart Contract Risk
The code could have bugs. If a smart contract is exploited, your funds could be lost. This has happened—multiple times, for hundreds of millions of dollars.

### Impermanent Loss
If you provide liquidity and the price of your tokens changes significantly, you might end up with less than if you'd just held the tokens.

### Liquidation Risk
If you borrow and the value of your collateral drops below a certain threshold, your position gets automatically sold (liquidated).

### Rug Pulls
Some DeFi projects are outright scams. The team creates a token, waits for people to invest, then drains the liquidity and disappears.

## How to Stay Safe

1. **Start small** — Never invest more than you can afford to lose
2. **Use established protocols** — Aave, Compound, Uniswap, and Curve have been battle-tested
3. **Check audits** — Reputable projects get their code audited by security firms
4. **Understand what you're investing in** — If you can't explain it simply, don't put money in it
5. **Diversify** — Don't put everything in one protocol

## Key Takeaways

1. DeFi replaces banks with code—lending, borrowing, and trading without intermediaries
2. You can earn significantly higher returns than traditional finance
3. But higher returns = higher risk. Always.
4. Stick to established protocols when starting out
5. Never invest more than you can afford to lose completely`,
  },
];
