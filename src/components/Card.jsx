import React, { useState } from "react";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function Card(props) {
    const [open, setOpen] = useState(false);
    const TagArray = props.tags.split(', ');

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="Card">
            <button className="zoom" onClick={handleOpen}><ZoomInIcon /></button>
            <Dialog
                open={open}
                onClose={handleClose}

            >
                <DialogContent>
                        <img src={props.largeImage} alt="img" height={"300px"} width={"500px"}></img>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
                    <img src={props.image} alt="img"height={"209px"}/>
                    <div className="group">
                        <h3>Photo by {props.editor}</h3>
                        <span className="score"><span className="title">Views: </span>{props.views}</span>
                        <span className="score"><span className="title">Downloads: </span>{props.downloads}</span>
                        <span className="score"><span className="title">Likes: </span>{props.likes}</span>
                        <div className="Type-img">
                            {TagArray.map((list, index) => (
                                <p className="type" key={index}>#{list}</p>
                            ))}
                        </div>
                    </div>
        </div>
    );
}

export default Card;
