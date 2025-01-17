import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import SiriImage from "./images/siri.png"
import CortanaImage from "./images/cortana.png"
import 'bulma/css/bulma.css'

function App() {
    return (<div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                    Personal Digital Assistance
                </p>
            </div>
        </section>
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Siri" handle="@siri87" image={SiriImage}/>
                    </div>
                </div>
            </section>
        </div>
    </div>)
}

export default App;