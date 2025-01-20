export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
      <body>
        {/* Render only the Studio content */}
        {children}
      </body>
    </html>
    );
  }