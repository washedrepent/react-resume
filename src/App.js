//import styles from './App.css';
import "./App.css";
//import components
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";

//import data for use in the app
import personalData from "./data/personalData";
import skillsData from "./data/skillsData";
import experienceData from "./data/experienceData";
import educationData from "./data/educationData";

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <div className='left-side'>
                    <div className='left-side-container'>
                        <PersonalInfo {...personalData} />
                    </div>
                </div>
                <div className='right-side'>
                    <div className='right-side-container'>
                        <Skills skillsData={skillsData} />
                        <Experience experienceData={experienceData} />
                        <Education educationData={educationData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
