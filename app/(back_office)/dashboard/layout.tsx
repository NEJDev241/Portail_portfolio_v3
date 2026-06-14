import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Portail Portfolios | administration",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) 
{
    return (
        <html lang="fr" >
            <body >
                {children}
            </body>
        </html>
    );
}
