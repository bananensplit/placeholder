import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function CoalaImg({}) {
    const [imageLink, setImageLink] = useState("");

    function reloadImage() {
        fetch("https://some-random-api.com/img/koala")
            .then((response) => response.json())
            .then((data) => setImageLink(data.link))
            .catch((error) => console.error(error));
    }

    useEffect(() => reloadImage(), []);

    return (
        <Box
            sx={{
                height: "94vh", // 100vh - 6vh (footer) in TemplateBanana
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "15px",
            }}
        >
            <Typography variant="h4" sx={{ alignSelf: "center" }}>
                And if you are here to see a cute koala, here you go:
            </Typography>
            <img
                src={imageLink}
                style={{
                    alignSelf: "center",
                    maxWidth: "90vw",
                    maxHeight: "50vh",
                    borderRadius: "5px",
                }}
                alt="Nothing found, Sorry :("
            />
            <Button
                size="large"
                sx={{
                    alignSelf: "center",
                    width: "150px",
                }}
                onClick={reloadImage}
            >
                Reload
            </Button>
        </Box>
    );
}

export default CoalaImg;