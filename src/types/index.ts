export interface WhatnotAuction {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  timeRemaining: string;
  imageUrl: string;
  seller: string;
  category: string;
  condition: string;
  watchers: number;
  bids: number;
  isLive: boolean;
}

export interface EbaySale {
  id: string;
  title: string;
  soldPrice: number;
  soldDate: string;
  condition: string;
  imageUrl: string;
  seller: string;
  category: string;
}

export interface ProfitAnalysis {
  auctionId: string;
  estimatedValue: number;
  currentBid: number;
  potentialProfit: number;
  profitMargin: number;
  riskLevel: 'low' | 'medium' | 'high';
  recommendation: 'buy' | 'hold' | 'avoid';
  confidence: number;
}

export interface AIInsight {
  id: string;
  type: 'trend' | 'opportunity' | 'warning' | 'recommendation';
  title: string;
  description: string;
  confidence: number;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
}

export interface AnalyticsData {
  totalAuctions: number;
  activeBids: number;
  totalProfit: number;
  successRate: number;
  averageProfit: number;
  topCategories: Array<{
    category: string;
    count: number;
    profit: number;
  }>;
}

export interface DashboardStats {
  totalValue: number;
  activeAuctions: number;
  completedTrades: number;
  profitToday: number;
  profitThisWeek: number;
  profitThisMonth: number;
}
