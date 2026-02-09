const education = [
  {
    start: "Sep 2025",
    end: "Jun 2027",
    title: "MSc in Computer Science",
    institution: "ETH Zürich",
    details: "Major in Machine Intelligence; Minor in Data Management Systems",
  },
  {
    start: "Oct 2021",
    end: "Jul 2025",
    title: "BSc in Software and Information Engineering",
    institution: "Technische Universität Wien",
    details: "Bachelor with Honors in AI in Medicine",
  },
];

const experience = [
  {
    start: "Dec 2025",
    end: "Present",
    title: "Student Researcher",
    institution: "ETH Zürich",
    details: "Working under Prof. Cai Na in the Medical Genomics Group at D-BSSE.",
  },
  {
    start: "Jun 2025",
    end: "Jul 2025",
    title: "Research Assistant",
    institution: "The University of Tokyo",
    details:
      "Helped work on a new tool that finds distant relationships between genetic sequences (nucleotide or protein).",
  },
  {
    start: "Oct 2024",
    end: "Jun 2025",
    title: "Teaching Assistant",
    institution: "Technische Universität Wien",
    details:
      'Grading exercises, interviewing students and holding lectures in "Applied Deep Learning" and "Machine Learning".',
  },
  {
    start: "Jul 2024",
    end: "Mar 2025",
    title: "Research Assistant",
    institution: "Seoul National University",
    details:
      "Designed and developed a new architecture to predict BSID-III composite scores from neonatal fMRI brain scans.",
  },
  {
    start: "Feb 2025",
    end: null,
    title: "Research Assistant",
    institution: "Spanish National Research Council",
    details:
      "Training of multilingual models for automated text identification as well as linguistic/statistical analysis of AI-generated contents.",
  },
  {
    start: "Jul 2022",
    end: "May 2024",
    title: "IT Consultant",
    institution: "Prime Force Group",
    details:
      "Worked on full-stack development, architectural software modeling, hands-on customer consultancy and project-management.",
  },
  {
    start: "Jul 2022",
    end: "Mar 2023",
    title: "Teaching Assistant",
    institution: "Technische Universität Wien",
    details: "Taught first-year students the first steps in programming in Java.",
  },
];

const supervisors = [
  {
    name: "Prof. Cai Na",
    role: "2025 - Present",
    institution: "ETH Zürich",
    description:
      'Prof. Cai Na is my current supervisor at ETH Zürich, and an Assistant Professor in the Department of Biosystems Science and Engineering. She is an expert in quantitative genetics, and I feel very lucky to learn from her. She makes biological problems approachable and helps me understand the underlying biology rather than just applying some algorithmic black box. Thanks to her, I feel like I am learning how to actually ask the "right" biological questions. Apart from that, she is also just the loveliest and most supportive person! I\'m looking forward to keep working with her and learning from her!',
  },
  {
    name: "Prof. Martin C. Frith",
    role: "2025 - Present",
    institution: "The University of Tokyo",
    description:
      "Prof. Martin C. Frith is a Professor of computational biology at The University of Tokyo, with deep expertise in biological sequence analysis. I was lucky to work with him during a research visit in the summer of 2025, where we developed a new tool for finding distant relationships between genetic sequences. We are still actively working on this tool together! Martin was not only my door into the world of computational biology, but he actually taught me a lot about what science and research actually is. In general, I would say that he is one of the smartest people I have ever met!",
  },
  {
    name: "Prof. Jiook Cha",
    role: "2024 - 2025",
    institution: "Seoul National University",
    description:
      "Prof. Jiook Cha is an Associate Professor at Seoul National University in the Department of Psychology, where he is especially interested in using machine learning to understand the brain. He is an incredibly motivated and hard-working PI, and I had the pleasure to visit him and his lovely lab in the summer of 2024. I found it incredibly inspiring to see how much he actually cares for the people in his lab. He is the reason I got into neuroscience, and I'm very thankful for all his help!",
  },
  {
    name: "Dr. Leonardo Campillos-Llanos",
    role: "2024 - 2025",
    institution: "Spanish National Research Council",
    description:
      'Dr. Leonardo Campillos-Llanos is a tenure-track scientist at the Spanish National Research Council, where he works on the intersection of NLP and healthcare. We actually "met" via e-mail, since I reached out to him for a dataset that I wanted to use for my Bachelor\'s thesis. We had an amazing discussion about which direction I could take for my thesis, and we ended up working on the project together. He later invited me to visit him in Spain for a month as a visiting researcher. I am very grateful for his mentorship and support, and had an amazing time working together!',
  },
  {
    name: "Prof. Allan Hanbury",
    role: "2023 - 2025",
    institution: "Technische Universität Wien",
    description:
      "Prof. Allan Hanbury is a full Professor of Data Intelligence at the Technische Universität Wien. Allan supervised me almost throughout my entire Bachelor's degree, and he is the one who got me into research in the first place. Allan was my mentor in the Bachelor with Honors program, as well as the supervisor of my Bachelor's thesis. He was always incredibly hard-working, supportive and encouraging, and tried to make time for me whenever I needed help with either research or also personal matters. A lot of doors opened for me thanks to him, and I will always be grateful for his mentorship and support!",
  },
];

