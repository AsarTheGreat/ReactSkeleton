export default function Fruit({id, name, count})
{
    //{(count > 10) ? <li key={id} id={id}>{name} {count}</li> : ""}
    return(
        <div>
            <li key={f.id} id={f.id}>{f.name} {f.count}</li>            
        </div>
    );
}