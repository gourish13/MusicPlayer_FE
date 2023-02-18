import NowPlaying from "./components/NowPlaying/NowPlaying";
import { nowPlayingMockData } from "./mock/nowPlayingMockData";

export default function App() {
  return (
    <>
      <NowPlaying {...nowPlayingMockData} />
    </>
  );
}
