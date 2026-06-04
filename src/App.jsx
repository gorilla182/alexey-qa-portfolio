import './App.css';
import { highlight, education } from './data/portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HighlightBlock from './components/HighlightBlock';
import MemeZone from './components/MemeZone';
import Progress from './components/Progress';
import SectionTitle from './components/SectionTitle';
import Skills from './components/Skills';
import Stats from './components/Stats';

export default function App() {
  return (
    <div className="wrap" data-testid="portfolio-page">
      <Hero />

      <HighlightBlock
        icon={highlight.icon}
        title={highlight.title}
        text={highlight.text}
      />

      <SectionTitle>цифры говорят сами за себя</SectionTitle>
      <Stats />

      <SectionTitle>покрытие и автоматизация</SectionTitle>
      <Progress />

      <SectionTitle>опыт</SectionTitle>
      <Experience />

      <SectionTitle className="section-spaced">стек технологий</SectionTitle>
      <Skills />

      <SectionTitle>qa meme zone ™</SectionTitle>
      <MemeZone />

      <HighlightBlock
        icon={education.icon}
        title="Образование:"
        text={`${education.text}\n${education.subtext}`}
        className="meme-block-last"
      />

      <Footer />
    </div>
  );
}
