import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from './header.module.css';
import { usePathname } from 'next/navigation';
import NavLink from './nav-link';

export default function Header () {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A place with food on it" priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">
              <p>Browse Meals</p>
            </NavLink>
          </li>
          <li>
            <NavLink href="/community">
              <p>Foodies Community</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
