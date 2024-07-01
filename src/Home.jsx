import Footer from "./Components/Footer"
import Header from "./Components/HeaderHeadline"
import RightContainerLayout from './Components/RightContainerLayout'

const Home =()=> {
    return (
        <div className="main">
            <div className="left-container">
                <Header />
                <div className="home-content">
                    <p>Utbildad systemutvecklare inom .NET boende i Hässelby i Stockholm.</p>
                </div>
                <Footer />
            </div>
            <RightContainerLayout/>
        </div>
    )
}
export default Home