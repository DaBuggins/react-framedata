export default function Character() {
  let url = "https://wiki.supercombo.gg/w/Street_Fighter_6/";
  const characters = [
    {id: 1, name: "Ryu", image: "https://wiki.supercombo.gg/images/thumb/1/19/SF6_Ryu_Portrait.png/287px-SF6_Ryu_Portrait.png"},
    {id: 2, name: "Chun-Li", image: "https://wiki.supercombo.gg/images/thumb/c/ca/SF6_Chun-Li_Portrait.png/250px-SF6_Chun-Li_Portrait.png"},
    {id: 3, name: "Ken", image: "https://wiki.supercombo.gg/images/thumb/0/05/SF6_Ken_Portrait.png/300px-SF6_Ken_Portrait.png"},
    {id: 4, name: "Guile", image: "https://wiki.supercombo.gg/images/thumb/e/ef/SF6_Guile_Portrait.png/295px-SF6_Guile_Portrait.png"},
    {id: 5, name: "Kimberly", image: "https://wiki.supercombo.gg/images/thumb/7/73/SF6_Kimberly_Portrait.png/300px-SF6_Kimberly_Portrait.png"},
    {id: 6, name: "Lily", image: "https://wiki.supercombo.gg/images/thumb/5/58/SF6_Lily_Portrait.png/300px-SF6_Lily_Portrait.png"}
  ]
  return (
    <div> 
      <ul style={{ display: "flex" }}>
      {characters.map((c) => {
        return (                  
              <li>
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
