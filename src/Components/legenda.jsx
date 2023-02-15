import React, { useState } from "react";
import "../Components/legenda.css";
import { DataLegenda } from "../data-legendas";
import Leg from "../Components/leg";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";

import Tabs from "@mui/material/Tabs";
import { Box } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Legenda() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const datas = DataLegenda ?? []; // PUXANDO O ARRAY DO DATABASE

  const [dados, setDados] = useState(datas);

  const filterOnChange = (event) => {
    let updatedList = [...datas];
    let busca = event.target.value;
    updatedList = updatedList.filter((item) => {
      return item.frase.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
    });
    setDados(updatedList);
  };

  return (
    <div className="dBody">
      <div className="PrimeiraSection">
        <div className="legendapesquisar">
          <TextField
            onChange={filterOnChange}
            className="textfield"
            id="filled-basic"
            label="Pesquise aqui"
            variant="filled"
            size="large"
          />
        </div>
        <div className="panoramica">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="TM" {...a11yProps(0)} />
                <Tab label="CD" {...a11yProps(1)} />
                <Tab label="P/I" {...a11yProps(2)} />
                <Tab label="ES" {...a11yProps(3)} />
                <Tab label="AD" {...a11yProps(4)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {dados.filter((dado) => {
                return dado.subtipo === "Terceiros Molares";
              }).map(dado => (
                <Leg dado={dado}/>
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
            {dados.filter((dado) => {
                return dado.subtipo === "Coroas dentarias";
              }).map(dado => (
                <Leg dado={dado}/>
              ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
            {dados.filter((dado) => {
                return dado.subtipo === "Periapice-Implante";
              }).map(dado => (
                <Leg dado={dado}/>
              ))}
            </TabPanel>
            <TabPanel value={value} index={3}>
            {dados.filter((dado) => {
                return dado.subtipo === "Periapice-Implante";
              }).map(dado => (
                <Leg dado={dado}/>
              ))}
            </TabPanel>
            <TabPanel value={value} index={4}>
            {dados.filter((dado) => {
                return dado.subtipo === "Periapice-Implante";
              }).map(dado => (
                <Leg dado={dado}/>
              ))}
            </TabPanel>
          </Box>
          {/* 
          {dados.map((dado) => (
            <Leg dado={dado} />
          ))}
          */}
        </div>
        <div className="PanoramicaVoltar">
          <Link to="/escolha">
            <button className="voltarbutton">
              <KeyboardBackspaceIcon fontSize="large" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
