"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Substitua pelo número de WhatsApp real
    window.open("https://wa.me/5500000000000", "_blank")
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        delay: 1,
      }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.4)",
            "0 0 0 20px rgba(34, 197, 94, 0)",
            "0 0 0 40px rgba(34, 197, 94, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="rounded-full"
      >
        <Button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full p-4 shadow-2xl transition-all duration-300 border-0"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{
              duration: 0.6,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  )
}
