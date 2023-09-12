import YoutubeEmbed from "../components/YoutubeEmbed";
import CategoryBar from "./CategoryBar";

const MainPage = () => {
  return (
    <div className="flex flex-wrap h-full bg-black">
      <div>
        <div className="mt-12">
          <CategoryBar />
        </div>
        <div className="flex flex-row flex-wrap justify-center md:justify-start  p-2 sm:pl-16">
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
          <YoutubeEmbed embedId="u8vMu7viCm8?si=TIs1fadkODzmw6Vn" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
