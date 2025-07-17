import "./globals.css";

export const metadata = {
  title: "Ocean Depths - Explore the Deep Blue",
  description: "Voyage into the blue and explore the mysteries of our oceans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
