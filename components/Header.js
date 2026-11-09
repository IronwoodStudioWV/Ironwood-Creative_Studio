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
              <span className={styles.logoName}>Ironwood</span>
              <p>Creative Studio</p>
            </div>
          </Link>
        </div>
        <nav id="site-nav" aria-label="Main" className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/#creatures" onClick={() => setIsOpen(false)}>Creatures</Link>
          <Link href="/apple-of-my-eye" onClick={() => setIsOpen(false)}>Apple of My Eye</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
        <button 
          className={styles.hamburger} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="site-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
