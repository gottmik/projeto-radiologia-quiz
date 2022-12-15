
import angulo_da_mand from "./Img/Angulo_da_mandibula.jfif"
import base_da_mand from "./Img/Base_da_mandibula.jfif"
import esp_nasal_inf from "./Img/Espinha_nasal_inferior.jfif"
import fissura_pterigomaxilar from "./Img/Fissura_pterigomaxilar.jfif"
import Fossa_Mandibular from "./Img/Fossa Mandibular.jfif"
import Imagem_fantasma_do_Palato_duro from "./Img/Imagem_fantasma_do_Palato_duro.jfif"

export const Anatomias = [
  {
    id: 1,
    name: "Angulo da Manbibula",
    img: angulo_da_mand,
    texto: "Facil de identificar em qualquer corte e tomara radiologica",
    corte: "Panoramica",
    info: "Facil de identificar em qualquer corte e tomara radiologica",
  },
  {
    id: 2,
    name: "Base da Mandibula",
    img: base_da_mand,
    texto: "Normalmente cortical bem espessa, facil de identificar em qualquer corte e tomara radiologica",
    corte: "Panoramico",
    info:"",
  },
  {
    id: 3,
    name: "Espinha nasal inferior",
    img: esp_nasal_inf,
    texto: "Formato de V, radiopaco, localizado proximo as raizes dos incisivos centrais",
    corte: "Panoramico",
    info:"",
  },
  {
    id: 4,
    name: "Fissura pterigomaxilar",
    img: fissura_pterigomaxilar,
    texto: "Os nervos alveolares posterior e superior passam pela fissura pterigomandibular, que continua para a fossa infratemporal",
    corte: "Panoramico",
    info:"",
  },
  {
    id: 5,
    name: "Fossa Mandibular",
    img: Fossa_Mandibular,
    texto: "A fossa Mandibular e uma dos 5 principais estruturas que formam a ATM, juntamente com o disco articular, capsula articular, cabeca da mandibula, ligamentos adjacentes",
    corte: "Panoramico",
    info:"",
  },
  {
    id: 6,
    name: "Imagem Fantasma do Palato duro",
    img: Imagem_fantasma_do_Palato_duro,
    texto: "",
    corte: "Panoramico",
    info:"",
  }
];
