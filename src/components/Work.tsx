import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Lume",
    category: "Mobile DeFi",
    tools:
      "Mobile DeFi app for tokenized assets and on-chain portfolios. React Native, Solana, Wallet Integrations",
    image: "/images/lume.webp",
    link: "https://play.google.com/store/apps/details?id=app.lumefi.mainnet",
  },
  {
    title: "SolMail",
    category: "On-Chain Messaging",
    tools:
      "Wallet-native messaging, email, and token transfers. React Native, Solana, Web3",
    image: "/images/solmail.webp",
    link: "https://play.google.com/store/apps/details?id=so.solmail.app&hl=en_IN",
  },
  {
    title: "My Health Rocks",
    category: "Health Tracking",
    tools: "Track and share health progress. React Native, Analytics, Sharing",
    image: "/images/myHealthrocks.jpg",
    link: "https://www.sayonetech.com/resources/case-studies/my-health-rocks/",
  },
  {
    title: "Advantage Lifts",
    category: "E-Commerce",
    tools:
      "Mobile commerce for browsing and purchasing car lifts. React Native, Payments, Product Catalog",
    image: "/images/advantageLifts.jpg",
    link: "https://realgaragelife.com/?srsltid=AfmBOor6sdH873Rkyx1gxTk98WZKstBaDWEdPslVNsQu48SrlY6Wf4Da",
  },
  {
    title: "Townhall",
    category: "Business Analytics",
    tools:
      "Business analysis, engagement, and marketing insights. React Native, Dashboards, Reports",
    image: "/images/Townhall.webp",
  },
  {
    title: "VOW",
    category: "Crypto Wallet",
    tools:
      "Secure digital asset management and transactions. React Native, Security, Transactions",
    image: "/images/vow.webp",
    link: "https://play.google.com/store/apps/details?id=com.vowcurrency.vow.app&hl=en_IN",
  },
  {
    title: "KORA",
    category: "Sustainability",
    tools:
      "Tracks and reduces carbon emissions via data insights. React Native, Analytics, Data Insights",
    image: "/images/kora.webp",
    link: "https://play.google.com/store/apps/details?id=com.kora.sustainability&hl=en_IN",
  },
  {
    title: "Hi And Buy",
    category: "Marketplace",
    tools:
      "Mobile marketplace for buying, selling, and managing listings. React Native, Listings, Transactions",
    image: "/images/HiandBuy.avif",
    link: "https://www.hiandbuy.com.au/",
  },
  {
    title: "Medvibes",
    category: "Healthcare",
    tools:
      "Web and mobile booking for doctors and hospitals. React Native, Web, Scheduling",
    image: "/images/medvibes.webp",
    link: "https://play.google.com/store/apps/details?id=com.ndz.medvibes.doctor&hl=en_IN",
  },
  {
    title: "DREX",
    category: "Crypto Wallet",
    tools:
      "Secure storage and transfer of digital assets. React Native, Encryption, Wallet Features",
    image: "/images/placeholder.webp",
  },
  {
    title: "Amana",
    category: "Booking Platform",
    tools:
      "Book, sell, and rent parking and storage spaces. React Native, Reservations, Payments",
    image: "/images/placeholder.webp",
  },
  {
    title: "InnatheCinema",
    category: "Ticketing",
    tools:
      "View showtimes, select seats, and reserve tickets. Web App, Seat Selection, Booking",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
