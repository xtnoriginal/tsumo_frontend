
import {styled} from "@mui/material/styles";
//import {useState} from "@types/react";
import {Outlet} from "react-router-dom";
import WebsiteNavbar from "./WebsiteNavbar";
import {useState} from "react";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

// ----------------------------------------------------------------------

export default function WebsiteLayout() {
    const [open, setOpen] = useState(false);

    return (
        <RootStyle>

            <WebsiteNavbar onOpenSidebar={() => setOpen(true)}/>
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}
