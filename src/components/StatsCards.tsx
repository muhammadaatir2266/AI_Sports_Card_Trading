'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Activity, Target } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

const stats = [
  {
    title: 'Total Portfolio Value',
    value: '$12,450',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: DollarSign,
    color: 'from-primary to-primary',
  },
  {
    title: 'Active Auctions',
    value: '23',
    change: '+3',
    changeType: 'positive' as const,
    icon: Activity,
    color: 'from-secondary to-secondary',
  },
  {
    title: 'Profit Today',
    value: '$245',
    change: '+8.2%',
    changeType: 'positive' as const,
    icon: TrendingUp,
    color: 'from-accent to-accent',
  },
  {
    title: 'Success Rate',
    value: '87%',
    change: '+2.1%',
    changeType: 'positive' as const,
    icon: Target,
    color: 'from-primary to-accent',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export function StatsCards() {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div 
            key={stat.title} 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl blur-xl" 
                 style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
            />
            <div className="relative bg-card/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-border/50 hover:border-border transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <motion.p 
                    className="text-2xl md:text-3xl font-bold"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                  >
                    {stat.value}
                  </motion.p>
                  <motion.p 
                    className={`text-sm font-medium flex items-center space-x-1 ${
                      stat.changeType === 'positive' 
                        ? 'text-primary' 
                        : 'text-destructive'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <TrendingUp className="h-3 w-3" />
                    <span>{stat.change}</span>
                  </motion.p>
                </div>
                <motion.div
                  className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${stat.color} text-primary-foreground shadow-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </motion.div>
              </div>
              
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
