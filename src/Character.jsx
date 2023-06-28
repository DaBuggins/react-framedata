import Chun from "./Chun";

export default function Character({ characters }) {
    let url="https://wiki.supercombo.gg/w/Street_Fighter_6/";
  return (    <div>        
       {characters.map((c) => {
        return (
          <p>
          <b>{c.name}</b> 
            <a href={url + c.name}>
              <img src={c.image} alt="" />
            </a>
          </p>
        );
      })}
    </div>
  );
}
