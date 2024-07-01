import Footer from "./Components/Footer"
import Header from "./Components/HeaderHeadline"
import RightContainerLayout from "./Components/RightContainerLayout"

const Contact =()=> {
    return (
        <div className="main">
            <div className="left-container">
                <Header />
                <div className="contact-content">
                    <p>Intresserad av att jobba med mig eller bara vill säga "hej" så kan du kontakta mig via mail
                        <a href="mailto:annarozenbachs@gmail.com"> annarozenbachs@gmail.com</a>
                    </p>
                </div>
                <Footer />
            </div>
            <RightContainerLayout/>
        </div>
    )
}
export default Contact