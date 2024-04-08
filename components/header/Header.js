import React from 'react';
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './header.module.css';

export default function Header () {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="A place with food on it" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">
              <p>Meals</p>
            </Link>
          </li>
          <li>
            <Link href="/meals/share">
              <p>Share Meals</p>
            </Link>
          </li>
          <li>
            <Link href="/community">
              <p>Community</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
