const sportstars: { name: string; sport: string; achievements: string }[] = [
  { name: "Rohit Sharma", sport: "Cricket", achievements: "Arjuna Awardee 2015; Dhyan Chand Khel Ratna Awardee 2020; Captain of Indian Cricket Team" },
  { name: "Ajinkya Rahane", sport: "Cricket", achievements: "Arjuna Awardee 2016; Represented India in Tests, ODIs and T20Is" },
  { name: "Abhishek Sharma", sport: "Cricket", achievements: "Captain of U-19 Asia Cup winning team; Represented India in Tests, ODIs" },
  { name: "Avesh Khan", sport: "Cricket", achievements: "Vikram Award Winner (MP); Represented India in Tests and ODIs" },
  { name: "Krishan B Pathak", sport: "Hockey", achievements: "Arjuna Awardee 2023; Goalkeeper for Indian Hockey Team" },
  { name: "V R Raghunath", sport: "Hockey", achievements: "Olympian; Arjuna Awardee 2016" },
  { name: "Kothajit Singh", sport: "Hockey", achievements: "Olympian" },
  { name: "S K Uthapa", sport: "Hockey", achievements: "Olympian" },
  { name: "Sharmila Devi", sport: "Women Hockey", achievements: "Olympian; Indian Women's Hockey Team" },
  { name: "Sheetal Devi", sport: "Para Archery", achievements: "World Para Archery Champion; Paralympic bronze; Arjuna Awardee" },
  { name: "Sumit Nagal", sport: "Tennis", achievements: "First ATP Challenger title at Intaro Open 2026" },
  { name: "Ramkumar Ramanathan", sport: "Tennis", achievements: "Men's Doubles title at Bonn Open ATP Challenger 2026" },
  { name: "Padmini Rout", sport: "Chess", achievements: "Silver at 30th Jean-Claude LoubatiÃ¨re Chess Festival 2026" },
  { name: "Ashmita Chaliha", sport: "Badminton", achievements: "First Indian to win Women's Singles title at VICTOR Korea Masters 2026" },
  { name: "Manav Thakkar", sport: "Table Tennis", achievements: "WTT Contender Lagos Men's Doubles champion; Singapore Smash semifinalist" },
  { name: "Laxman Rawat", sport: "Heyball", achievements: "Gold at National Heyball Championship 2026" },
  { name: "Brijesh Dhamani", sport: "Heyball", achievements: "Bronze at National Heyball Championship 2026" },
  { name: "Savita Ajjanakatti", sport: "Para Table Tennis", achievements: "Bronze at ITTF World Para Future Aktobe 2026; Gold at UTT Para National 2026-27" },
];

export default function Sportstars() {
  return (
    <>
      <h1>IndianOil Sportstars</h1>
      <p>Meet the athletes supported by IndianOil â€” champions across cricket, hockey, tennis, chess, badminton, table tennis, and para sports.</p>
      <img className="page-img" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Barsapara_Cricket_Stadium_match_under_floodlights.jpg/960px-Barsapara_Cricket_Stadium_match_under_floodlights.jpg" alt="Cricket stadium" />
      <table>
        <thead>
          <tr><th>Name</th><th>Sport</th><th>Achievements</th></tr>
        </thead>
        <tbody>
          {sportstars.map((s) => (
            <tr key={s.name}>
              <td><b>{s.name}</b></td>
              <td>{s.sport}</td>
              <td>{s.achievements}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="img-row">
        <img className="page-img" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/ArcheryGermanyEarly1980s-2.jpg/960px-ArcheryGermanyEarly1980s-2.jpg" alt="Archery" />
        <img className="page-img" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Volant_badminton.jpg" alt="Badminton" />
      </div>
      <img className="page-img" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Chess_game_Staunton_No._6_perfil_view_8.jpg/960px-Chess_game_Staunton_No._6_perfil_view_8.jpg" alt="Chess" />
    </>
  );
}

