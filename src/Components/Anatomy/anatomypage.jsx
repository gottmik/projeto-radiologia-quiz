
import { useState } from "react";
import { Panoramica, Tomografia } from "../../data-panoramica";
import Anatomy from "./anatomy";

const AnatomyPage = () => {

    const datas = Panoramica ?? []; // PUXANDO O ARRAY DO DATABASE
  // const [busca, setBusca] = useState('');

    const [dados, setDados] = useState(datas);

    const filterOnChange = (event) => {
        let updatedList = [...datas];
        let busca = event.target.value;
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
        });
        setDados(updatedList);
      };

    return (
        <div className="anatomypage">
            {dados.map(dado => (
                <Anatomy dado={dado} />
            ))}
        </div>
    )
}

export default AnatomyPage;