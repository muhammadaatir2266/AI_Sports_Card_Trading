'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react'
import { formatCurrency, calculateProfitMargin, getRiskLevel } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Input } from './ui/Input'
import { Button } from './ui/Button'

export function ProfitCalculator() {
  const [currentBid, setCurrentBid] = useState('')
  const [estimatedValue, setEstimatedValue] = useState('')
  const [fees, setFees] = useState('15') // Default 15% fees

  const currentBidNum = parseFloat(currentBid) || 0
  const estimatedValueNum = parseFloat(estimatedValue) || 0
  const feesNum = parseFloat(fees) || 0
  
  const potentialProfit = estimatedValueNum - currentBidNum - (estimatedValueNum * feesNum / 100)
  const profitMargin = calculateProfitMargin(currentBidNum, estimatedValueNum)
  const riskLevel = getRiskLevel(profitMargin, 0.8) // Assuming 80% confidence

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-primary bg-primary/10 border-primary/30'
      case 'medium': return 'text-accent bg-accent/10 border-accent/30'
      case 'high': return 'text-destructive bg-destructive/10 border-destructive/30'
      default: return 'text-muted-foreground bg-muted border-border'
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <CheckCircle className="h-4 w-4" />
      case 'medium': return <AlertTriangle className="h-4 w-4" />
      case 'high': return <AlertTriangle className="h-4 w-4" />
      default: return null
    }
  }

  const getRecommendation = () => {
    if (potentialProfit > 50) return {
      text: 'Strong buy opportunity with excellent profit potential',
      color: 'text-primary',
      bgColor: 'bg-primary/10 border-primary/30'
    }
    if (potentialProfit > 0) return {
      text: 'Moderate opportunity, consider carefully',
      color: 'text-accent',
      bgColor: 'bg-accent/10 border-accent/30'
    }
    return {
      text: 'Not recommended - potential loss',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10 border-destructive/30'
    }
  }

  const recommendation = getRecommendation()

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
          >
            <Calculator className="h-6 w-6 text-primary" />
          </motion.div>
          <CardTitle className="text-xl">Profit Calculator</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Current Bid ($)
              </label>
              <Input
                type="number"
                value={currentBid}
                onChange={(e) => setCurrentBid(e.target.value)}
                placeholder="Enter current bid amount"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Estimated Value ($)
              </label>
              <Input
                type="number"
                value={estimatedValue}
                onChange={(e) => setEstimatedValue(e.target.value)}
                placeholder="Enter estimated market value"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Fees & Costs (%)
              </label>
              <Input
                type="number"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                placeholder="Enter fees percentage"
                className="w-full"
              />
            </div>
          </motion.div>

          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-muted/50 to-muted/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span>Analysis Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  className="flex justify-between items-center p-3 rounded-lg bg-background/50"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-sm text-muted-foreground">Potential Profit:</span>
                  <motion.span 
                    className={`font-semibold text-lg ${
                      potentialProfit > 0 ? 'text-primary' : 'text-destructive'
                    }`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {formatCurrency(potentialProfit)}
                  </motion.span>
                </motion.div>

                <motion.div 
                  className="flex justify-between items-center p-3 rounded-lg bg-background/50"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-sm text-muted-foreground">Profit Margin:</span>
                  <motion.span 
                    className={`font-semibold ${
                      profitMargin > 0 ? 'text-primary' : 'text-destructive'
                    }`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {profitMargin.toFixed(1)}%
                  </motion.span>
                </motion.div>

                <motion.div 
                  className="flex justify-between items-center p-3 rounded-lg bg-background/50"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-sm text-muted-foreground">Risk Level:</span>
                  <motion.div 
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getRiskColor(riskLevel)}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {getRiskIcon(riskLevel)}
                    <span className="capitalize font-medium">{riskLevel}</span>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>

            <motion.div 
              className={`p-4 rounded-lg border ${recommendation.bgColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className={`h-4 w-4 ${recommendation.color}`} />
                <span className={`text-sm font-medium ${recommendation.color}`}>
                  Recommendation:
                </span>
              </div>
              <p className={`text-sm ${recommendation.color}`}>
                {recommendation.text}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
