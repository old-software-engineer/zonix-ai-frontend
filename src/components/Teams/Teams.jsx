import TeamCard from "./TeamCard";

function Teams() {
  const teams = [
    {
      id: 1,
      name: "Marketing Team",
      created_by: " (Created by Kenny",
      created_at: " on 02/12/2024)",
    },
    {
      id: 2,
      name: "Fun Team",
      created_by: "(Created by Kenny",
      created_at: "on 02/12/2024)",
    },
  ];
  return (
    <div className="mt-10">

   
    <div className="bg-blue-100 rounded-2xl min-h-[600px] container mx-auto">
      <div>
        <h1 className="font-semibold ml-10 pt-4 text-2xl">My Project Teams</h1>
      </div>
      <div className="flex flex-wrap gap-2 ml-8">
        {teams.map((team) => (
          <TeamCard {...team} key={team.id}/>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Teams;
