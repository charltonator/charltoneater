
import { Oswald } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline } from "@mui/material";
import { getServerSession } from "next-auth";
import SessionProvider from "./(components)/SessionProvider";

const inter = Oswald({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <Box>
          <CssBaseline />
          <SessionProvider session={session}>{children}</SessionProvider>
        </Box>
      </body>
    </html>
  );
}
