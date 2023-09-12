import Img from "../assets/img-containers/Img";

interface str {
  embedId: string;
}
const YoutubeEmbed = ({ embedId }: str) => (
  <div className="w-[370px] h-[280px] m-1 p-1 bg-black rounded-xl">
    <iframe
      width="360"
      height="180"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <div className="flex">
      <Img />
      <div className="flex flex-col">
        <p className="text-white">
          Testing JavaScript with Cypress – Full Course
        </p>
        <p className="text-gray-500 text-xs">freeCodeCamp.org</p>
        <p className="text-gray-500 text-xs">10K views 17 minutes ago</p>
      </div>
    </div>
  </div>
);

export default YoutubeEmbed;