const journalPubs = [
  {
    year: 2026,
    authors: "Martin C. Frith, Patrick Boppert, Patrick Styll, Milot Mirdita",
    title:
      "Simple and thorough detection of related sequences with position-varying probabilities of substitutions, insertions, and deletions",
    venue: "Journal of Computational Biology",
    doi: "TBA",
    url: "",
  },
];

const confPubs = [
  {
    year: 2025,
    authors: "Patrick Styll, Leonardo Campillos-Llanos, Isabel Fernández-García, Jorge and Segura-Bédmar",
    title: "MedAID-ML: A Multilingual Dataset of Biomedical Texts for Detecting AI-Generated Content",
    venue: "CLEF 2025",
    url: "https://link.springer.com/chapter/10.1007/978-3-032-04354-2_5",
  },
  {
    year: 2025,
    authors: "Maximilian Seeliger*, Patrick Styll*, Moritz Staudinger, Allan Hanbury",
    title: "Human or not? Light-weight and interpretable detection of AI-generated text",
    venue: "PAN, CLEF 2025",
    url: "https://ceur-ws.org/Vol-4038/paper_319.pdf",
  },
  {
    year: 2025,
    authors: "Patrick Styll*, Dowon Kim*, Jiook Cha",
    title: "Swin fMRI Transformer Predicts Early Neurodevelopmental Outcomes from Neonatal fMRI",
    venue: "W3PHIAI, AAAI 2025",
    url: "https://arxiv.org/abs/2412.07783",
  },
  {
    year: 2024,
    authors: "Patrick Styll, Wojciech Kusa, Allan Hanbury",
    title:
      "Enhancing Clinical Data Capture: Developing a Natural Language Processing Pipeline for Converting Free Text Admission Notes to Structured EHR Data",
    venue: "NL4AI, AIxIA 2024",
    url: "https://ceur-ws.org/Vol-3877/paper4.pdf",
  },
  {
    year: 2024,
    authors: "Patrick Styll, Leonardo Campillos-Llanos, Wojciech Kusa, Allan Hanbury",
    title: "Cross-linguistic disease and drug detection in cardiology clinical texts: methods and outcomes",
    venue: "BioASQ, CLEF 2024",
    url: "https://digital.csic.es/handle/10261/368383",
  },
  {
    year: 2023,
    authors: "Wojciech Kusa, Patrick Styll, Maximilian Seeliger, Oscar E. Mendoza, Allan Hanbury",
    title: "DoSSIER at TREC 2023 Clinical Trials Track",
    venue: "TREC 2023",
    url: "https://repositum.tuwien.at/handle/20.500.12708/203878",
  },
];

