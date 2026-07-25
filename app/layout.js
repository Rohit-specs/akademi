import "./../styles/scss/style.scss";
import Toast from "/helper/Toast";
export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toast/>
      </body>
    </html>
  );
}
