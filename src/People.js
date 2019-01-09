import React from 'react';

const People = ({people}) => {

    return(
       <div className="person-list">
           {
               people.map(person => {
                   return (
                       <div className="person" key={person.id}>
                           <div>Name: {person.name}</div>
                           <div>Age: {person.age}</div>
                       </div>
                   )
               })
           }
       </div>
    )

}

export default People