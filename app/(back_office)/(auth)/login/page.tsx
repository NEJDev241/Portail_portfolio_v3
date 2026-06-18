
export default function LoginPage()
{

    return (<>

        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            
            {/* Logo */}
            <div className="mb-4">
                <span className="font-holtwood text-2xl text-primary">PORTAIL </span>
                <span className="font-inclusive text-2xl">Porfolio</span>
            </div>

            {/* Sous-titre */}
            <p className="text-gray-500 mb-6 font-poppins">Veuillez vous connecter</p>

            {/* Champ email */}
            <input
                type="email"
                placeholder="exemple@gmail.fr"
                className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
            />

            {/* Champ mot de passe */}
            <input
                type="password"
                placeholder="*******************"
                className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-6 outline-none focus:border-primary"
            />

            {/* Bouton connexion */}
            <button className="w-full font-poppins bg-primary text-white py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 cursor-pointer">
             Connexion
            </button>

        </div>
      </div>
        
    </>)
}