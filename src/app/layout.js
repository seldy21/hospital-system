import localFont from 'next/font/local';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
