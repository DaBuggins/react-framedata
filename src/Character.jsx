import './character.css';


export default function Character() {
  let url = "https://wiki.supercombo.gg/w/Street_Fighter_6/";
  const characters = [
    {id: 1, name: "Ryu", image: "https://wiki.supercombo.gg/images/thumb/1/19/SF6_Ryu_Portrait.png/287px-SF6_Ryu_Portrait.png"},
    {id: 2, name: "Chun-Li", image: "https://wiki.supercombo.gg/images/thumb/c/ca/SF6_Chun-Li_Portrait.png/250px-SF6_Chun-Li_Portrait.png"},
    {id: 3, name: "Ken", image: "https://wiki.supercombo.gg/images/thumb/0/05/SF6_Ken_Portrait.png/300px-SF6_Ken_Portrait.png"},
    {id: 4, name: "Guile", image: "https://wiki.supercombo.gg/images/thumb/e/ef/SF6_Guile_Portrait.png/295px-SF6_Guile_Portrait.png"},
    {id: 5, name: "Kimberly", image: "https://wiki.supercombo.gg/images/thumb/7/73/SF6_Kimberly_Portrait.png/300px-SF6_Kimberly_Portrait.png"},
    {id: 6, name: "Lily", image: "https://wiki.supercombo.gg/images/thumb/5/58/SF6_Lily_Portrait.png/300px-SF6_Lily_Portrait.png"},
    {id: 7, name: "Zangief", image: "https://wiki.supercombo.gg/images/thumb/3/36/SF6_Zangief_Portrait.png/300px-SF6_Zangief_Portrait.png"},
    {id: 8, name: "Rashid", image: "https://wiki.supercombo.gg/images/thumb/b/b2/SF6_Rashid_Portrait.png/300px-SF6_Rashid_Portrait.png"},
    {id: 9, name: "Marisa", image: "https://wiki.supercombo.gg/images/thumb/4/44/SF6_Marisa_Portrait.png/300px-SF6_Marisa_Portrait.png"},
    {id: 10, name: "Manon", image: "https://wiki.supercombo.gg/images/thumb/e/e2/SF6_Manon_Portrait.png/300px-SF6_Manon_Portrait.png"},
    {id: 11, name: "Luke", image: "https://wiki.supercombo.gg/images/thumb/f/f7/SF6_Luke_Portrait.png/300px-SF6_Luke_Portrait.png"},
    {id: 12, name: "Juri", image: "https://wiki.supercombo.gg/images/thumb/1/15/SF6_Juri_Portrait.png/300px-SF6_Juri_Portrait.png"},
    {id: 13, name: "JP", image: "https://wiki.supercombo.gg/images/thumb/4/45/SF6_JP_Portrait.png/246px-SF6_JP_Portrait.png"},
    {id: 14, name: "Jamie", image: "https://wiki.supercombo.gg/images/thumb/a/a7/SF6_Jamie_Portrait.png/300px-SF6_Jamie_Portrait.png"},
    {id: 15, name: "E.Honda", image: "https://wiki.supercombo.gg/images/thumb/6/6b/SF6_Ehonda_Portrait.png/300px-SF6_Ehonda_Portrait.png"},
    {id: 16, name: "Dhalsim", image: "https://wiki.supercombo.gg/images/thumb/e/e7/SF6_Dhalsim_Portrait.png/300px-SF6_Dhalsim_Portrait.png"},
    {id: 17, name: "Dee_Jay", image: "https://wiki.supercombo.gg/images/thumb/5/52/SF6_Dee_Jay_Portrait.png/300px-SF6_Dee_Jay_Portrait.png"},
    {id: 18, name: "Cammy", image: "https://wiki.supercombo.gg/images/thumb/1/12/SF6_Cammy_Portrait.png/300px-SF6_Cammy_Portrait.png"},
    {id: 19, name: "Blanka", image: "https://wiki.supercombo.gg/images/thumb/4/43/SF6_Blanka_Portrait.png/300px-SF6_Blanka_Portrait.png"},
    {id: 20, name: "A.K.I.", image: "https://wiki.supercombo.gg/images/thumb/1/1b/SF6_A.K.I._Portrait.png/300px-SF6_A.K.I._Portrait.png"},
  ]
  return (
    <div> 
      <ul className='charlist'>
      {characters.map((c) => {
        return (                  
              <li className='charli' key={c.id}>
                <b>{c.name}</b>
                <a href={url + c.name}>
                  <img src={c.image} alt="" />
                </a>
              </li>              
        );
      })}
      </ul>
    </div>
  );
}
