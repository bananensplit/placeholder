import { Box } from "@mui/material";
import CoalaImg from "./components/CoalaImg";
import Intro from "./components/Intro";

const links = [
    {
        name: "Tiss Calendar Formatter 📅",
        link: "/tisscal",
        github: "/tiss-cal-formatter",
    },
    {
        name: "Rude Mr. Robot 🤖",
        link: "/ruderobot",
        github: "/Mr.-Ruderobot",
    },
    {
        name: "Lovecalculator ❤️",
        link: "/lovecalculator",
        github: "/placeholder/tree/lovecalculator",
    },
];

function App() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "800px",
                    margin: "auto",
                    padding: "10px",
                }}
            >
                <Intro projects={links} />
                <CoalaImg />
            </Box>
        </>
    );
}

export default App;
