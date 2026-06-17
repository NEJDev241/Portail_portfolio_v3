import type { Metadata } from "next";
import "@/style/tailwind.css";



export const metadata: Metadata = {
  title: "Portail Portfolios | administration",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) 
{
    return (
        <html lang="fr" >
           <body className="bg-background">
            <div className="flex h-screen">
                {/* La Sidebar */}
                <aside className="w-64 bg-primary text-white p-4">
                    <div className="flex flex-col h-full justify-between">
                    
                        {/* Haut : Logo + Navigation */}
                        <div className="flex flex-col gap-4">
                            {/* Le Logo */}
                            <div className="mb-6 flex">
                                <span className="font-holtwood text-xl">PORTAIL</span>
                                <span className="font-inclusive text-xl">Portfolio</span>
                            </div>

                            {/* Le Bouton Accueil */}
                            <button className="flex justify-center items-center text-center font-semibold gap-2 bg-white text-primary px-4 py-2 rounded-lg w-full cursor-pointer shadow">
                            Accueil
                            </button>
                        </div>

                        {/* Bas : Bouton de Déconnexion */}
                        <button className="flex justify-center items-center text-center font-semibold bg-white text-primary px-4 py-2 rounded-lg w-full cursor-pointer shadow">
                            Déconnexion
                        </button>
                    </div>
                </aside>

                {/* Le Contenu principal */}
                <div className="flex flex-col flex-1">
                    {/* Le Header */}
                    <header className="h-16 flex items-center ml-6">
                        {/* La Barre de recherche */}
                        <div className="flex items-center gap-4 w-full px-6 justify-between">
                            <input 
                                type="text" 
                                placeholder="Rechercher" 
                                className="bg-white rounded-full px-4 py-2 outline-none text-sm flex-1 max-w-md shadow"
                            />
                        </div>

                        {/* Le profil Administrateur */}
                        <div className="flex gap-4 justify-center items-center mr-12">
                            {/* photo de prodil */}
                            <div className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-primary"></div>
                            <div className="flex-col gap-0.5">
                                <p className="text-base font-medium">Adimistrateur</p>
                                <p className="text-sm ">Admin@gmail.com</p>
                            </div>
                        </div>
                    </header>

                    {/*La Page principale elle-même (tableau de profils) */}
                    <main className="flex-1 p-6">
                        {children}
                    </main>
                </div>
             </div>
            </body>
        </html>
    );
}
