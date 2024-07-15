import RightContainerLayout from './Components/HeaderLayout'
import CVImage from './Images/91476fe20d80e0950b1888efb2d76903.png'
import MunamiiImage from './Images/1498589015.png'
import Footer from './Components/Footer'

const Work =()=> {
    return (
        <div className="main">
            <div className="container-fluid">
                <div className="row">
                    <RightContainerLayout />
                </div>
                <div className="container-sm mt-5">
                <h1 className="work-content-headline">Några av mina projekt</h1>
                    <div className="mt-5 row">
                        <div className="col col-md-4">
                            <img className="img-fluid" src={CVImage}></img>
                        </div>
                        <div className="about-description-container col col-md-6">
                            <div className="work-description-container">
                                <h3>CV</h3>
                                <p>Jag ville göra en uppdatering av mitt personliga cv och valde då att bygga en site i HTML och CSS. Här är en länk till cv:t
                                    <a target="_blank" href="https://annarozenbachs.github.io/CV/"> https://annarozenbachs.github.io/CV/</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col col-md-4">
                            <img className="img-fluid" src={MunamiiImage}></img>
                        </div>
                        <div className="about-description-container col col-md-6">
                            <div className="work-description-container">
                                <h3>Munamii Cakery</h3>
                                <p>Kunden ville ha en ny fräsch design av deras hemsida. Den är byggd i HTML och CSS. Här är en länk till siten
                                    <a target="_blank" href="https://annarozenbachs.github.io/Munamii-Cakery/"> https://annarozenbachs.github.io/Munamii-Cakery/</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>

    )
}
export default Work