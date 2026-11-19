import { lazy, Suspense } from "react";
import "./App.css";
import Profiles from "./components/Profiles";
import { readPortfolioView } from "./data/profiles";
import FafafaGuide from "./components/FafafaGuide";
import InstagramReelGuide from "./components/InstagramReelGuide";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  if (new URLSearchParams(window.location.search).get("guide") === "instagram-reel") {
    return <InstagramReelGuide />;
  }
  if (new URLSearchParams(window.location.search).get("guide") === "fafafa-funk") {
    return <FafafaGuide />;
  }
  const view = readPortfolioView(window.location);
  if (view !== "recruiter") return <Profiles view={view} />;

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
