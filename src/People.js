import React from 'react';

const People = ({people, deletePerson }) => {

    return(
       <div className="person-list">
           {
               people.map(person => {
                   return (
                       <div className="person" key={person.id}>
                           <div>Name: {person.name}</div>
                           <div>Age: {person.age}</div>
                           <button onClick={() => {deletePerson(person.id)}}>Delete</button>
                       </div>
                   )
               })
           }
       </div>
    )

}

export default People