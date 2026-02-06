import { useState, useEffect } from "react";


export const Person = ({name, surName, age}) => {

const [person, setPerson] = useState({});

useEffect(() => {
    async function getPersonData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const personFetch = await response.json();
    setPerson(personFetch);
    };
    getPersonData();
  }, []);

   console.log(person);

  return (
    <>
    <div>
        <h2>Name: {person.name}</h2>
        <h2>Surname: {surName}</h2>
        <h2>Age: {age}</h2>
    
    </div>
    </>
  )
}
