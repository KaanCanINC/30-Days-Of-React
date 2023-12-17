import React from "react";
import TechList from './TechList'
import UserCard from './UserCard'

const Main = () => {
    const techs = ["HTML", "CSS", "JAVA", "JS", "C#",]
    const data = {
        'image': "https://i.hizliresim.com/4g752eo.jpg",
        'firstName': 'Kaan',
        'lastName': 'INC',
        'description': 'JR. Front-End Developer, Turkiye',
        'verify': true,
        'date': new Date()
    }

    // const user = [...data]

    return (
        <main>
            <div className="main-wrapper">
                <UserCard user={data} />

                <h2>SKILLS</h2>
                <TechList tech={techs} />
            </div>
        </main>
    )
}

export default Main