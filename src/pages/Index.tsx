import profileImg from "@/assets/profile.jpg";
import FaceLooker from "@/components/FaceLooker";
import DNASequence from "@/components/DNASequence";
import TerminalText from "@/components/TerminalText";
import { Mail, Github, GraduationCap, ExternalLink, Linkedin } from "lucide-react";

// TODO: Replace with your 9 gaze images from Replicate when ready:
// import gazeTopLeft from "@/assets/gaze/top-left.jpg";
// ... etc
// const gazeImages = [gazeTopLeft, gazeTopCenter, ...];

const news = [
  { date: "Feb 2026", text: "New paper on simple and thorough detection of related sequences published in the Journal of Computational Biology." },
  { date: "Dec 2025", text: "Was officially awarded the Bachelor of Honors at TU Wien." },
  { date: "Dec 2025", text: "Started working with Prof. Cai Na in the Medical Genomics Group at ETH Zürich!" },
  { date: "Jul 2025", text: "Was awarded a scholarship of 30.000€ by the State of Lower Austria for outstanding academic achievements." },
  { date: "Jun 2025", text: "Visited Prof. Martin Frith's Lab at the University of Tokyo as a Research Assistant!" },
];

const socialLinks = [
  { href: "mailto:pstyll@ethz.ch", label: "Email", icon: Mail },
  { href: "https://www.linkedin.com/in/patrick-styll/", label: "LinkedIn", icon: Linkedin },
  { href: "https://scholar.google.com/citations?user=mO7023cAAAAJ&hl=en", label: "Scholar", icon: GraduationCap },
  { href: "https://github.com/Padraig20", label: "GitHub", icon: Github },
  { href: "https://orcid.org/0009-0009-6643-2512", label: "ORCID", icon: ExternalLink },
];

const Index = () => {
  return (
    <div className="space-y-12">
      {/* DNA sequence decoration */}
      <DNASequence className="mb-8" />
      
      {/* Hero section */}
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <div className="relative">
          <FaceLooker
            fallbackImage={profileImg}
            alt="Profile photo"
            className="w-40 h-48 shrink-0"
          />
          {/* Terminal-style label */}
          <div className="absolute -bottom-2 left-0 right-0 text-center">
            <span className="font-mono text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded border">
              profile.jpg
            </span>
          </div>
        </div>
        <div className="space-y-4 pt-2">
          <h1 className="text-3xl font-bold">
            <TerminalText text="Patrick Styll" typingSpeed={100} />
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Masters student in Computer Science at <span className="font-mono text-primary">[ETH Zürich]</span>, 
            where I am currently being supervised by Prof. <span className="font-mono text-sm">[Cai Na]</span>.
            I am excited about automation, especially in bioinformatics and medicine. I am currently obsessing over two areas specifically:
            remote homology detection and single-cell sequence-to-function models.

            <br/>

            If we share interests, do feel free to reach out :)
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="flex items-center gap-1.5 hover:text-primary transition-colors group"
              >
                <Icon size={14} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="font-mono text-primary text-sm">$</span> News
        </h2>
        <div className="border-l-2 border-primary/30 pl-4 space-y-4">
          {news.map((item, i) => (
            <div key={i} className="flex gap-4 text-sm group">
              <span className="font-mono text-primary text-xs w-20 shrink-0 pt-0.5">{item.date}</span>
              <span className="text-foreground group-hover:text-primary/90 transition-colors">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom DNA decoration */}
      <DNASequence className="mt-8 text-right" />
    </div>
  );
};

export default Index;
