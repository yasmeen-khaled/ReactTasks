import React from 'react';

const Students = ({students}) => {
    console.log(students)
    return (
        <div>
            {students.map((std)=><h1 key={std.id}>{std.name}</h1>)}
        </div>
    );
};

export default Students;