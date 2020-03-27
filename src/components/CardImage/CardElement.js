import React from "react"
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import TextsmsIcon from '@material-ui/icons/Textsms';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Book from "../BookAppointments/BookAppointments.js"
import EuroIcon from '@material-ui/icons/Euro';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 500,
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: "contain",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardPrice: {
        fontSize: "18",
        marginLeft: 8,
        marginRight: 12,

    },
    title: {
        fontSize: 30,
    },
}));

export default ({ profi }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [isComment, showComent] = React.useState(false);
    const [commentText, changeComent] = React.useState("");


    const handleChange = (e) => changeComent(e.target.value)

    const [likes, addLikes] = React.useState(0)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return <Card className={classes.root} key={profi.name}>
        <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar} src={profi.img} />




            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }

            title={profi.name}

        />
        <CardMedia

            className={classes.media}
            image={profi.img}

        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {profi.hireMe}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={() => addLikes(likes + 1)}>
                <ThumbUpIcon />
            </IconButton>
            {likes}
            <IconButton aria-label="add to favorites" onClick={() => showComent(!isComment)}>
                <TextsmsIcon />
            </IconButton>
            {isComment ? <input type="text" onChange={handleChange} /> : null}
            <Typography className={classes.cardPrice}>
                <h4><EuroIcon />{profi.price}/hr</h4>

            </Typography>


            <Book />
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />

            </IconButton>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Contact:</Typography>
                <Typography paragraph>
                    <MailOutlineIcon /> {profi.email}

                </Typography>
                <Typography paragraph>
                    <CallIcon />{profi.fone}
                </Typography>
                <Typography paragraph>Comment:</Typography>
                <Typography paragraph>
                    {commentText}
                </Typography>

            </CardContent>
        </Collapse>
    </Card >
}