const talks = [
  {
    date: "Sep 2025",
    title: "MedAID-ML: A Multilingual Dataset of Biomedical Texts for Detecting AI-Generated Content",
    event: "CLEF 2025, Madrid, Spain",
    slidesUrl:
      "https://docs.google.com/presentation/d/1vshGRud6YUXYdb_lY93471-J4fAS_0Vi/edit?usp=sharing&ouid=108401324840376086904&rtpof=true&sd=true",
  },
  {
    date: "Sep 2025",
    title: "Human or Not? Light-Weight and Interpretable Detection of AI-Generated Text",
    event: "CLEF 2025, Madrid, Spain",
    slidesUrl:
      "https://docs.google.com/presentation/d/1YigwJuZjYk2srM8s5fI-P8LyRO4WL1-X/edit?usp=sharing&ouid=108401324840376086904&rtpof=true&sd=true",
  },
  {
    date: "Apr 2025",
    title: "PyTorch for Beginners",
    event: "VU Machine Learning, TU Wien",
    slidesUrl: "https://docs.google.com/presentation/d/1xSg6uJNGcjZt68seCPAHjppBeTNP2pOq51CN_lWlN8M/edit?usp=sharing",
  },
  {
    date: "Jan 2025",
    title: "Brain-Like Object Recognition with High-Performing Shallow Recurrent ANNs",
    event: "Google Developer Group, TU Wien",
    slidesUrl:
      "https://docs.google.com/presentation/d/14YWWrcR5Of6GgHmbaDkXEs3GXQetJ_c_/edit?usp=sharing&ouid=108401324840376086904&rtpof=true&sd=true",
  },
  {
    date: "Dec 2024",
    title: "PyTorch for Beginners",
    event: "VU Machine Learning, TU Wien",
    slidesUrl: "https://docs.google.com/presentation/d/1xSg6uJNGcjZt68seCPAHjppBeTNP2pOq51CN_lWlN8M/edit?usp=sharing",
  },
  {
    date: "Dec 2024",
    title: "Introduction to Large Language Models",
    event: "VU Applied Deep Learning, TU Wien",
    slidesUrl: "https://www.youtube.com/watch?v=rBd04eKtT0Y&list=PLNsFwZQ_pkE8tSQuU3jN71fmmGFFCi7Dc&index=14",
  },
  {
    date: "Nov 2024",
    title:
      "Enhancing Clinical Data Capture: Developing a Natural Language Processing Pipeline for Converting Free Text Admission Notes to Structured EHR Data",
    event: "AIxIA 2024, Bolzano, Italy",
  },
  {
    date: "Oct 2024",
    title: "Introduction to Word Vectorization",
    event: "Google Developer Group, TU Wien",
    slidesUrl: "https://docs.google.com/presentation/d/1B5EL4--UjIWC6o9w_dYhbrinxDgsC7UDX4nIzSRiykU/edit?usp=sharing",
  },
  {
    date: "Sep 2024",
    title: "Cross-Linguistic Disease and Drug Detection in Cardiology Clinical Texts: Methods and Outcomes",
    event: "CLEF 2024, Grenoble, France",
    slidesUrl:
      "https://docs.google.com/presentation/d/1A0nkpd2aViUm5NixunjfjooGq2HS8hFJ/edit?usp=sharing&ouid=108401324840376086904&rtpof=true&sd=true",
  },
];

const awards = [
  { year: "2025", title: "Exzellenzstipendium NÖ", event: "State of Lower Austria, 30.000 EUR" },
  { year: "2024", title: "Stiftungsstipendium", event: "TU Wien, 2.500 EUR" },
  { year: "2024", title: "BHons Internship Scholarship", event: "TU Wien, 2.000 EUR" },
  { year: "2023/24/25", title: "Excellence Scholarship", event: "TU Wien, 1.200 EUR" },
  { year: "2021", title: "ÖPG Student Award", event: "Österreichische Physikalische Gesellschaft, 500 EUR" },
];

const volunteering = [
  { start: "Sep 2024", end: "Aug 2025", title: "Co-Founder and Co-Organizer", organization: "Google Developer Group, TU Wien", details: "As co-founder and organizer of the Google Developer Group at the Technical University of Vienna, I organize bi-weekly journal clubs and speaker series about intelligent systems with the help of my fellow organizers." },
  { start: "Sep 2023", end: null, title: "Local Organizing Team", organization: "TU Wien", details: "Helped in organizing the European Summer School for Information Retrieval 2023, as part of the Data Science Research Unit under Dr. Allan Hanbury." },
  { start: "Sep 2024", end: "Jan 2025", title: "Mentor", organization: "TU Wien", details: "As a mentor, I look after a group of 20 mentees and accompany them with regular meetings through the first semester at the TU Wien." },
  { start: "Oct 2020", end: "Present", title: "Soldier", organization: "Austrian Armed Forces", details: "As a soldier of the Miliz, I ensure that critical infrastructures in the regions are safe and assist in security police assistance operations such as border surveillance and disaster relief." },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold mb-4 pb-2 border-b border-border/50 flex items-center gap-2">
      <span className="font-mono text-primary text-sm">$</span> {title}
    </h2>
    {children}
  </section>
);

