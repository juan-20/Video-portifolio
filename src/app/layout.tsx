import './globals.css'
import {  Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'Leadster',
  description: 'Menos conversinha, mais conversão.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}
