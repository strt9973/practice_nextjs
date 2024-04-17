import './styles.css';

import ModeProvider from './modeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ModeProvider>
        <body>{children}</body>
      </ModeProvider>
    </html>
  );
}
