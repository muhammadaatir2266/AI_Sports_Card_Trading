import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { WhatnotAuction, EbaySale, AIInsight } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency values
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

// Format time remaining
export function formatTimeRemaining(timeString: string): string {
  return timeString
}

// Calculate profit margin
export function calculateProfitMargin(currentBid: number, estimatedValue: number): number {
  if (currentBid === 0) return 0
  return ((estimatedValue - currentBid) / currentBid) * 100
}

// Get risk level based on profit margin and confidence
export function getRiskLevel(profitMargin: number, confidence: number): 'low' | 'medium' | 'high' {
  if (profitMargin > 20 && confidence > 0.7) return 'low'
  if (profitMargin > 10 && confidence > 0.5) return 'medium'
  return 'high'
}

// Generate mock data for development
export function generateMockData() {
  const auctions: WhatnotAuction[] = [
    {
      id: '1',
      title: '2023 Topps Chrome Patrick Mahomes PSA 10',
      description: 'Pristine condition, centered, sharp corners',
      currentBid: 125.50,
      timeRemaining: '2h 15m',
      imageUrl: '/cards/card1.jpg',
      seller: 'CardCollector23',
      category: 'Football',
      condition: 'PSA 10',
      watchers: 45,
      bids: 12,
      isLive: true,
    },
    {
      id: '2',
      title: 'Mike Trout 2011 Topps Update Rookie Card',
      description: 'Classic rookie card in excellent condition',
      currentBid: 89.99,
      timeRemaining: '1h 45m',
      imageUrl: '/cards/card2.jpg',
      seller: 'BaseballPro',
      category: 'Baseball',
      condition: 'Mint',
      watchers: 32,
      bids: 8,
      isLive: true,
    },
    {
      id: '3',
      title: 'LeBron James 2003 Upper Deck Rookie',
      description: 'Iconic LeBron rookie card',
      currentBid: 234.00,
      timeRemaining: '3h 30m',
      imageUrl: '/cards/card3.jpg',
      seller: 'HoopsKing',
      category: 'Basketball',
      condition: 'Near Mint',
      watchers: 67,
      bids: 18,
      isLive: true,
    },
    {
      id: '4',
      title: 'Tom Brady 2000 Playoff Contenders Rookie Auto',
      description: 'Authenticated autograph rookie card',
      currentBid: 450.00,
      timeRemaining: '5h 10m',
      imageUrl: '/cards/card4.jpg',
      seller: 'NFLCards',
      category: 'Football',
      condition: 'BGS 9',
      watchers: 89,
      bids: 25,
      isLive: true,
    },
  ]

  const ebaySales: EbaySale[] = [
    {
      id: '1',
      title: 'Stephen Curry 2009 Topps Chrome Rookie PSA 10',
      soldPrice: 345.00,
      soldDate: '2024-01-15',
      condition: 'PSA 10',
      imageUrl: '/cards/sold1.jpg',
      seller: 'CardMaster',
      category: 'Basketball',
    },
    {
      id: '2',
      title: 'Aaron Judge 2013 Bowman Chrome Auto',
      soldPrice: 189.50,
      soldDate: '2024-01-14',
      condition: 'BGS 9.5',
      imageUrl: '/cards/sold2.jpg',
      seller: 'YankeesFan',
      category: 'Baseball',
    },
    {
      id: '3',
      title: 'Justin Herbert 2020 Prizm Silver Rookie',
      soldPrice: 156.00,
      soldDate: '2024-01-13',
      condition: 'PSA 9',
      imageUrl: '/cards/sold3.jpg',
      seller: 'ChargersCollector',
      category: 'Football',
    },
    {
      id: '4',
      title: 'Luka Doncic 2018 Prizm Rookie',
      soldPrice: 278.99,
      soldDate: '2024-01-12',
      condition: 'Gem Mint',
      imageUrl: '/cards/sold4.jpg',
      seller: 'MavsNation',
      category: 'Basketball',
    },
  ]

  const insights: AIInsight[] = [
    {
      id: '1',
      type: 'opportunity',
      title: 'Rising Demand for 2023 Football Rookies',
      description: 'Market analysis shows increasing interest in current rookie cards. Consider bidding on Stroud and Young cards.',
      confidence: 0.85,
      timestamp: new Date().toISOString(),
      priority: 'high',
    },
    {
      id: '2',
      type: 'trend',
      title: 'Vintage Baseball Cards Trending',
      description: 'Pre-2000 baseball cards showing 15% price increase over the last month.',
      confidence: 0.78,
      timestamp: new Date().toISOString(),
      priority: 'medium',
    },
    {
      id: '3',
      type: 'warning',
      title: 'Overvalued Basketball Parallels',
      description: 'Some parallel cards are currently overpriced. Wait for market correction before purchasing.',
      confidence: 0.72,
      timestamp: new Date().toISOString(),
      priority: 'medium',
    },
    {
      id: '4',
      type: 'recommendation',
      title: 'Diversify Into Hockey Cards',
      description: 'Hockey card market is undervalued. Good opportunity for portfolio diversification.',
      confidence: 0.68,
      timestamp: new Date().toISOString(),
      priority: 'low',
    },
    {
      id: '5',
      type: 'trend',
      title: 'PSA 10 Graded Cards Premium',
      description: 'PSA 10 graded cards commanding 40% premium over PSA 9. Focus on high-grade acquisitions.',
      confidence: 0.91,
      timestamp: new Date().toISOString(),
      priority: 'high',
    },
    {
      id: '6',
      type: 'opportunity',
      title: 'Underpriced Soccer Cards',
      description: 'International soccer cards showing strong potential with upcoming tournaments.',
      confidence: 0.75,
      timestamp: new Date().toISOString(),
      priority: 'medium',
    },
  ]

  return { auctions, ebaySales, insights }
}
