import styles from '@/styles/Sidebar.module.css';
import { motion } from 'framer-motion';

export default function SidebarItem({ iconLetter, label, colors }) {
  return (
   <motion.li
      className={styles.item}
      style={{ '--i': colors[0], '--j': colors[1] }}
      whileTap={{ scale: 0.65 }} // ✅ move here
    >
      <span className={styles.icon}>{iconLetter}</span>

      <span className={styles.title} >{label}</span>
      
    </motion.li>
  );
}
