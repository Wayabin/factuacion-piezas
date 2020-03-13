import React from "react";

import { UI, Container } from "./lib/kuhnidev";
import ReceptorDireccionInfo from "./ReceptorDireccionInfo";

export default props => {
  const { ui, receptor, setReceptor, direccion, setDireccion } = props;

  return (
    <Container container={receptor} setContainer={setReceptor}>
      {(receptor, setReceptor) => (
        <UI index={ui}>
          {({ Input, Text, SelectOption, RoundIcon, HiddenContainer }) => (
            <div className="container-fluid">
              <div className=" row  border mb-2">
                <code className="col-12">{JSON.stringify(receptor)}</code>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="RFC"
                      mode="dark"
                      iconRequiered={!(receptor || {}).rfc}
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      iconSize="18px"
                    />
                    <Input
                      text={(receptor || {}).rfc}
                      setText={result => {
                        setReceptor({ ...receptor, rfc: result });
                      }}
                      fontFamily="Arial Narrow, sans-serif"
                      textColor="primary"
                      placeholder="Ingresa el RFC"
                      lineBottomColor="info"
                    />
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Nombre o Razón Social"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(receptor || {}).razon}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(receptor || {}).razon}
                    setText={result => {
                      setReceptor({ ...receptor, razon: result });
                    }}
                    textColor="primary"
                    placeholder="Ingresa el nombre o razòn social"
                    lineBottomColor="info"
                  />
                </div>

                <div className="col-sm-12 col-md-4 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Uso de CFDI"
                    mode="dark"
                    icon="question"
                    iconMode="primary"
                    iconRequiered={!((receptor || {}).usoCfdi || {}).label}
                  />

                  <SelectOption
                    value={((receptor || {}).usoCfdi || {}).label}
                    textColor="primary"
                    fontFamily="Arial Narrow, sans-serif"
                    lineBottomColor="info"
                    opciones={[
                      {
                        value: "s/v",
                        label: "No hay opciones configuradas.."
                      },
                      {
                        value: "G01-Adquisicion de mercancias",
                        label: "G01-Adquisicion de mercancias"
                      },
                      {
                        value: "G02-Devoluciones, descuentos o bonificaciones",
                        label: "G02-Devoluciones, descuentos o bonificaciones"
                      }
                    ]}
                    setText={result => {
                      setReceptor({ ...receptor, usoCfdi: result });
                    }}
                  />
                </div>

                <hr />

                <HiddenContainer
                  hiddenValue={true}
                  title="Dirección"
                  fontFamily="Lucida, sans-serif"
                  fontSize="20px"
                >
                  <ReceptorDireccionInfo
                    ui={{
                      Input,
                      Text,
                      SelectOption,
                      RoundIcon,
                      HiddenContainer
                    }}
                    direccion={direccion}
                    setDireccion={setDireccion}
                  />
                </HiddenContainer>
              </div>
            </div>
          )}
        </UI>
      )}
    </Container>
  );
};
