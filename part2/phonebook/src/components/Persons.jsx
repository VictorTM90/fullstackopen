
export const Persons = ({ person, handleDelete }) => {
  const {name, number, id} = person
    return (
      <div key={id}>
        <p >
          nombre: {name} <span>{number}</span> <button onClick = {()=>handleDelete(id, name)}>Delete</button>
        </p>
      </div>
    );
  
};
