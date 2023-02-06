import React from "react";
import "./leg.css";
import CopyToClipBoard from "react-copy-to-clipboard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Leg(props) {
  const text = props.dado.frase;

  return (
    <div className="Component">
      <div className="C1">
        <input type="text" />
      </div>
      <div className="Component2">
        <div className="C2" value={text}>
          {props.dado.frase}
        </div>
        <div className="C3">
          <CopyToClipBoard text={text}>
            <ContentCopyIcon className="botao"/>
          </CopyToClipBoard>
        </div>
      </div>
    </div>
  );
}
