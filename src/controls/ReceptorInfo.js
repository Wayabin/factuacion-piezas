import React from "react";
import { ContainerArray, Container } from "./lib/kuhnidev";
import Input from "./Input";
import Text from "./Text";
import SelectOption from "./SelectOption";
import { HiddenContainer } from "../HiddenContainer";
import ReceptorDireccionInfo from "./ReceptorDireccionInfo";

export default props => {
  const {
    receptor,
    setReceptor,
    status,
    rfcError,
    lastnameError: razonError,
    lastname2Error: usodeCfdiError
  } = props;

  return (
    <div className="container-fluid shadow-sm bg-light  ">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4">
          <Text
            fontFamily="Lucida, sans-serif"
            text="RFC"
            mode="dark"
            iconRequiered={!receptor.rfc}
            icon="question"
            iconMode="info"
            tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
            // iconSize='2x'
          />
          <Input
            text={receptor.rfc}
            setText={setReceptor.rfc}
            fontFamily="Arial Narrow, sans-serif"
            textColor="info"
            placeholder="Ingresa el RFC"
          />

          <div>{rfcError || null}</div>
        </div>
        <div className=" col-sm-12 col-md-4 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Nombre o Razón Social"
            icon="question"
            mode="dark"
            iconMode="info"
            iconRequiered={!receptor.razon}
          />

          <Input
            fontFamily="Arial Narrow, sans-serif"
            text={receptor.razon}
            setText={setReceptor.razon}
            textColor="info"
            placeholder="Ingresa el nombre o razòn social"
          />
          <div>{razonError || null}</div>
        </div>

        <div className="col-sm-12 col-md-4 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Uso de CFDI"
            mode="dark"
            icon="question"
            iconMode="info"
            iconRequiered={!receptor.usoCfdi}
          />

          <SelectOption
            value={receptor.usoCfdi}
            textColor="info"
            fontFamily="Arial Narrow, sans-serif"
            opciones={[
              {
                value: "s/v",
                label: "No hay opciones configuradas.."
              },
              {
                value: "123",
                label: "Opcion 123"
              }
            ]}
            setText={setReceptor.usoCfdi}
          />
          <div>{usodeCfdiError || null}</div>
        </div>

        <hr />

        <Container container={receptor} setContainer={setReceptor}>
          {(receptor, setReceptor) => (
            <HiddenContainer
              title="Dirección"
              content={
                <ReceptorDireccionInfo
                  receptor={receptor}
                  setReceptor={setReceptor}
                />
              }
            />
          )}
        </Container>
      </div>
    </div>
  );
};
