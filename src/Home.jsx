import HeaderLayout from './Components/HeaderLayout'
import Footer from './Components/Footer'

const Home =()=> {
    return (
         <div className="main">
            <div className="container-fluid">
                <div className="row">
                    <HeaderLayout />
                </div>
                <div className="container-sm mt-5">
                    <div className="row">               
                       <div className="col col-md-12">
                       <div>
                            <p className="display-1" >Utbildad systemutvecklare inom .NET boende i Hässelby i Stockholm.</p>
                        </div>
                       </div>
                    </div>
                </div>
                <Footer/>
            </div>         
        </div>
    )
}
export default Home