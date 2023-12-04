import { Box, Divider, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function Intro({ projects }) {
    return (
        <Box
            sx={{
                height: "94vh", // 100vh - 6vh (footer) in TemplateBanana
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Typography variant="h1" sx={{ alignSelf: "center", mb: "20px" }}>
                Hello and welcome!
            </Typography>

            <Box sx={{ m: "0 30px 30px 30px" }}>
                <Typography variant="body1" gutterBottom>
                    My name is <b>Jeremiasz</b> and I am currently a student at the{" "}
                    <b>Technical University of Vienna</b>. I am studying{" "}
                    <b>Software and Information Engineering</b> and I am in my{" "}
                    <b>second semester</b>. This is a small website I created to host and showcase
                    some of my projects.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Below you can find a list of all the projects that are hosted here.
                </Typography>

                <Typography variant="body1">I hope you enjoy your stay :D</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                {projects.map((link) => (
                    <>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4">{link.name}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Link variant="body1" href={"https://bananensplit.com" + link.link}>
                                {link.link}
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Link
                                variant="body1"
                                href={"https://github.com/bananensplit" + link.github}
                            >
                                {link.github}
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                    </>
                ))}
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <Link variant="body1" href="https://github.com/bananensplit">
                        <b>More on my Github</b>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Intro;