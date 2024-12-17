import "./globals.scss";

export const metadata = {
  title: "GameDex",
  description: "GameDex App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"box"}>{children}</body>
    </html>
  );
}
