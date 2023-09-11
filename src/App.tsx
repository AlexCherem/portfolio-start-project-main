import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/Projects/Projects";
import {Title} from "./layout/sections/title/Title";
import {Footer} from "./layout/footer/Footer";
import {Groups} from "./layout/sections/group/Groups";




function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Groups/>
            <Skills/>
            <Projects/>
            <Title/>
            <Footer/>
        </div>
    );
}

export default App;

