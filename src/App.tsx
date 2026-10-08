import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Send,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  { name: 'Communication', type: 'People' },
  { name: 'Problem solving', type: 'Strength' },
  { name: 'Adaptability', type: 'Strength' },
  { name: 'Digital literacy', type: 'Technical' },
  { name: 'Team collaboration', type: 'People' },
  { name: 'Time management', type: 'Strength' },
];

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio',
    description: 'A considered digital home for professional work, personal strengths, and future opportunities.',
    tags: ['Web design', 'Responsive layout', 'Accessibility'],
  },
  {
    number: '02',
    title: 'Digital Skills Hub',
    description: 'A concept for organising useful digital resources and learning progress in one clear space.',
    tags: ['Research', 'Organisation', 'User experience'],
  },
  {
    number: '03',
    title: 'Community Connect',
    description: 'A project concept focused on helping people discover opportunities, resources, and support nearby.',
    tags: ['Concept project', 'Communication', 'Service design'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
    event.currentTarget.reset();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Mavo Gugu Gubayi home" onClick={closeMenu}>
            <span className="brand-mark">MG</span>
            <span>Mavo Gugu Gubayi</span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-cta" href="/Mavo-Gugu-Gubayi-CV.html" download>
              Download CV <Download size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Open to new opportunities</p>
              <h1>Curious mind.<br /><em>Purposeful work.</em></h1>
              <p className="hero-intro">I’m <strong>Mavo Gugu Gubayi</strong>, a dedicated young professional building a future grounded in growth, resilience, and meaningful contribution.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button button-quiet" href="#contact">Let’s connect <MoveUpRight size={17} /></a>
              </div>
              <div className="hero-note"><Sparkles size={15} /> Currently learning, growing, and looking ahead.</div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-frame">
                <img src="/ChatGPT_Image_Oct_8,_2026,_12_35_45_PM.png" alt="Portrait of Mavo Gugu Gubayi" />
              </div>
              <div className="portrait-stamp">MAVO<br /><span>GUGU</span><br />GUBAYI</div>
              <div className="portrait-caption"><span>01</span><span>Based in South Africa</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll to explore</span><ChevronDown size={17} /></a>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="container two-column">
            <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> About me</p><h2>A strong start to a <em>meaningful career.</em></h2></div>
            <div className="about-copy"><p className="lead">I am a well-dedicated young lady who is willing to work under pressure and determined to build a bright future.</p><p>My approach is simple: stay curious, show up with intention, and keep learning. I value honesty, collaboration, and the small details that turn a good experience into a memorable one.</p><p>I’m currently looking for opportunities where I can contribute, develop practical experience, and grow alongside people who care about doing good work.</p><a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section id="skills" className="section-pad skills-section">
          <div className="container"><div className="section-heading narrow"><p className="eyebrow"><span className="eyebrow-line" /> What I bring</p><h2>Skills with room<br />to <em>keep growing.</em></h2></div><div className="skills-grid">{skills.map((skill, index) => <div className="skill-card" key={skill.name}><span className="skill-index">0{index + 1}</span><h3>{skill.name}</h3><p>{skill.type} skill</p></div>)}</div></div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <div className="container"><div className="projects-top"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> Selected work</p><h2>Ideas becoming<br /><em>possibilities.</em></h2></div><p className="projects-summary">A selection of portfolio concepts and future case studies. Details can be updated as each project develops.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-title-row"><h3>{project.title}</h3><span className="project-link" aria-label={`${project.title} details`}><ExternalLink size={19} /></span></div><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div>
        </section>

        <section id="journey" className="section-pad journey-section">
          <div className="container journey-grid"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> My journey</p><h2>Every chapter<br />adds <em>perspective.</em></h2></div><div className="timeline"><article className="timeline-item"><div className="timeline-icon"><GraduationCap size={20} /></div><div><span className="timeline-label">Education · 2023–2026</span><h3>Building the foundation</h3><p>Matric · 2023<br />ICDL · 2024<br />AI learning · 2026</p></div></article><article className="timeline-item"><div className="timeline-icon"><Award size={20} /></div><div><span className="timeline-label">Certifications</span><h3>Ready to add the next milestone</h3><p>Certification details to be attached. This section is ready for verified credentials and links.</p></div></article><article className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={20} /></div><div><span className="timeline-label">Experience</span><h3>Open to my first opportunity</h3><p>No formal work experience listed yet. I’m excited to bring commitment, energy, and a willingness to learn.</p></div></article></div></div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="container contact-grid"><div className="contact-copy"><p className="eyebrow light"><span className="eyebrow-line" /> Get in touch</p><h2>Let’s make the<br /><em>next chapter</em><br />count.</h2><p>Have an opportunity, idea, or simply want to connect? I’d love to hear from you.</p><div className="contact-links"><a href="mailto:gugugubayi@gmail.com"><Mail size={18} /> gugugubayi@gmail.com <ArrowUpRight size={15} /></a><a href="#contact"><Github size={18} /> GitHub profile to be added <ArrowUpRight size={15} /></a><a href="#contact"><Linkedin size={18} /> LinkedIn profile to be added <ArrowUpRight size={15} /></a></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label></div><label>Message<textarea name="message" rows={5} placeholder="Tell me a little about your idea..." required /></label><button className="button button-light" type="submit">{formSent ? <>Message ready <Check size={17} /></> : <>Send message <Send size={17} /></>}</button>{formSent && <p className="form-success" role="status">Thanks — your message is ready to send. Please use the email above to share it directly.</p>}</form></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-wrap"><span>© {new Date().getFullYear()} Mavo Gugu Gubayi</span><span>Designed with intention <span className="footer-dot" /> Built for what’s next</span><a href="#top" aria-label="Back to top">Back to top <ArrowUpRight size={15} /></a></div></footer>
    </div>
  );
}

export default App;
