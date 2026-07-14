'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@utils/Navbar';

export default function AppShell({ children, logoClassName }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div
      className={isHome ? 'home-page' : 'page-shell'}
      data-hydrate-marker=""
    >
      <Navbar logoClassName={logoClassName} overlay={isHome} />
      {children}
    </div>
  );
}
