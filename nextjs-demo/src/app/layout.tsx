import './globals.css'

export const metadata = {
  title: 'Demo App',
  description: 'App for learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
