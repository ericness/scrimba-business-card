import About from './About'
import Interests from './Interests'

function MainContent(){
    return (
        <div className="main-content">
            <h1>Eric Ness</h1>
            <h2>Principal Machine Learning Engineer</h2>
            <About />
            <Interests />
        </div>
    )
}

export default MainContent