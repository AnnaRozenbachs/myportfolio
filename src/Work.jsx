import Footer from "./Components/Footer"
import Header from "./Components/HeaderHeadline"
import RightContainerLayout from './Components/RightContainerLayout'
import CVImage from './Images/91476fe20d80e0950b1888efb2d76903.png'
import MunamiiImage from './Images/1498589015.png'

const Work =()=> {
    return (
        <div className="main">
            <div className="left-container">
                <Header />
                <div className="work-content">
                    <h1 className="work-content-headline">Några av mina projekt</h1>
                    <div className="work-container">
                        <div className="work-image-container">
                            <img src={MunamiiImage} ></img>    
                        </div>
                        <div className="work-description-container">
                            <h3>Munamii Cakery</h3>
                            <p>Kunden ville ha en ny fräsch design av deras hemsida. Den är byggd i HTML och CSS. Här är en länk till siten
                            <a target="_blank" href="https://annarozenbachs.github.io/Munamii-Cakery/"> https://annarozenbachs.github.io/Munamii-Cakery/</a></p>
                        </div>
                    </div>
                    <div className="work-container">
                        <div className="work-image-container">
                            <img src={CVImage}></img>
                        </div>
                        <div className="work-description-container">
                            <h3>CV</h3>
                            <p>Jag ville göra en uppdatering av mitt personliga cv och valde då att bygga en site i HTML och CSS. Här är en länk till cv:t
                            <a target="_blank" href="https://annarozenbachs.github.io/CV/"> https://annarozenbachs.github.io/CV/</a></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
           <RightContainerLayout/>
        </div>
    )
}
export default Work