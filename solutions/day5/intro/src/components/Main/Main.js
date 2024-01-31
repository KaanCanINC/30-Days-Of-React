import React from "react";
import TechList from "./TechList/TechList.js"    
import UserCard from "./UserCard/UserCard.js"
import style from "/home/kaan/30-Days-Of-React/solutions/day5/intro/src/style.js"
import Button from "./Button/Button.js"

const Main = ({user, techs, greetPeople, handleTime}) => (
    <main>
        <div className="main-wrapper">
            <p>React öğrenmek için ön gereksinimler</p>

            <ul>
                <TechList techs={techs} />
            </ul>
            <UserCard user={user}/>
            <Button text="Karsilama" style={style} onClick={greetPeople} />
            <Button text="Saati Goster" style={style} onClick={handleTime} />
        </div>

    </main>
)

export default Main