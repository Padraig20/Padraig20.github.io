import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryData: Record<string, { src: string; caption: string }[]> = {
  "2025": [
    { src: "/gallery/2025/1.jpeg", caption: "Leonardo took me hiking during my time in Madrid :)" },
    { src: "/gallery/2025/2.jpeg", caption: "All UTSIP interns received a warm welcome at UTokyo!" },
    { src: "/gallery/2025/3.jpg", caption: "Frith-sensei, Mariko, Timea and I visited the Advanced Genomics Workshop 2025. We're standing in front of Mariko-san's poster! :)" },
    { src: "/gallery/2025/4.jpg", caption: "All UTSIP students had a presentation in the end. I couldn't, though, since I broke my arm... oh well" },
    { src: "/gallery/2025/5.jpeg", caption: "Max and I visited the Nvidia Simulation Hackathon in Zurich!" },
    { src: "/gallery/2025/6.jpeg", caption: "I was invited to Oslo to discuss how to create a network between European students." },
    { src: "/gallery/2025/7.jpeg", caption: "Allan visited me during my BHons graduation ceremony!" },
    { src: "/gallery/2025/8.jpeg", caption: "My whole family came with me to celebrate my BHons graduation! :)" },
  ],
  "2024": [
    { src: "/gallery/2024/1.png", caption: "The whole Connectome Lab! Some members just graduated, and Prof. Cha also wanted me to be in the picture :)" },
    { src: "/gallery/2024/2.jpeg", caption: "So apparently there's an Austrian \"Stammtisch\" in Korea!" },
    { src: "/gallery/2024/3.jpeg", caption: "Happened to meet with Jongsoo Choi, CTO of the Samsumg Medical Center. Great guy!" },
    { src: "/gallery/2024/4.jpeg", caption: "Junbeom, who was a member in the Connectome Lab, invited the whole lab to his wedding! All the best to him!!" },
    { src: "/gallery/2024/5.jpeg", caption: "Before I flew back home, Prof. Cha and my best friends from the lab invited me to dinner :)" },
    { src: "/gallery/2024/6.jpeg", caption: "My first conference presentation! CLEF 2024, Grenoble, France" },
    { src: "/gallery/2024/7.jpeg", caption: "Held a presentation about what we were doing in Korea at the YSS 2024, ISTA, Austria" },
    { src: "/gallery/2024/8.jpeg", caption: "Another presentation (about my Bachelor's thesis) in Bolzano, Italy." },
  ],
  "2023": [
    { src: "/gallery/2023/1.jpeg", caption: "Helped organize ESSIR 2023!" },
  ],
};

const years = Object.keys(galleryData).sort((a, b) => Number(b) - Number(a));

const Gallery = () => {
  const { year } = useParams();
  const activeYear = year || years[0];
  const photos = galleryData[activeYear] || [];
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <span className="font-mono text-primary text-xl">$</span> Gallery
      </h1>

      {/* Year pagination */}
      <div className="flex gap-3 mb-8 font-mono">
        {years.map((y) => (
          <Link
            key={y}
            to={`/gallery/${y}`}
            className={`px-3 py-1 text-sm rounded-sm border transition-colors ${
              y === activeYear
                ? "bg-primary text-primary-foreground border-primary"
                : "text-muted-foreground border-border hover:border-primary hover:text-primary"
            }`}
          >
            {y}
          </Link>
        ))}
      </div>

      {/* Photos grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photos.map((photo, i) => (
          <figure 
            key={i} 
            className="space-y-2 cursor-pointer group"
            onClick={() => openLightbox(i)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-56 object-cover rounded-sm border transition-transform group-hover:scale-[1.02] group-hover:border-primary"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground font-mono">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      {photos.length === 0 && (
        <p className="text-muted-foreground text-sm font-mono">No photos for this year yet.</p>
      )}

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-card border-border overflow-hidden [&>button]:hidden">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              <X size={20} />
            </button>

            {/* Navigation arrows */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image */}
            {photos[currentIndex] && (
              <div className="flex flex-col">
                <img
                  src={photos[currentIndex].src.replace('w=400&h=300', 'w=1200&h=800')}
                  alt={photos[currentIndex].caption}
                  className="w-full max-h-[70vh] object-contain"
                />
                <div className="p-4 text-center">
                  <p className="text-sm text-muted-foreground font-mono">
                    {photos[currentIndex].caption}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1 font-mono">
                    {currentIndex + 1} / {photos.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
