import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
// import { TbBrandYoutubeKids } from "react-icons/tb";
// import { SiYoutubestudio } from "react-icons/si";
import "./SideNav.css";

export default function SideNav() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const showMoreIcon = open ? (
        <KeyboardArrowUpOutlinedIcon />
    ) : (
        <KeyboardArrowDownOutlinedIcon />
    );

    return (
        <List
            className="list"
            sx={{
                width: "100%",
                maxWidth: 250,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: "100vh",
                "& ul": { padding: 0 },
            }}
            component="nav"
        >
            <ListItemButton>
                <ListItemIcon>
                    <HomeOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Home"
                />
            </ListItemButton>
            <ListItemButton className="listBtn">
                <ListItemIcon>
                    <PlayCircleOutlineIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Shorts"
                />
            </ListItemButton>
            <ListItemButton className="listBtn">
                <ListItemIcon>
                    <SubscriptionsOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Subscriptions"
                />
            </ListItemButton>
            <Divider />
            <ListItemButton className="listBtn">
                <ListItemIcon>
                    <VideoLibraryOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Library"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <HistoryOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="History"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SlideshowOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Your Videos"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <WatchLaterOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Watch Later"
                />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>{showMoreIcon}</ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Show More"
                />
                {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder className="listIcon" />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            className="listItemText"
                            primary="Starred"
                        />
                    </ListItemButton>
                </List>
            </Collapse>
            <Divider />
            <ListSubheader sx={{ fontSize: 14, fontWeight: 500 }}>
                Subscriptions
            </ListSubheader>
            <Divider />
            <ListSubheader>Explore</ListSubheader>
            <ListItemButton>
                <ListItemIcon>
                    <LocalFireDepartmentOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Trending"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <MusicNoteOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Music"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <StreamOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Live"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <VideogameAssetOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Gaming"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <FeedOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="News"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <EmojiEventsOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Sport"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LightbulbOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Learning"
                />
            </ListItemButton>

            <Divider />
            <ListSubheader>More from Youtube</ListSubheader>
            {/* <ListItemButton>
                <ListItemIcon>
                    <SiYoutubestudio className="redStudio listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Youtube Studio"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <TbBrandYoutubeKids className="redKids listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Youtube kids"
                />
            </ListItemButton> */}
            <Divider />
            <ListItemButton>
                <ListItemIcon>
                    <SettingsOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Settings"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <OutlinedFlagIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Report history"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <HelpOutlineOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Help"
                />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <FeedbackOutlinedIcon className="listIcon" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    className="listItemText"
                    primary="Send Feedback"
                />
            </ListItemButton>
            <Divider />
            <p className="googleP">
                About Press Copyright<br></br> Contact us Creator Advertise <br></br>{" "}
                Developers
            </p>
            <p className="googleP">
                Terms Privacy Policy & Safety <br></br> How YouTube works <br></br> Test
                new features
            </p>
            <p className="googleP">© 2023 Google LLC</p>
        </List>
    );
}
