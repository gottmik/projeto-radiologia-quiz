import "./modal.css";
import React from "react";
import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

function Panoramica(props) {
  const [isOpen, setIsOpen] = useState(false);
  // dados.map(dado => {
  //   setIsOpen({...isOpen, [dado.id]: false})
  // })

  const onClickHeader = () => {
    setIsOpen(!isOpen);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="anatomyComponent" key={props.dado.id}>
        <div className="anatomyHeader" onClick={onClickHeader}>
          <Button className="anatomyHeader" onClick={handleOpen}>
            {props.dado.name}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="img-modal">
                <img src={props.dado.img} alt="Alguma imagem" />
              </div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.dado.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {props.dado.texto}
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Panoramica;
