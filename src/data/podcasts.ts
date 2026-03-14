export interface Podcast {
  id: number;
  title: string;
  source: string;
  description: string;
  featured: boolean;
  episodeTag: string;
}

export const podcasts: Podcast[] = [
  {
    id: 1,
    title: "ETH Upgrades: What Changes and Why It Matters",
    source: "Bankless",
    description: "Ryan & David break down Ethereum's latest upgrades in plain language. Perfect for understanding the tech roadmap without a CS degree.",
    featured: true,
    episodeTag: "Latest Episode",
  },
  {
    id: 2,
    title: "Bitcoin Outlook: The Macro Case for BTC",
    source: "Unchained",
    description: "Laura Shin interviews leading macro economists about Bitcoin's role in the global financial system. Essential listening for the big picture.",
    featured: true,
    episodeTag: "Editor's Pick",
  },
  {
    id: 3,
    title: "Project Deep Dive: Layer 2 Solutions",
    source: "Coin Bureau",
    description: "Guy breaks down the top Layer 2 projects, explaining how they make Ethereum faster and cheaper. No jargon, just clarity.",
    featured: true,
    episodeTag: "Trending",
  },
  {
    id: 4,
    title: "Wallet Security 101",
    source: "Unchained",
    description: "Everything you need to know about keeping your crypto safe. Seed phrases, hardware wallets, and common scams explained.",
    featured: false,
    episodeTag: "Security",
  },
  {
    id: 5,
    title: "DeFi for Beginners",
    source: "Coin Bureau",
    description: "A beginner-friendly breakdown of decentralized finance: lending, borrowing, yield farming, and the risks involved.",
    featured: false,
    episodeTag: "DeFi",
  },
];
