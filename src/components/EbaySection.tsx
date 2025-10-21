'use client'

import { motion } from 'framer-motion'
import { Calendar, DollarSign, TrendingUp, TrendingDown, ShoppingCart } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { EbaySale } from '@/types'
import { generateMockData } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

interface EbaySectionProps {
  fullWidth?: boolean
}

export function EbaySection({ fullWidth = false }: EbaySectionProps) {
  const { ebaySales } = generateMockData()

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
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <ShoppingCart className="h-6 w-6 text-secondary" />
            </motion.div>
            <CardTitle className="text-xl">Recent eBay Sales</CardTitle>
          </div>
          <motion.div 
            className="flex items-center space-x-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Calendar className="h-4 w-4" />
            <span>Last 30 days</span>
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
          {ebaySales.map((sale: EbaySale, index) => (
            <motion.div 
              key={sale.id} 
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
                  whileHover={{ rotate: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="text-xs text-primary font-medium">Sale</span>
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-medium truncate group-hover:text-primary transition-colors">
                    {sale.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                    Sold on {new Date(sale.soldDate).toLocaleDateString()}
                  </p>
                  
                  <div className="flex items-center space-x-2 mt-2 text-xs md:text-sm text-muted-foreground">
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="px-2 py-1 bg-muted rounded-md text-xs">{sale.condition}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="px-2 py-1 bg-muted rounded-md text-xs">{sale.category}</span>
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
                    {formatCurrency(sale.soldPrice)}
                  </motion.div>
                  <div className="text-xs md:text-sm text-muted-foreground hidden md:block">
                    by {sale.seller}
                  </div>
                  <motion.div 
                    className="flex items-center space-x-1 mt-1 hidden sm:flex"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <TrendingUp className="h-3 w-3 text-primary" />
                    <span className="text-xs text-primary font-medium">+5.2%</span>
                  </motion.div>
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
              View All Sales →
            </motion.button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
