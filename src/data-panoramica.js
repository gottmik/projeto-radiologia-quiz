import angulo_da_mand from "./Img/Angulo_da_mandibula.jfif";
import base_da_mand from "./Img/Base_da_mandibula.jfif";
import esp_nasal_inf from "./Img/Espinha_nasal_inferior.jfif";
import fissura_pterigomaxilar from "./Img/Fissura_pterigomaxilar.jfif";
import Fossa_Mandibular from "./Img/Fossa Mandibular.jfif";
import Imagem_fantasma_do_Palato_duro from "./Img/Imagem_fantasma_do_Palato_duro.jfif";
import septonasall from "./Img/septonasall.jpg";
import septonasal from "./Img/septonasal.jpg";
import arcozigomaticomolar from "./Img/arcozigomaticomolar.jpg";
import arcozigomaticomolarr from "./Img/arcozigomaticomolarr.jpg";
import assoalhodafossanasal from "./Img/assoalhodafossanasal.jpg";
import assoalhodafossanasall from "./Img/assoalhodafossanasall.jpg";
import assoalhodoseiomaxilar from "./Img/assoalhodoseiomaxilar.jpg";
import assoalhodoseiomaxilarr from "./Img/assoalhodoseiomaxilarr.jpg";
import conchanasalinferior from "./Img/conchanasalinferior.jpg";
import conchanasalinferiorr from "./Img/conchanasalinferiorr.jpg";
import espinhanasalanterior from "./Img/espinhanasalanterior.jpg";
import espinhanasalanteriorr from "./Img/espinhanasalanteriorr.jpg";
import extensaoalveolardoseiomolar from "./Img/extensaoalveolardoseiomolar.jpg";
import extensaoalveolardoseiomolarr from "./Img/extensaoalveolardoseiomolarr.jpg";
import seiofrontaltomo from "./Img/seiofrontaltomo.jfif";
import seiofrontalcoronaltomo from "./Img/seiofrontalcoronaltomo.jfif";
import seiofrontalaxialtomo from "./Img/seiofrontalaxialtomo.jfif";
import seioesfenoidalsagital from "./Img/seioesfenoidalsagital.jfif"
import seioesfenoidalaxial from "./Img/seioesfenoidalaxial.jfif"
import seioesfenoidalcoronal from "./Img/seioesfenoidalfrontal.jfif"

export const PanoramicaDados = [
  {
    id: 1,
    name: "Ângulo da Mandíbula",
    img: angulo_da_mand,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Panoramica",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
  },
  {
    id: 2,
    name: "Base da Mandibula",
    img: base_da_mand,
    texto:
      "Normalmente cortical bem espessa, facil de identificar em qualquer corte e tomara radiologica",
    corte: "Panoramico",
    info: "",
  },
  {
    id: 3,
    name: "Espinha Nasal Anterior",
    img: esp_nasal_inf,
    texto:
      "Formato de V, radiopaco, localizado proximo as raizes dos incisivos centrais",
    corte: "Panoramico",
    info: "",
  },
  {
    id: 4,
    name: "Fissura Pterigomaxilar",
    img: fissura_pterigomaxilar,
    texto:
      "Os nervos alveolares posterior e superior passam pela fissura pterigomandibular, que continua para a fossa infratemporal",
    corte: "Panoramico",
    info: "",
  },

  {
    id: 5,
    name: "Fissura Pterigomaxilar",
    img: fissura_pterigomaxilar,
    texto:
      "Os nervos alveolares posterior e superior passam pela fissura pterigomandibular, que continua para a fossa infratemporal",
    corte: "Panoramico",
    info: "",
  },
  {
    id: 6,
    name: "Fossa Mandibular",
    img: Fossa_Mandibular,
    texto:
      "A fossa Mandibular e uma dos 5 principais estruturas que formam a ATM, juntamente com o disco articular, capsula articular, cabeca da mandibula, ligamentos adjacentes",
    corte: "Panoramico",
    info: "",
  },
  {
    id: 7,
    name: "IM do Palato duro",
    img: Imagem_fantasma_do_Palato_duro,
    texto: "",
    corte: "Panoramico",
    info: "",
  },
];

export const Tomografias = [
  {
    id: 1,
    name: "Seio Frontal",

    img: [seiofrontaltomo, seiofrontalaxialtomo, seiofrontalcoronaltomo],
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: ["Sagital", "Axial", "Coronal"],
    info: "Facil de identificar em qualquer corte e tomara radiologica",
  },
  {
    id: 2,
    name: "Seio Esfenoidal",
    img: [seioesfenoidalsagital, seioesfenoidalaxial, seioesfenoidalcoronal],
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: ["Sagital", "Axial", "Coronal"],
    info: "Facil de identificar em qualquer corte e tomara radiologica",
  },
];

export const LesoeseAlteracoes = [
  {
    id: 1,
    name: "Cigarro2",
    img: angulo_da_mand,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Panoramica",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
  },
];

export const PeriapicalDados = [
  {
    id: 1,
    name: "Septo Nasal",
    img: septonasal,
    imgg: septonasall,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Periapical",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
    tomada: "Incisivo",
  },
  {
    id: 2,
    name: "Arco Zigomático",
    img: arcozigomaticomolar,
    imgg: arcozigomaticomolarr,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Periapical",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
    tomada: "Incisivo",
  },
  {
    id: 3,
    name: "Assoalho da Fossa Nasal",
    img: assoalhodafossanasal,
    imgg: assoalhodafossanasall,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Periapical",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
    tomada: "Incisivo",
  },
  {
    id: 4,
    name: "Assoalho do Seio Maxilar",
    img: assoalhodoseiomaxilar,
    imgg: assoalhodoseiomaxilarr,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Periapical",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
    tomada: "Incisivo",
  },
  {
    id: 5,
    name: "Concha Nasal Inferior",
    img: conchanasalinferior,
    imgg: conchanasalinferiorr,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Periapical",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
    tomada: "Incisivo",
  },
  {
    id: 6,
    name: "Espinha Nasal Anterior",
    img: espinhanasalanterior,
    imgg: espinhanasalanteriorr,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Periapical",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
    tomada: "Incisivo",
  },
  {
    id: 7,
    name: "Extensão Alveolar do Seio Maxilar",
    img: extensaoalveolardoseiomolar,
    imgg: extensaoalveolardoseiomolarr,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Periapical",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
    tomada: "Incisivo",
  },
];

