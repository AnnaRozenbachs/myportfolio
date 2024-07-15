import HeaderLayout from "./Components/HeaderLayout"
import Footer from './Components/Footer'

const Contact =()=> {
    return (
          <div className="main">
            <div className="container-fluid">
                <div className="row">
                    <HeaderLayout />
                </div>
                <div className="container-sm mt-5">
                    <div className="row">               
                        <div className="contact-content">
                            <p className="display-1">Intresserad av att jobba med mig eller bara vill säga "hej" så kan du kontakta mig via mail
                                <a href="mailto:annarozenbachs@gmail.com"> annarozenbachs@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default Contact