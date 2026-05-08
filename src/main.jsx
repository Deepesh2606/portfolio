import React from "react";
import { createRoot } from "react-dom/client";
import {
  Aperture,
  ArrowUpRight,
  Camera,
  Clapperboard,
  Film,
  Mail,
  MapPin,
  Play,
  Share2,
  Sparkles,
  Video,
} from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./styles.css";

const photographs = [
  {
    title: "Rainlit Street",
    type: "Street Photography",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Golden Portrait",
    type: "Portrait Study",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Midnight Frame",
    type: "Low Light",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quiet Horizon",
    type: "Landscape",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Festival Glow",
    type: "Event Frame",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
  },
];

const films = [
  {
    title: "After Hours",
    category: "Cinematic Reel",
    duration: "01:42",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "City Motion",
    category: "Edited Video",
    duration: "00:58",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Monsoon Cut",
    category: "Color Grade",
    duration: "02:14",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Neon Pace",
    category: "Music Edit",
    duration: "01:16",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=80",
  },
];

const photoLoop = [...photographs, ...photographs];
const filmLoop = [...films, ...films];

const services = [
  ["Photography", "Portraits, street frames, event stills, and visual stories."],
  ["Video Editing", "Short-form edits, pacing, transitions, sound sync, and delivery."],
  ["Cinematography", "Mood-driven shots, reels, travel films, and brand visuals."],
];

function App() {
  return (
    <>
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Deepesh portfolio home">
          <Aperture size={24} />
          <span>Deepesh</span>
        </a>
        <nav className="nav-links" aria-label="Portfolio navigation">
          <a href="#photos">
            <Camera size={15} />
            Photos
          </a>
          <a href="#films">
            <Video size={15} />
            Films
          </a>
          <a href="#contact">
            <Mail size={15} />
            Contact
          </a>
        </nav>
        <div className="nav-side">
          <span className="availability">Open for shoots</span>
          <a className="nav-cta" href="#contact">
            Book
            <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            Photographer / Editor / Cinematic Creator
          </p>
          <h1>Deepesh</h1>
          <p>
            A bold visual portfolio for photos, edited videos, and cinematic
            stories with rhythm, atmosphere, and motion.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#films">
              <Play size={18} />
              View Reels
            </a>
            <a className="secondary-action" href="#photos">
              <Camera size={18} />
              Explore Photos
            </a>
          </div>
        </div>

        <div className="hero-board" aria-label="Featured visual work preview">
          {photographs.slice(0, 3).map((photo, index) => (
            <article className={`stack-card stack-${index + 1}`} key={photo.title}>
              <img src={photo.image} alt={`${photo.title} preview`} />
              <span>{photo.type}</span>
            </article>
          ))}
          <div className="reel-chip">
            <Film size={18} />
            Infinite Visual Reel
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div>
          <strong>Based in India</strong>
          <span>
            Available for portraits, events, brand edits, reels, and cinematic
            video projects.
          </span>
        </div>
        <div className="stat">
          <Film />
          <span>Photo + Video Showcase</span>
        </div>
      </section>

      <section className="section" id="photos">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">
              <Camera size={16} />
              Selected Frames
            </p>
            <h2>Photographs in Motion</h2>
          </div>
          <p>
            Compact frames move like a contact sheet, so your work feels alive
            without swallowing the page.
          </p>
        </div>
        <div className="marquee-shell">
          <div className="marquee-track photo-track">
            {photoLoop.map((photo, index) => (
              <article className="photo-card" key={`${photo.title}-${index}`}>
                <img src={photo.image} alt={`${photo.title} by Deepesh`} />
                <div>
                  <span>{photo.type}</span>
                  <h3>{photo.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" id="films">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">
              <Video size={16} />
              Motion Work
            </p>
            <h2>Videos & Cinematic Edits</h2>
          </div>
          <p>
            Reels, edits, and cinematic recordings presented as an endless
            horizontal film strip.
          </p>
        </div>
        <div className="marquee-shell film-shell">
          <div className="marquee-track film-track">
            {filmLoop.map((film, index) => (
              <article className="film-card" key={`${film.title}-${index}`}>
                <img src={film.image} alt={`${film.title} video thumbnail`} />
                <button aria-label={`Play ${film.title}`}>
                  <Play size={22} fill="currentColor" />
                </button>
                <div className="film-meta">
                  <span>{film.category}</span>
                  <span>{film.duration}</span>
                </div>
                <h3>{film.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services" aria-label="Creative services">
        {services.map(([title, text]) => (
          <article key={title}>
            <Clapperboard size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">
            <Mail size={16} />
            Work With Deepesh
          </p>
          <h2>Let's create your next visual story.</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:deepesh@example.com">
            <Mail size={18} />
            Email
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Share2 size={18} />
            Instagram
          </a>
          <a href="#top">
            <MapPin size={18} />
            India
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
    <SpeedInsights />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
