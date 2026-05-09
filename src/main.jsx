import React from "react";
import { createRoot } from "react-dom/client";
import {
  Aperture,
  ArrowUpRight,
  Camera,
  Clapperboard,
  Clock3,
  Edit3,
  Mail,
  MapPin,
  Play,
  Smartphone,
  Share2,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";
import "./styles.css";

const verticalReels = [
  {
    title: "Cafe Launch",
    type: "Hook-first reel",
    stat: "0:19",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Trainer Cut",
    type: "Fitness short",
    stat: "0:24",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Street Bite",
    type: "Food reel",
    stat: "0:17",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Event Flash",
    type: "Aftermovie cutdown",
    stat: "0:31",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Creator Day",
    type: "Lifestyle edit",
    stat: "0:22",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
  },
];

const films = [
  {
    title: "Launch Week",
    category: "Brand reels",
    duration: "5 edits",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Creator Sprint",
    category: "Batch content",
    duration: "12 shorts",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Event Energy",
    category: "Recap reels",
    duration: "48hr delivery",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Product Pop",
    category: "Ad-style cuts",
    duration: "9:16 ready",
    image:
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=1000&q=80",
  },
];

const reelLoop = [...verticalReels, ...verticalReels];
const filmLoop = [...films, ...films];

const services = [
  ["Shoot", "Vertical-first footage for reels, events, brands, gyms, cafes, and creators."],
  ["Edit", "Fast hooks, beat cuts, captions, transitions, sound design, and color polish."],
  ["Deliver", "Platform-ready exports for Instagram Reels, YouTube Shorts, and ads."],
];

const metrics = [
  ["9:16", "Vertical-first"],
  ["24h", "Quick cuts"],
  ["3 sec", "Hook focus"],
];

function App() {
  const heroRef = React.useRef(null);
  const frameRef = React.useRef(0);
  const scrollTimerRef = React.useRef(0);

  React.useEffect(() => {
    function handleScroll() {
      document.body.classList.add("is-scrolling");
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = window.setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 140);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.clearTimeout(scrollTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleHeroMove(event) {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(() => {
      if (!heroRef.current) return;
      heroRef.current.style.setProperty("--spot-x", `${x.toFixed(2)}%`);
      heroRef.current.style.setProperty("--spot-y", `${y.toFixed(2)}%`);
    });
  }

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Deepesh portfolio home">
          <Aperture size={24} />
          <span>Deepesh</span>
        </a>
        <nav className="nav-links" aria-label="Portfolio navigation">
          <a href="#reels">
            <Smartphone size={15} />
            Reels
          </a>
          <a href="#films">
            <Video size={15} />
            Work
          </a>
          <a href="#contact">
            <Mail size={15} />
            Contact
          </a>
        </nav>
        <div className="nav-side">
          <span className="availability">Open for reels</span>
          <a className="nav-cta" href="#contact">
            Book
            <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section
        ref={heroRef}
        className="hero"
        id="top"
        onPointerMove={handleHeroMove}
      >
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            Short-form videography / Reels / Creator edits
          </p>
          <h1>Deepesh makes scroll-stopping shorts.</h1>
          <p>
            Vertical videos for creators, brands, events, cafes, gyms, and
            products, shot with cinematic taste and edited for the first three
            seconds.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#films">
              <Play size={18} />
              Watch Work
            </a>
            <a className="secondary-action" href="#reels">
              <Smartphone size={18} />
              Reel Formats
            </a>
          </div>
          <div className="hero-metrics" aria-label="Short-form content highlights">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-board" aria-label="Featured visual work preview">
          {verticalReels.slice(0, 3).map((reel, index) => (
            <article className={`stack-card stack-${index + 1}`} key={reel.title}>
              <img src={reel.image} alt={`${reel.title} reel preview`} />
              <div className="phone-top" aria-hidden="true" />
              <span>{reel.type}</span>
            </article>
          ))}
          <div className="format-pill vertical">9:16</div>
          <div className="format-pill captions">Captions + Beat Cuts</div>
          <div className="reel-chip">
            <Clock3 size={18} />
            Hook in 3 seconds
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div>
          <strong>Short-form content that feels premium, fast, and platform-native.</strong>
          <span>
            Based in India and available for shoots, edits, reel packs, event
            cutdowns, and creator content systems.
          </span>
        </div>
        <div className="stat">
          <TrendingUp />
          <span>Built for Reels, Shorts, and social ads</span>
        </div>
      </section>

      <section className="section" id="reels">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">
              <Smartphone size={16} />
              Vertical Formats
            </p>
            <h2>Reels that look native to the feed.</h2>
          </div>
          <p>
            Food, fitness, launch days, events, lifestyle, and product stories
            designed around quick hooks, clean pacing, and repeatable formats.
          </p>
        </div>
        <div className="marquee-shell">
          <div className="marquee-track reel-track">
            {reelLoop.map((reel, index) => (
              <article className="reel-card" key={`${reel.title}-${index}`}>
                <img src={reel.image} alt={`${reel.title} by Deepesh`} />
                <button aria-label={`Play ${reel.title}`}>
                  <Play size={20} fill="currentColor" />
                </button>
                <div>
                  <span>{reel.type}</span>
                  <h3>{reel.title}</h3>
                  <small>{reel.stat}</small>
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
              Campaign Work
            </p>
            <h2>From raw shoot to ready-to-post.</h2>
          </div>
          <p>
            A tighter showcase for brand days, creator batches, event recaps,
            product moments, and quick-turn edits.
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
        {services.map(([title, text], index) => (
          <article key={title}>
            {index === 0 && <Camera size={22} />}
            {index === 1 && <Edit3 size={22} />}
            {index === 2 && <Clapperboard size={22} />}
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
          <h2>Book a reel pack or a shoot day.</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:deepeshsingh2606@gmail.com">
            <Mail size={18} />
            Email
          </a>
          <a href="tel:8847443583">
            <Smartphone size={18} />
            8847443583
          </a>
          <a href="https://www.instagram.com/justt_deesh" target="_blank" rel="noreferrer">
            <Share2 size={18} />
            justt_deesh
          </a>
          <a href="#top">
            <MapPin size={18} />
            India
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
