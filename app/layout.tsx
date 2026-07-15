import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Twisters Restaurant and Bar | Authentic African Cuisine in Ife, Osun State',
  description: 'Twisters Restaurant and Bar serves authentic African flavors, fresh local dishes, and refreshing drinks in Ife, Osun State, Nigeria. Dine in, takeaway, or delivery available.',
  keywords: 'African restaurant, Ife, Osun State, Nigerian food, Jollof rice, Suya, restaurant, bar, delivery, takeaway',
  openGraph: {
    title: 'Twisters Restaurant and Bar',
    description: 'Authentic African Flavors Served Fresh Every Day in Ife, Osun State',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
