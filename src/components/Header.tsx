'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Settings, Bell, User, LogOut, LogIn, Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { ThemeToggle } from './ThemeToggle'
import { AuthModal } from './AuthModal'
import { useAuth } from '@/contexts/AuthContext'

export function Header() {
  const { isAuthenticated, user, logout } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setMobileMenuOpen(false)
  }

  return (
    <>
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
      />
      
      <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="sticky top-0 z-40 border-b bg-card/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Responsive */}
          <motion.div 
            className="flex items-center space-x-2 md:space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center space-x-2 md:space-x-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </motion.div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AI Sports Card Trading
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Powered by Advanced Analytics</p>
              </div>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.div 
              className="flex items-center space-x-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="h-2 w-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="hidden lg:inline">Live Monitoring</span>
            </motion.div>
            
            <motion.button 
              className="p-2 hover:bg-accent rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="h-5 w-5" />
            </motion.button>
            
            <motion.button 
              className="p-2 hover:bg-accent rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Settings className="h-5 w-5" />
            </motion.button>
            
            <ThemeToggle />
            
            {isAuthenticated ? (
              <>
                <motion.div
                  className="flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-primary font-medium">{user?.username}</span>
                </motion.div>
                
                <motion.button
                  className="p-2 hover:bg-accent/20 rounded-md transition-colors text-destructive"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </motion.button>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-2"
                  size="sm"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <motion.button
              className="p-2 hover:bg-accent rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t mt-3 pt-3 space-y-3"
            >
              <motion.div 
                className="flex items-center space-x-2 text-sm text-muted-foreground px-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="h-2 w-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Live Monitoring</span>
              </motion.div>
              
              <div className="flex items-center space-x-2">
                <motion.button 
                  className="flex-1 p-3 hover:bg-accent rounded-md transition-colors flex items-center justify-center space-x-2"
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Bell className="h-5 w-5" />
                  <span className="text-sm">Notifications</span>
                </motion.button>
                
                <motion.button 
                  className="flex-1 p-3 hover:bg-accent rounded-md transition-colors flex items-center justify-center space-x-2"
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Settings className="h-5 w-5" />
                  <span className="text-sm">Settings</span>
                </motion.button>
              </div>

              {isAuthenticated ? (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/30 rounded-md">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-sm text-primary font-medium">{user?.username}</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 bg-destructive/10 text-destructive hover:bg-destructive/20"
                    variant="outline"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Button
                    onClick={() => {
                      setShowAuthModal(true)
                      setMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
    </>
  )
}