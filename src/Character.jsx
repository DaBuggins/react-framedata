export default function Character({ characters }) {
  let url = "https://wiki.supercombo.gg/w/Street_Fighter_6/";
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
