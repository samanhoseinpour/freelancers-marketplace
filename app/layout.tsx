import './globals.css';
import { Navbar, Footer } from '@/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelancers Marketplace',
  description:
    'Platform for sharing motion graphics, animations, and software demos with potential clients and collaborators.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
