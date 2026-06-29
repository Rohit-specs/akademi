import "./../styles/scss/style.scss";
export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
      {children}</body>
    </html>
  );
}
