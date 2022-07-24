import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import {Box, Stack, AppBar, Toolbar, IconButton, Link, Button} from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import Searchbar from "../dashboard/Searchbar";
import LanguagePopover from "../dashboard/LanguagePopover";
import NotificationsPopover from "../dashboard/NotificationsPopover";
import AccountPopover from "../dashboard/AccountPopover";
import Logo from "../../components/Logo";
import {Link as RouterLink} from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
//

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha(theme.palette.background.default, 0.72),

}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

// ----------------------------------------------------------------------

WebsiteNavbar.propTypes = {
    onOpenSidebar: PropTypes.func,
};

export default function WebsiteNavbar({ onOpenSidebar }) {

    const isDesktop = useResponsive('up', 'lg');

    return (
        <RootStyle>
            <ToolbarStyle>
                <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
                    <Iconify icon="eva:menu-2-fill" />
                </IconButton>
                <Box sx={{ flexGrow: 0.2 }} />
                <Logo/>
                <Box sx={{ flexGrow: 1 }} />

                {isDesktop &&(

                    <Stack direction="row" alignItems="center" spacing={{xs: 5, sm: 4}}>
                        <Link to="/home"  underline="none"  component={RouterLink}>
                            Home
                        </Link>
                        <Link to="/about"  underline="none"  component={RouterLink}>
                            About
                        </Link>
                        <Link to="/team"  underline="none"  component={RouterLink}>
                            Our Team
                        </Link>
                        <Link to="/blog"  underline="none"  component={RouterLink}>
                            Blog
                        </Link>
                        <Link to="/login" underline="none"  component={RouterLink}>
                            <Button  to="/login" variant="contained" > Sign In</Button>
                        </Link>

                    </Stack>
                )}

                <Box sx={{ flexGrow: 0.3}} />
            </ToolbarStyle>
        </RootStyle>
    );
}
