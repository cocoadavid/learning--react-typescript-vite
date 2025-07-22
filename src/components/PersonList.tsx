import { type Name } from "./Person.types";

type PersonListProps = {
    nameList: Name[]
}

const PersonList = (props: PersonListProps) => {
    return ( 
        <div>
            {props.nameList.map(name => {
                return (
                    <h2 key={name.last}>{name.first} {name.last}</h2>
                )
            })}
        </div>
     );
}
 
export default PersonList;