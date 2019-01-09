import React from 'react';

const People = (props) => {

    const {people} = props

    const personList = people.map(person => {
        return (
            <div className="person" key={person.id}>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
            </div>
        )
    })

    return(
       <div className="person-list">
           {personList}
       </div>
    )

}

export default People