
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 500,
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
}));

export default ({ profi }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [likes, addLikes] = React.useState(0)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return <Card className={classes.root}>
        <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>

                </Avatar>
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
                <FavoriteIcon />
            </IconButton>
            Likes: {likes}
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
                    {profi.reviews}
                </Typography>

            </CardContent>
        </Collapse>
    </Card >
}