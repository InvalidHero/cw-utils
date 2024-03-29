import MenuIcon from "@suid/icons-material/Menu";
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@suid/material";

export const NavBar = () => {
    return (
        <>
            <div class="uni-nav-bar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Cowofers
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}