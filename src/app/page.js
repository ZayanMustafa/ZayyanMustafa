
import Hero from "./component/hero-comp";
import ContactForm from "./component/form-comp";
import ProjectsPage from "./component/project-comp";
import SkillsSection from "./component/skills-comp";
import Newsletter from "./component/newsletter-comp";
export default function Home() {
  return (
    <>

        <Hero/>
        <ProjectsPage/>
        <SkillsSection/>
        <ContactForm/>
        <Newsletter/>
    </>
  );
}
