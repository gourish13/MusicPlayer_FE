import { Route, Routes } from 'react-router-dom';

import { songs } from "../mock/MockSongs";
import MusicContainer from "./MusicContainer";

export default function MainView() {
    return (
        <div className={classes}>
            <Routes>
                <Route exact path="/" element={<MusicContainer songs={songs} />} />
            </Routes>
        </div>
    )
}

const classes = "flex align-stretch " +
    "max-h-[80vh] max-w-screen min-h-[80vh] min-w-screen" +
    "lg:max-h-[80vh] lg:max-w-[85vw] lg:min-h-[80vh] lg:min-w-[85vw]";