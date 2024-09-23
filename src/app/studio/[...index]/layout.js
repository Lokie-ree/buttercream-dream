export const metadata = {
  title: "Sanity Studio",
  description: "Edit your content here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
