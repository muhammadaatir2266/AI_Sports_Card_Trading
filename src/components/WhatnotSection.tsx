'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Gavel, Eye, Zap } from 'lucide-react'
import { formatCurrency, formatTimeRemaining } from '@/lib/utils'
import { WhatnotAuction } from '@/types'
import { generateMockData } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

interface WhatnotSectionProps {
  fullWidth?: boolean
}

export function WhatnotSection({ fullWidth = false }: WhatnotSectionProps) {
  const { auctions } = generateMockData()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <Card className={`${fullWidth ? '' : 'h-auto max-h-96 overflow-y-auto'}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Zap className="h-6 w-6 text-accent" />
            </motion.div>
            <CardTitle className="text-xl">Live Whatnot Auctions</CardTitle>
          </div>
          <motion.div 
            className="flex items-center space-x-2 text-sm text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="h-2 w-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Live</span>
          </motion.div>
        </div>
      </CardHeader>

      <CardContent>
        <motion.div 
          className="space-y-3 md:space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {auctions.map((auction: WhatnotAuction, index) => (
            <motion.div 
              key={auction.id} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group border rounded-xl p-3 md:p-4 hover:bg-accent/50 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/20 flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="text-xs text-primary font-medium">Card</span>
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-medium truncate group-hover:text-primary transition-colors">
                    {auction.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground truncate hidden sm:block">
                    {auction.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 md:space-x-4 mt-2 text-xs md:text-sm text-muted-foreground">
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{auction.timeRemaining}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-1 hidden sm:flex"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Users className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{auction.watchers}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Gavel className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{auction.bids}</span>
                    </motion.div>
                  </div>
                </div>
                
                <div className="text-right flex-shrink-0">
                  <motion.div 
                    className="text-base md:text-lg font-semibold text-primary"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                  >
                    {formatCurrency(auction.currentBid)}
                  </motion.div>
                  <div className="text-xs md:text-sm text-muted-foreground hidden md:block">
                    by {auction.seller}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 hidden lg:block">
                    {auction.category} • {auction.condition}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!fullWidth && (
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              className="text-primary hover:underline text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Auctions →
            </motion.button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
