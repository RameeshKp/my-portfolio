import { useEffect } from "react";
import { MdArrowBack, MdCheck, MdFolder, MdMovie, MdPlayArrow, MdChat, MdUpload, MdComputer } from "react-icons/md";
import CopyButton from "./GuideCopyButton";
import "./styles/FafafaGuide.css";

const reelPrompt = `Create a 30-second Instagram Reel using the footage in this folder.

Start with the strongest moment in the first 2 seconds. Remove dead time
and keep the cuts clean. Add simple motion graphics where they help tell
the story.

If there’s a file named reference.mp4, use it as a guide for pacing,
transitions, and caption style. Use my own clips in the final edit.

If the clips or voiceover contain speech, add readable captions in the
spoken language and sync them to the audio. Keep important text away
from the screen edges and leave room for Instagram’s buttons.

If I’ve included a music track, keep it low enough for the speech to be
clear. Add a short end card with this call to action: [write your CTA here].
If I leave it blank, skip the end card.

Render the reel as a vertical 9:16 MP4 at 1080 × 1920. Save it in an
output folder, leave the source files untouched, and tell me where the
finished MP4 is. If you can’t render it in this session, give me a
timestamped edit plan and caption text instead.`;

export default function InstagramReelGuide() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "How to Make an Instagram Reel with ChatGPT | Rameesh KP";
    return () => { document.title = previousTitle; };
  }, []);

  const guideUrl = new URL(window.location.href);
  guideUrl.search = "?guide=instagram-reel";
  guideUrl.hash = "";

  return (
    <div className="fafafa-guide">
      <header className="guide-header">
        <a href="?view=creative"><MdArrowBack aria-hidden /> Creative view</a>
        <a href="./">RAMEESH K P</a>
      </header>
      <main className="guide-main">
        <section className="guide-hero">
          <p className="guide-eyebrow">A step-by-step guide by Rameesh KP (RKP)</p>
          <h1>How to make an<br /><em>Instagram Reel</em><br />with ChatGPT.</h1>
          <p>Turn your raw clips into a vertical Instagram Reel using <strong>ChatGPT Work on desktop</strong>. Start with a folder of clips, describe the edit you want, then review the first cut and ask for any changes.</p>
          <CopyButton label="Copy guide link" text={guideUrl.href} />
          <nav aria-label="Guide steps" className="guide-overview">
            <a href="#clips">Gather clips</a><span>→</span>
            <a href="#work">Open Work</a><span>→</span>
            <a href="#prompt">Send prompt</a><span>→</span>
            <a href="#review">Review</a><span>→</span>
            <a href="#upload">Upload</a>
          </nav>
        </section>

        <section className="guide-step" id="clips">
          <div className="guide-illustration" aria-hidden="true">
            <div className="reel-guide-folder">
              <MdFolder />
              <div><MdMovie /><MdMovie /><MdMovie /></div>
              <span>My Instagram Reel</span>
              <small>Clips · Audio · reference.mp4</small>
            </div>
          </div>
          <div>
            <p className="guide-eyebrow">Step 1</p>
            <h2>Put your clips in one folder</h2>
            <p>Create a folder called <strong>My Instagram Reel</strong> and add the clips you want to use. If you have a voiceover, music you can use, a logo, or a reference reel, add those too. Give the reference a clear name like <code>reference.mp4</code> so ChatGPT can tell it apart from your footage.</p>
          </div>
        </section>

        <section className="guide-step" id="work">
          <div className="guide-illustration" aria-hidden="true">
            <div className="reel-guide-desktop">
              <MdComputer /><span>ChatGPT Work</span>
              <div><MdFolder /> My Instagram Reel</div>
              <small>Open folder → New task</small>
            </div>
          </div>
          <div>
            <p className="guide-eyebrow">Step 2</p>
            <h2>Open the folder in ChatGPT Work</h2>
            <p>Open the ChatGPT desktop app, switch to <strong>Work</strong>, and open your reel folder. Start a new task in that folder so ChatGPT can access the footage.</p>
            <a className="reel-guide-source" href="https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex">OpenAI Help Center</a>
          </div>
        </section>

        <section className="guide-step" id="prompt">
          <div className="guide-illustration" aria-hidden="true">
            <div className="reel-guide-chat">
              <MdChat /><span>Create a 30-second reel…</span>
              <div><MdCheck /> 9:16 MP4 · 1080 × 1920</div>
            </div>
          </div>
          <div>
            <p className="guide-eyebrow">Step 3</p>
            <h2>Copy and paste this prompt</h2>
            <div className="guide-prompt">
              <pre>{reelPrompt}</pre>
              <CopyButton label="Copy reel prompt" text={reelPrompt} />
            </div>
            <p>Change <strong>30 seconds</strong> to your preferred length. For Malayalam captions, you can add <strong>“Use Malayalam script for the Malayalam dialogue and keep English product names in English.”</strong></p>
          </div>
        </section>

        <section className="guide-step" id="review">
          <div className="guide-illustration" aria-hidden="true">
            <div className="guide-edit">
              <div className="reel-guide-preview"><MdPlayArrow /><span>Readable captions</span></div>
              <div className="guide-timeline">{[0, 1, 2, 3, 4, 5].map(i => <span key={i} />)}</div>
              <span>Watch → Give feedback → Revise</span>
            </div>
          </div>
          <div>
            <p className="guide-eyebrow">Step 4</p>
            <h2>Watch the first cut and ask for specific changes</h2>
            <p>Check whether the first two seconds grab your attention, the captions are easy to read on a phone, and the audio is clear. If something feels off, ask for the change in the same chat. Give a timestamp whenever you can.</p>
            <ul className="reel-guide-feedback">
              <li>“Trim the pause before the first line and start on the close-up.”</li>
              <li>“Make the captions bigger and move them higher.”</li>
              <li>“At 0:12, hold the shot a little longer so the text is readable.”</li>
              <li>“Lower the music while I’m speaking, then export the revised MP4.”</li>
            </ul>
          </div>
        </section>

        <section className="guide-step" id="upload">
          <div className="guide-illustration" aria-hidden="true">
            <div className="guide-phone"><MdUpload /><span>Check on your phone</span><MdCheck /></div>
          </div>
          <div>
            <p className="guide-eyebrow">Step 5</p>
            <h2>Upload the final reel</h2>
            <p>Open the final MP4 and watch it once through on your phone. Then upload it to Instagram, choose a cover, and check the posting preview before publishing.</p>
          </div>
        </section>
        <footer className="guide-footer">Made by Rameesh KP · <a href="?view=creative">Explore more illustration & reels</a></footer>
      </main>
    </div>
  );
}
