import './App.css';
import Hero from './Hero.js';
import Apropos from './Apropos.js';
import Competence from './Competence.js';
import Projet from './Projet.js';
import Header from './Header.js';
import Contact from './Contact.js';

function App() {
  return (
    <>
    <Header /><Hero /><Apropos />
    <Competence />
    <Projet />
    <Contact /></>
  );
}

export default App;
