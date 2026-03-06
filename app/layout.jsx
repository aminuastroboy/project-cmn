import "./globals.css";

export const metadata = {
  title: "Comrade Mustapha Network",
  description: "Official campaign website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
