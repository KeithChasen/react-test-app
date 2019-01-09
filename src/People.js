import React from 'react';

const People = ({people, deletePerson }) => {
    const personsList = people.map(person => {
        return (
            <div className="person" key={person.id}>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <button onClick={() => {deletePerson(person.id)}}>Delete</button>
            </div>
        )
    })

    return(
       <div className="person-list">
           { personsList }
       </div>
    )

}

export default People