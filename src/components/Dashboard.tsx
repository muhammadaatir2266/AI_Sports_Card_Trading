'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from './Header'
import { StatsCards } from './StatsCards'
import { WhatnotSection } from './WhatnotSection'
import { EbaySection } from './EbaySection'
import { ProfitCalculator } from './ProfitCalculator'
import { AIInsights } from './AIInsights'
import { AnalyticsDashboard } from './AnalyticsDashboard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-4 md:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 bg-card/50 backdrop-blur-sm border border-border/50 p-1">
              <TabsTrigger 
                value="overview"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Overview</span>
                <span className="sm:hidden">Home</span>
              </TabsTrigger>
              <TabsTrigger 
                value="whatnot"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground text-xs sm:text-sm"
              >
                <span className="hidden lg:inline">Whatnot Auctions</span>
                <span className="lg:hidden">Whatnot</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ebay"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground text-xs sm:text-sm"
              >
                <span className="hidden lg:inline">eBay Analysis</span>
                <span className="lg:hidden">eBay</span>
              </TabsTrigger>
              <TabsTrigger 
                value="insights"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground text-xs sm:text-sm sm:col-span-1 col-span-2"
              >
                <span className="hidden sm:inline">AI Insights</span>
                <span className="sm:hidden">Insights</span>
              </TabsTrigger>
              <TabsTrigger 
                value="analytics"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground text-xs sm:text-sm sm:col-span-1 col-span-3 lg:col-span-1"
              >
                Analytics
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            <TabsContent value="overview" className="space-y-4 md:space-y-8">
              <motion.div
                key="overview"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4 md:space-y-8"
              >
                <StatsCards />
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <WhatnotSection />
                  <EbaySection />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <ProfitCalculator />
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="whatnot">
              <motion.div
                key="whatnot"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <WhatnotSection fullWidth />
              </motion.div>
            </TabsContent>

            <TabsContent value="ebay">
              <motion.div
                key="ebay"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <EbaySection fullWidth />
              </motion.div>
            </TabsContent>

            <TabsContent value="insights">
              <motion.div
                key="insights"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AIInsights />
              </motion.div>
            </TabsContent>

            <TabsContent value="analytics">
              <motion.div
                key="analytics"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AnalyticsDashboard />
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </main>

    </div>
  )
}
