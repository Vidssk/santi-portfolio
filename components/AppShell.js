'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@utils/Navbar';

export default function AppShell({ children, logoClassName }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) {
    return children;
  }

  return (
    <div className="page-shell">
      <Navbar logoClassName={logoClassName} />
      {children}
    </div>
  );
}