const TimelineItem = ({
  period,
  title,
  institution,
  details,
}: {
  period: string;
  title: string;
  institution: string;
  details?: string;
}) => (
  <div className="flex gap-4 mb-3 text-sm">
    <span className="font-mono text-primary text-xs w-28 shrink-0 pt-0.5">{period}</span>
    <div>
      <span className="font-semibold">{title}</span>
      <span className="text-muted-foreground"> — {institution}</span>
      {details && <p className="text-muted-foreground mt-0.5">{details}</p>}
    </div>
  </div>
);

const ExperienceItem = ({
  start,
  end,
  title,
  institution,
  details,
}: {
  start: string;
  end: string | null;
  title: string;
  institution: string;
  details?: string;
}) => (
  <div className="flex gap-4 mb-4 text-sm">
    <div className="font-mono text-xs w-20 shrink-0 pt-0.5 text-right">
      <div className="text-primary">{start}</div>
      {end && <div className="text-muted-foreground">{end}</div>}
    </div>
    <div className="border-l-2 border-primary/30 pl-4">
      <span className="font-semibold">{title}</span>
      <span className="text-muted-foreground"> — {institution}</span>
      {details && <p className="text-muted-foreground mt-0.5">{details}</p>}
    </div>
  </div>
);

import { Download, ExternalLink, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <span className="font-mono text-primary text-xl">$</span>
          <span className="hidden sm:inline">Curriculum Vitae</span>
          <span className="sm:hidden">CV</span>
        </h1>
        <a href="/CV_PatrickStyll.pdf" download="CV_PatrickStyll.pdf" className="print:hidden">
          <Button variant="outline" size="sm" className="font-mono text-xs gap-2">
            <Download size={14} />
            Download PDF
          </Button>
        </a>
      </div>

      <Section title="Education">
        {education.map((e, i) => (
          <ExperienceItem key={i} start={e.start} end={e.end} title={e.title} institution={e.institution} details={e.details} />
        ))}
      </Section>

      <Section title="Experience">
        {experience.map((e, i) => (
          <ExperienceItem key={i} {...e} />
        ))}
      </Section>

      <Section title="Journal Publications">
        <ul className="space-y-3 text-sm">
          {journalPubs.map((p, i) => (
            <li key={i}>
              <span className="text-muted-foreground">[{p.year}] </span>
              <span>{p.authors}. </span>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {p.title} <ExternalLink size={12} className="inline" />
                </a>
              ) : (
                <span className="font-semibold">{p.title}</span>
              )}
              <span>. </span>
              <span className="italic text-muted-foreground">{p.venue}. </span>
              {p.doi && <span className="text-primary text-xs">DOI: {p.doi}</span>}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Conference Publications">
        <ul className="space-y-3 text-sm">
          {confPubs.map((p, i) => (
            <li key={i}>
              <span className="text-muted-foreground">[{p.year}] </span>
              <span>{p.authors}. </span>
              <span className="font-semibold">{p.title}</span>
              <span>. </span>
              <span className="italic text-muted-foreground">{p.venue}</span>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-xs"
                >
                  <ExternalLink size={12} /> Paper
                </a>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Talks & Presentations">
        <ul className="space-y-3 text-sm">
          {talks.map((t, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-muted-foreground w-24 shrink-0 font-medium">{t.date}</span>
              <div>
                <span className="font-semibold">{t.title}</span>
                <span className="text-muted-foreground"> — {t.event}</span>
                {t.slidesUrl && (
                  <a
                    href={t.slidesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-xs"
                  >
                    <Presentation size={12} /> Slides
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Awards">
        <ul className="space-y-3 text-sm">
          {awards.map((a, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-muted-foreground w-24 shrink-0 font-medium">{a.year}</span>
              <div>
                <span className="font-semibold">{a.title}</span>
                <span className="text-muted-foreground"> — {a.event}</span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Volunteering">
        {volunteering.map((v, i) => (
          <ExperienceItem key={i} start={v.start} end={v.end} title={v.title} institution={v.organization} details={v.details} />
        ))}
      </Section>

      <Section title="Supervisors">
        <div className="space-y-5">
          {supervisors.map((s, i) => (
            <div key={i} className="text-sm">
              <div className="mb-1">
                <span className="font-semibold">{s.name}</span>
                <span className="text-muted-foreground">
                  {" "}
                  — {s.role}, {s.institution}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default CV;
