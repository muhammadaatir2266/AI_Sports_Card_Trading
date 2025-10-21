'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, DollarSign, Target, Activity } from 'lucide-react'

const profitData = [
  { month: 'Jan', profit: 1200, auctions: 45 },
  { month: 'Feb', profit: 1900, auctions: 52 },
  { month: 'Mar', profit: 2100, auctions: 48 },
  { month: 'Apr', profit: 1800, auctions: 41 },
  { month: 'May', profit: 2500, auctions: 58 },
  { month: 'Jun', profit: 2200, auctions: 55 },
]

const categoryData = [
  { name: 'Baseball', value: 35, profit: 1200 },
  { name: 'Basketball', value: 28, profit: 1800 },
  { name: 'Football', value: 20, profit: 900 },
  { name: 'Hockey', value: 12, profit: 600 },
  { name: 'Other', value: 5, profit: 300 },
]

// Using CSS variables for theme colors
const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--primary) / 0.7)', 'hsl(var(--secondary) / 0.7)']

const successRateData = [
  { name: 'Week 1', rate: 85 },
  { name: 'Week 2', rate: 88 },
  { name: 'Week 3', rate: 82 },
  { name: 'Week 4', rate: 90 },
  { name: 'Week 5', rate: 87 },
  { name: 'Week 6', rate: 92 },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center space-x-2">
        <Activity className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Total Profit</p>
              <p className="text-2xl font-bold">$12,450</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
              <p className="text-2xl font-bold">87%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm text-muted-foreground">Avg Profit</p>
              <p className="text-2xl font-bold">$245</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Active Auctions</p>
              <p className="text-2xl font-bold">23</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Profit Trend */}
        <div className="bg-card p-4 md:p-6 rounded-lg border">
          <h3 className="text-base md:text-lg font-semibold mb-4">Profit Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={profitData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="profit" stroke="hsl(var(--primary))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Success Rate */}
        <div className="bg-card p-4 md:p-6 rounded-lg border">
          <h3 className="text-base md:text-lg font-semibold mb-4">Success Rate Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={successRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="rate" stroke="hsl(var(--accent))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-card p-4 md:p-6 rounded-lg border">
          <h3 className="text-base md:text-lg font-semibold mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card p-4 md:p-6 rounded-lg border">
          <h3 className="text-base md:text-lg font-semibold mb-4">Category Performance</h3>
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="font-medium">{category.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${category.profit.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">{category.value}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
