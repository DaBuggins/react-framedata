export default function Character({ characters }) {
  return (
    <div>
      {characters.map((c) => {
       return <p>{c.name}</p>
      })}
    </div>
  );
}
