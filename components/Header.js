'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoImage}>
              <Image
                src="/images/ironwood-logo.png"
                alt="Ironwood Creative Studio Logo"
                width={60}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.logoText}>
              <h1>Ironwood</h1>
              <p>Creative Studio</p>
            </div>
          </Link>
        </div>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
        <button 
          className={styles.hamburger} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
