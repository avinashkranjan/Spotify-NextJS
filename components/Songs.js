import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtoms";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="p-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks.items.map((track, index) => (
        <div>
          <Song key={track?.track?.id} track={track} order={index} />
        </div>
      ))}
    </div>
  );
}

export default Songs;
