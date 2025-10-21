'use client'

import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react'
import { AIInsight } from '@/types'
import { generateMockData } from '@/lib/utils'

export function AIInsights() {
  const { insights } = generateMockData()

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'trend': return <TrendingUp className="h-5 w-5" />
      case 'opportunity': return <Target className="h-5 w-5" />
      case 'warning': return <AlertTriangle className="h-5 w-5" />
      case 'recommendation': return <Lightbulb className="h-5 w-5" />
      default: return <Brain className="h-5 w-5" />
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'trend': return 'text-primary bg-primary/10'
      case 'opportunity': return 'text-accent bg-accent/10'
      case 'warning': return 'text-destructive bg-destructive/10'
      case 'recommendation': return 'text-secondary bg-secondary/10'
      default: return 'text-muted-foreground bg-muted'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-destructive'
      case 'medium': return 'border-l-accent'
      case 'low': return 'border-l-primary'
      default: return 'border-l-muted'
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center space-x-2">
        <Brain className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold">AI Insights & Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {insights.map((insight: AIInsight) => (
          <div 
            key={insight.id} 
            className={`bg-card rounded-lg border p-4 md:p-6 border-l-4 ${getPriorityColor(insight.priority)} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-full ${getInsightColor(insight.type)}`}>
                {getInsightIcon(insight.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-sm capitalize">{insight.type}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    insight.priority === 'high' ? 'bg-destructive/20 text-destructive' :
                    insight.priority === 'medium' ? 'bg-accent/20 text-accent' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {insight.priority}
                  </span>
                </div>
                
                <h4 className="text-sm md:text-base font-semibold mb-2">{insight.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-3">
                  {insight.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Confidence: {(insight.confidence * 100).toFixed(0)}%</span>
                  <span>{new Date(insight.timestamp).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="font-semibold mb-4">AI Analysis Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Active Opportunities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">87%</div>
            <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">$2,450</div>
            <div className="text-sm text-muted-foreground">Potential Profit</div>
          </div>
        </div>
      </div>
    </div>
  )
}
