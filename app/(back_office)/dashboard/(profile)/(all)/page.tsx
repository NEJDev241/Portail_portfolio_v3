import "@/style/tailwind.css";

const profils = [
  {
    id: 1,
    nom: "Mombo",
    prenom: "Jean Pierre",
    specialite: "Front-end",
    description: "Designer et product...",
    lienPortfolio: "https://www.githubPage.io",
  },
  {
    id: 2,
    nom: "Obame",
    prenom: "Marie",
    specialite: "Back-end",
    description: "Développeur Node...",
    lienPortfolio: "https://www.githubPage.io",
  },
  {
    id: 3,
    nom: "Nzeng",
    prenom: "Paul",
    specialite: "Full-stack",
    description: "Dev et architecte...",
    lienPortfolio: "https://www.githubPage.io",
  },
]

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Profils</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer shadow">
           Ajouter un profil +
        </button>
      </div>

      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="border-b text-left text-gray-500">
            <th className="p-4">Profil</th>
            <th className="p-4">Nom</th>
            <th className="p-4">Prénom</th>
            <th className="p-4">Spécialité</th>
            <th className="p-4">Description</th>
            <th className="p-4">Lien portfolio</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {profils.map((profil) => (
            <tr key={profil.id} className="shadow  hover:bg-gray-50 hover:border-b">
              <td className="p-4">
                <div className="w-8 h-8 rounded-full flex justify-center items-center text-white bg-primary">{profil.id}</div>
              </td>
              <td className="p-4">{profil.nom}</td>
              <td className="p-4">{profil.prenom}</td>
              <td className="p-4">{profil.specialite}</td>
              <td className="p-4">{profil.description}</td>
              <td className="p-4">{profil.lienPortfolio}</td>
              <td className="p-4">
                <button className="cursor-pointer">. . .</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}