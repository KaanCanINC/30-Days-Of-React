import Techs from "./Techs/Techs";
import Input from "./Subscribe/Input";
import Button from "./Subscribe/Button";

const Main = ({ text, onClick, techs, header }) => (

    <main>
        <div className="main-wrapper">

            <div className="techs-wrapper">
                <h2>{header}</h2>

                <ul>
                    <Techs techs={techs} />
                </ul>
            </div>

            <div className="subscribe-wrapper">
                <h1>SUBSCRIBE</h1>
                <h3>Sign up with your email address to receive news and updates</h3>

                <Input placeholder='First Name' type='text' />
                <Input placeholder='Last Name' type='text' />
                <Input placeholder='Email' type="email" />

                <Button text={text} onClick={onClick} />

            </div>

        </div>
    </main>

)

export default  Main