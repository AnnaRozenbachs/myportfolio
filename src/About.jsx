import Footer from "./Components/Footer"
import Header from "./Components/HeaderHeadline"
import RightContainerLayout from './Components/RightContainerLayout'
import Image from './Images/1690063986012.jpeg'

const About =()=> {
    return (
        <div className="main">
            <div className="left-container">
                <Header />
                <div className="about-content">
                    <div className="about-image-container">
                        <img src={Image}></img>
                    </div>
                    <div className="about-description-container">
                        <h1>Hej,</h1>
                        <p>
                            Jag heter Anna och är en tjej på 35 år och är systemutvecklare.
                            Jag erbjuder främst tjänster inom back-end utveckling i .NET miljö, men är även öppen för 
                            front-end/fullstack projekt. Några exempel på typer av system som jag utvecklat 
                            är e-handelssystem och e-learningssystem.
                        </p>
                        <p>
                            Mitt intresse av utveckling började för ett antal år sen då jag pluggade en
                            utbildning inom systemutveckling på Nackademins Yrkeshögskola i Stockholm. Sen dess
                            har intresset bara växt mer och mer och jag är alltid ute efter nya jobbmöjligheter.
                        </p>
                        <p>
                            Just nu bor jag i Hässelby Villastad, men jag är uppvuxen i Akalla där jag har bott större delen av mitt liv.
                            Som person är jag väldigt glad, postitiv och självständig.
                        </p>
                        <div className="expoeriences">
                            <h4>Erfarenheter</h4>
                            <p>NoA Ignite Sweden - Backendutvecklare, 2020-2023 </p>
                            <p>Itancan Consulting AB - Systemutvecklare, 2019-2020 </p>
                            <p>Fakta webbyrå - Systemutvecklare, 2014-2019</p>
                        </div>                  
                    </div>
                </div>
                <Footer />
            </div>
           <RightContainerLayout/>        
           </div>
    )
}
export default About