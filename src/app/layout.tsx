// app/layout.tsx
import Navbar from './components/navbar';
import './globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-blue-100 to-blue-800 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
