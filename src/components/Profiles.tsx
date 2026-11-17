import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { profiles, type ProfileId } from "../data/profiles";
import { projects } from "../data/projects";
import "./styles/Profiles.css";

const github = "https://github.com/RameeshKp";
const instagram = "https://www.instagram.com/rameesh_k_p/";
const illustrationReels = ["DfzOgGwKQ_P", "DfzQA7oKVdA"];
const memoryGallery = "https://rameeshkpsgallery.netlify.app/";
const resume = "/Rameesh_KP_Resume_2026.pdf";

const details = {
  rameesh: {
    title: "Hi, I’m Rameesh K P.",
    intro: "Software developer on weekdays. Weekend trip enthusiast. I can’t resist food, but I burn it off on the football ground!",
  },
  developer: {
    title: "Building for iOS & Android.",
    intro: "I work with React Native and TypeScript on cross-platform apps, from wallet and API integrations to performance, debugging, and store releases.",
  },
  creative: {
    title: "Illustration & reels.",
    intro: "I experiment with illustrated characters, motion graphics, and short edits shaped around Malayalam and Tamil music.",
  },
};

type DetailProfile = Exclude<ProfileId, "recruiter">;

export default function Profiles({ view }: { view: DetailProfile | null }) {
  return (
    <div className={view ? "profiles-page profiles-detail" : "profiles-page profiles-home"}>
      <header className="profiles-header">
        <a href="./" className="profiles-brand" aria-label="Rameesh K P, profile selection">
          RAMEESH<span> K P</span>
        </a>
        {view ? (
          <a className="profiles-utility" href="./"><MdArrowBack aria-hidden /> All profiles</a>
        ) : (
          <a className="profiles-utility" href={resume}>Résumé <MdArrowOutward aria-hidden /></a>
        )}
      </header>
      {view ? <ProfileDetail view={view} /> : (
        <main className="profiles-selector">
          <div className="profiles-monogram" aria-hidden="true">RK<span>P</span></div>
          <h1>Who’s watching?</h1>
          <ul className="profiles-grid">
            {profiles.map(({ id, name, description, glyph }) => (
              <li key={id}>
                <a className="profile-card" href={`?view=${id}`}>
                  <span className={`profile-avatar profile-avatar--${id}`} aria-hidden="true">{glyph}</span>
                  <span className="profile-name">{name}</span>
                  <span className="profile-description">{description}</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
      )}
    </div>
  );
}

function ProfilePortrait() {
  return (
    <div className="profile-portrait">
      <img
        src={`${import.meta.env.BASE_URL}images/me.PNG`}
        alt="Portrait of Rameesh K P"
        width={1086}
        height={1448}
        fetchPriority="high"
      />
    </div>
  );
}

function ProfileDetail({ view }: { view: DetailProfile }) {
  const profile = profiles.find(({ id }) => id === view);
  const { title, intro } = details[view];

  return (
    <main className="profile-story">
      <div className="profile-story-heading">
        <div className="profile-story-intro">
          <p className="profile-story-label">{profile?.name} view</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="profile-actions">
            {view === "rameesh" && (
              <>
                <a href={memoryGallery}>Gallery <MdArrowOutward aria-hidden /></a>
                <a href="mailto:irameeshkp@gmail.com">Get in touch <MdArrowOutward aria-hidden /></a>
              </>
            )}
            {view === "developer" && <a href={github}>GitHub <MdArrowOutward aria-hidden /></a>}
            {view === "creative" && <a href={instagram}>Find me on Instagram <MdArrowOutward aria-hidden /></a>}
          </div>
        </div>
        {view === "rameesh" && <ProfilePortrait />}
      </div>

      {view === "rameesh" && <PersonalSections />}

      {view === "developer" && (
        <section className="profile-section" aria-labelledby="developer-projects">
          <h2 id="developer-projects">Selected apps</h2>
          <div className="profile-projects">
            {projects.slice(0, 3).map(({ title, category, tools, image, link }) => (
              <article key={title} className="profile-project">
                <img src={image} alt="" loading="lazy" />
                <div>
                  <p>{category}</p>
                  <h3>{title}</h3>
                  <p>{tools}</p>
                  {link && <a href={link}>View {title} <MdArrowOutward aria-hidden /></a>}
                </div>
              </article>
            ))}
          </div>
          <div className="profile-actions">
            <a href="?view=recruiter#work">See all projects <MdArrowForward aria-hidden /></a>
          </div>
          <h2>Tech stack</h2>
          <p>React Native, TypeScript, Redux, REST APIs, Kotlin, Swift, and Expo EAS.</p>
        </section>
      )}

      {view === "creative" && (
        <section className="profile-section" aria-labelledby="creative-projects">
          <h2 id="creative-projects">What I make</h2>
          <div className="profile-creative-work">
            <article>
              <h3>Character illustration</h3>
              <p>Turning portraits into illustrated characters and bringing details like hair and fabric to life with motion.</p>
            </article>
            <article>
              <h3>Lyric videos</h3>
              <p>Combining timed typography, illustrated frames, and music in short vertical edits.</p>
            </article>
          </div>
          <IllustrationReels />
        </section>
      )}
    </main>
  );
}

function PersonalSections() {
  return (
    <section className="profile-section" aria-labelledby="rameesh-interests">
      <h2 id="rameesh-interests">Outside of code</h2>
      <div className="profile-creative-work">
        <article>
          <h3>Photos & travel memories</h3>
          <p>My Memory Gallery brings together photo and video collections from trips and team outings.</p>
          <a href={memoryGallery}>Open Memory Gallery <MdArrowOutward aria-hidden /></a>
        </article>
        <article>
          <h3>Illustration & short films</h3>
          <p>I turn portraits into illustrated characters and use motion and timed typography in short lyric videos.</p>
          <a href="?view=creative">Explore my creative work <MdArrowForward aria-hidden /></a>
        </article>
      </div>
      <div className="profile-gallery-preview">
        <div className="profile-gallery-heading">
          <h3>Memory Gallery preview</h3>
          <a className="profiles-utility" href={memoryGallery} target="_blank" rel="noopener noreferrer">
            Open full gallery <MdArrowOutward aria-hidden />
          </a>
        </div>
        <iframe src={memoryGallery} title="Rameesh’s Memory Gallery" loading="lazy" />
      </div>
      <IllustrationReels />
    </section>
  );
}

function IllustrationReels() {
  return (
    <div className="profile-reels">
      <h3>Illustration reels</h3>
      <ul className="profile-reel-grid">
        {illustrationReels.map((id, index) => {
          const url = `https://www.instagram.com/reel/${id}/`;
          const title = `Illustration reel ${index + 1}`;

          return (
            <li key={id} className="profile-reel">
              <iframe
                src={`${url}embed/`}
                title={title}
                loading="lazy"
                allowFullScreen
              />
              <a href={url} aria-label={`Watch ${title.toLowerCase()} on Instagram`}>
                Watch on Instagram <MdArrowOutward aria-hidden />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
