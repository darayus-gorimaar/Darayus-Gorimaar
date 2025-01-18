
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import styles from './FuturisticDropdown.module.css'

interface FuturisticDropdownProps {
  title: string
  information: string
}

export const FuturisticDropdown: React.FC<FuturisticDropdownProps> = ({ title, information }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className={styles.dropdown}>
      <motion.div
        className={styles.dropdownHeader}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.button
          className={styles.dropdownButton}
          onClick={toggleDropdown}
        >
          <span>{title}</span>
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <ChevronDown />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.dropdownContent}
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.dropdownText}
              >
                {information}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}