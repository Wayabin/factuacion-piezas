import React, { useState } from "react";
import "./styles.css";
import { ContainerArray, Container } from "./controls/lib/kuhnidev";

import BotClientValidator from "./controls/BotClientValidator";
import ReceptorInfo from "./controls/ReceptorInfo";
import Input from "./docs/Input";
import ReceptorDireccionInfo from "./controls/ReceptorDireccionInfo";
import { HiddenContainer } from "./HiddenContainer";
import EmisorInfo from "./controls/EmisorInfo";
import ConceptosInfo from "./controls/ConceptosInfo";

export default function App() {
  const [receptor, setReceptor] = useState({
    rfc: "",
    razon: "",
    usoCfdi: "",
    direccion: {
      nombreSucursal: ""
    }
  });

  return (
    <ContainerArray containers={[receptor, setReceptor]}>
      {([receptor, setReceptor]) => (
        <div className="">
          <HiddenContainer
            title="Receptor"
            fontSize="20px"
            content={
              <ReceptorInfo receptor={receptor} setReceptor={setReceptor} />
            }
          />
          <HiddenContainer
            title="Emisor"
            fontSize="20px"
            content={
              <EmisorInfo receptor={receptor} setReceptor={setReceptor} />
            }
          />
          <HiddenContainer
            title="Conceptos"
            fontSize="20px"
            content={
              <ConceptosInfo receptor={receptor} setReceptor={setReceptor} />
            }
          />
        </div>
      )}
    </ContainerArray>
  );
}
