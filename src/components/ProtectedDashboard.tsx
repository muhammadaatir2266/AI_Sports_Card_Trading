'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { Dashboard } from './Dashboard'
import { AuthModal } from './AuthModal'
import { Button } from './ui/Button'

export function ProtectedDashboard() {
  const { isAuthenticated } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <>
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full"
          >
            <div className="bg-card rounded-xl border shadow-lg p-6 sm:p-8 text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-4 sm:mb-6"
              >
                <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </motion.div>
              
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Authentication Required
              </h1>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Please sign in to access the AI Sports Card Trading Dashboard
              </p>
              
              <Button
                onClick={() => setShowAuthModal(true)}
                className="w-full"
                size="lg"
              >
                <Shield className="h-5 w-5 mr-2" />
                Sign In to Continue
              </Button>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Default Credentials:</strong><br />
                  Username: admin<br />
                  Password: sports_card_admin_2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    )
  }

  return <Dashboard />
}

