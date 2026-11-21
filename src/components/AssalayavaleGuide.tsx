import { useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import CopyButton from "./GuideCopyButton";
import "./styles/FafafaGuide.css";

const videoFolder = "https://drive.google.com/drive/u/0/folders/1MEx6EZErIS-JtYI1oXM_Zvc1xotxby-m";

const cutoutPrompt = `Use the two uploaded photos as identity references. Create nine separate photorealistic cutouts of the same Malayali couple. Keep both people’s facial features, skin tones, hairstyles, and relative heights consistent across all nine images.

Give each pose a different outfit pairing. Coordinate the couple’s outfits through color or style within each image.

1. Walking hand in hand in ivory linen.
2. Touching foreheads in dusty-blue outfits.
3. Standing back to back in light denim.
4. Doing a dance twirl in burgundy.
5. Laughing in a side hug in sage green.
6. Doing a gentle ballroom dip in midnight navy.
7. Sitting together with her head on his shoulder in warm neutral outfits.
8. Walking away and looking back in terracotta.
9. Posing for a playful piggyback in forest-green casualwear.

Export each pose as its own transparent PNG. Keep both people fully in frame, including their shoes. Use clean cutout edges and leave space around the couple. Deliver nine individual files.`;

const reelPrompt = `Create a vertical Instagram Reel using the uploaded Assalayavale lyric-motion video as the background and the nine transparent couple cutouts as overlays. Use the supplied reference reel for pacing and composition if one is attached.

Use all nine poses once and time each pose change to a lyric or musical cue. Keep the original song synced with the lyric animation. Make the couple large enough to see clearly on a phone and position each pose so the main lyric stays readable. Vary the placement where the animation leaves room.

On a few poses, start the couple smaller and smoothly scale them up as they enter. Use a mix of these zoom-ins and simple cuts. Give the opening pose a clear entrance and fade the song gently at the end.

Export the finished reel as a 1080 × 1920 MP4 at 30 fps.`;

export default function AssalayavaleGuide() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Assalayavale Couple Reel Guide | Rameesh KP";
    return () => { document.title = previousTitle; };
  }, []);

  const guideUrl = new URL(window.location.href);
  guideUrl.search = "?guide=assalayavale";
  guideUrl.hash = "";

  return (
    <div className="fafafa-guide">
      <header className="guide-header">
        <a href="?view=creative"><MdArrowBack aria-hidden /> Creative view</a>
        <a href="./">RAMEESH K P</a>
      </header>
      <main className="guide-main">
        <section className="guide-hero" lang="ml">
          <h1 lang="en">Assalayavale <em>Couple Reel</em></h1>
          <p>രണ്ട് ഫോട്ടോ ഉപയോഗിച്ച് നിങ്ങളുടെ സ്വന്തം <strong>Assalayavale Couple Reel</strong> ഉണ്ടാക്കാം. താഴെയുള്ള രണ്ട് പ്രോംപ്റ്റുകൾ കോപ്പി ചെയ്ത് ഉപയോഗിക്കൂ.</p>
          <div lang="en"><CopyButton label="Copy guide link" text={guideUrl.href} /></div>
        </section>

        <section className="guide-step assalayavale-step" id="cutouts" lang="ml">
          <h2>1. രണ്ട് ഫോട്ടോയിൽ നിന്ന് ഒൻപത് couple cutouts ഉണ്ടാക്കുക</h2>
          <p>നിങ്ങളുടെയും പാർട്ണറുടെയും മുഖം വ്യക്തമായി കാണുന്ന ഓരോ ഫോട്ടോ വീതം ChatGPT-യിൽ അപ്‌ലോഡ് ചെയ്യൂ. ഏത് ഫോട്ടോ ആരുടേതാണെന്ന് പറഞ്ഞിട്ട് ഈ പ്രോംപ്റ്റ് കൊടുക്കൂ.</p>
          <div className="guide-prompt" lang="en">
            <h3>Prompt 1</h3>
            <pre>{cutoutPrompt}</pre>
            <CopyButton label="Copy cutout prompt" text={cutoutPrompt} />
          </div>
        </section>

        <section className="guide-step assalayavale-step" id="edit" lang="ml">
          <h2>2. Cutouts ലിറിക് വീഡിയോയിൽ ചേർക്കുക</h2>
          <p>കിട്ടിയ ഒൻപത് PNG ഫയലുകളും <strong>Assalayavale lyric-motion video</strong>യും വീഡിയോ എഡിറ്റ് ചെയ്ത് MP4 എക്സ്പോർട്ട് ചെയ്യാൻ കഴിയുന്ന ChatGPT അല്ലെങ്കിൽ Codex സെഷനിലേക്ക് കൊടുക്കൂ. നിങ്ങൾക്ക് പിന്തുടരാനുള്ള റഫറൻസ് റീൽ ഉണ്ടെങ്കിൽ അതും ചേർക്കാം. ശേഷം ഈ പ്രോംപ്റ്റ് കൊടുക്കൂ.</p>
          <p><a className="reel-guide-source" href={videoFolder} target="_blank" rel="noopener noreferrer" lang="en">Download the lyric-motion video from Google Drive (opens in a new tab)</a></p>
          <div className="guide-prompt" lang="en">
            <h3>Prompt 2</h3>
            <pre>{reelPrompt}</pre>
            <CopyButton label="Copy reel prompt" text={reelPrompt} />
          </div>
        </section>

        <section className="guide-step assalayavale-step" id="review" lang="ml">
          <h2>3. പോസ്റ്റ് ചെയ്യുന്നതിന് മുമ്പ്</h2>
          <p>ഫോണിൽ ഒരുതവണ മുഴുവൻ വീഡിയോ കണ്ടുനോക്കൂ. ഒൻപത് പോസും വന്നിട്ടുണ്ടോ, മുഖങ്ങൾ ഒരേപോലെ തോന്നുന്നുണ്ടോ, ലിറിക്സ് വായിക്കാനാകുന്നുണ്ടോ, പാട്ടിനൊപ്പം പോസ് മാറുന്നുണ്ടോ എന്ന് നോക്കിയാൽ മതി.</p>
        </section>
        <footer className="guide-footer">Made by Rameesh KP · <a href="?view=creative">Explore more illustration &amp; reels</a></footer>
      </main>
    </div>
  );
}
