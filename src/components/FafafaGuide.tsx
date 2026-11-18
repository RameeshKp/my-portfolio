import { useEffect, useState } from "react";
import { MdArrowBack, MdCheck, MdContentCopy, MdDownload, MdMovie, MdPerson, MdPhotoLibrary, MdPlayArrow } from "react-icons/md";
import "./styles/FafafaGuide.css";

const cutoutPrompt = `Using my uploaded photos, create nine portrait cutouts of the same person. Keep my face recognizable, including my age, facial features and hairstyle. Use a grayscale comic style with dark outlines and halftone shading.

Create these poses and outfits:
1. Facing the camera in a T-shirt.
2. Wearing sunglasses and a denim jacket.
3. Crossed arms in a coat.
4. Pointing at the camera in a varsity jacket.
5. Looking left in a hoodie.
6. Looking right in a checked shirt.
7. Laughing in a sweater.
8. Looking surprised in a polo shirt.
9. Thumbs up in a bomber jacket.

Make each pose a separate PNG with a transparent background. Include the hair, shoulders and hands fully inside the image. Leave clear space around each cutout.`;

const recreationPrompt = `Recreate this reference reel using my nine cutouts. Replace the original person completely with my cutouts. Match the reference’s text, lettering, colors, backgrounds, transitions and cuts on the beat as closely as possible. Use the reference audio. Tint the grayscale cutouts to match the scene colors.

Remove every visible part of the original person, including the hair, shoulders, arms and blurred edges during transitions. Check the whole video, especially around 14–18 seconds for this reference.

Export the finished reel as an MP4 in the same aspect ratio as the reference.`;

function CopyButton({ text, label }: { text: string; label: string }) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied");
    } catch {
      setStatus("Copy unavailable. Select and copy the text manually.");
    }
  }
  return <div className="guide-copy"><button onClick={copy}><MdContentCopy aria-hidden />{label}</button><span role="status">{status}</span></div>;
}

function WorkflowIllustration({ stage }: { stage: "photos" | "cutouts" | "reference" | "edit" | "export" }) {
  return (
    <div className={`guide-illustration guide-illustration--${stage}`} aria-hidden="true">
      {stage === "photos" && <div className="guide-photo-stack">{[0, 1, 2].map(i => <div key={i}><MdPerson /></div>)}<span><MdPhotoLibrary /> Your photos</span></div>}
      {stage === "cutouts" && <div className="guide-cutout-grid">{Array.from({ length: 9 }, (_, i) => <div key={i}><MdPerson /></div>)}</div>}
      {stage === "reference" && <div className="guide-phone"><MdPlayArrow /><span>Reference reel</span><div className="guide-progress" /></div>}
      {stage === "edit" && <div className="guide-edit"><div className="guide-scene"><MdPerson /><strong>FAFAFA</strong></div><div className="guide-timeline">{[0, 1, 2, 3, 4, 5].map(i => <span key={i} />)}</div><span>Cutouts + color + beat</span></div>}
      {stage === "export" && <div className="guide-export"><MdMovie /><span><MdCheck /> MP4 ready</span><MdDownload /></div>}
    </div>
  );
}

export default function FafafaGuide() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Create Your Own Fafafa Funk Reel | Rameesh KP";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="fafafa-guide">
      <header className="guide-header"><a href="?view=creative"><MdArrowBack aria-hidden /> Creative view</a><a href="./">RAMEESH K P</a></header>
      <main className="guide-main">
        <section className="guide-hero">
          <p className="guide-eyebrow">A simple ChatGPT guide · By Rameesh KP</p>
          <h1>Create your own<br /><em>Fafafa Funk</em> reel.</h1>
          <p>You need 3–4 clear photos of yourself and the reference reel saved on your device.</p>
          <CopyButton label="Copy guide link" text={window.location.href} />
          <nav aria-label="Guide steps" className="guide-overview"><a href="#photos">Photos</a><span>→</span><a href="#cutouts">Cutouts</a><span>→</span><a href="#reference">Reference</a><span>→</span><a href="#recreate">Recreate</a><span>→</span><a href="#download">Download</a></nav>
        </section>
        <section className="guide-step" id="photos">
          <WorkflowIllustration stage="photos" />
          <div><p className="guide-eyebrow">Step 1</p><h2>Upload your photos to ChatGPT</h2><p>Start a new chat. Tap + or the attachment button and upload your photos. Include one clear close-up of your face.</p></div>
        </section>
        <section className="guide-step" id="cutouts">
          <WorkflowIllustration stage="cutouts" />
          <div><p className="guide-eyebrow">Step 2</p><h2>Copy and send this cutout prompt</h2><div className="guide-prompt"><pre>{cutoutPrompt}</pre><CopyButton text={cutoutPrompt} label="Copy cutout prompt" /></div><p>Check the faces and hands. If a pose needs fixing, tell ChatGPT which one and ask it to regenerate that pose. Save the nine PNGs.</p></div>
        </section>
        <section className="guide-step" id="reference">
          <WorkflowIllustration stage="reference" />
          <div><p className="guide-eyebrow">Step 3</p><h2>Upload the reference reel</h2><p>In the same chat, upload the reference video. Attach the nine cutouts too if they are no longer available in the chat.</p></div>
        </section>
        <section className="guide-step" id="recreate">
          <WorkflowIllustration stage="edit" />
          <div><p className="guide-eyebrow">Step 4</p><h2>Copy and send this recreation prompt</h2><div className="guide-prompt"><pre>{recreationPrompt}</pre><CopyButton text={recreationPrompt} label="Copy recreation prompt" /></div></div>
        </section>
        <section className="guide-step" id="download">
          <WorkflowIllustration stage="export" />
          <div><p className="guide-eyebrow">Step 5</p><h2>Check and download your reel</h2><p>Play the exported video. Check the face, text, music timing and background. If you spot a problem, give ChatGPT the exact time and the change you need.</p><p>Example message</p><blockquote>“From 14 to 18 seconds, I can still see the original person behind my cutout. Remove that person completely and export again.”</blockquote><p>Once you are happy with the result, download the MP4 and post it.</p></div>
        </section>
        <aside className="guide-note"><h2>A quick note</h2><p>Video creation and export depend on the tools available in your ChatGPT session. If your session cannot export the reel, ask it for a timed editing plan and assemble the cutouts in your video editor. Image generation can change small facial details, so review each cutout. Use photos and audio you have permission to share.</p></aside>
        <footer className="guide-footer">Made by Rameesh KP · <a href="?view=creative">Explore more illustration & reels</a></footer>
      </main>
    </div>
  );
}
