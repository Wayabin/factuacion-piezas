import React from "react";

import { UI, Container } from "./lib/kuhnidev";
import ComprobanteInfo from "./ComprobanteInfo";

export default props => {
  const { ui, emisor, setEmisor, comprobante, setComprobante } = props;

  return (
    <Container container={emisor} setContainer={setEmisor}>
      {(emisor, setEmisor) => (
        <UI index={ui}>
          {({ Input, Text, SelectOption, RoundIcon, HiddenContainer }) => (
            <div className="container-fluid ">
              <div className=" row  border mb-2">
                <code className="col-12">{JSON.stringify(emisor)}</code>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Lugar de Expedición (Matriz o Sucursal)"
                      mode="dark"
                      iconRequiered={!(emisor || {}).lugarExpedicion}
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      iconSize="18px"
                    />
                    <Input
                      text={(emisor || {}).lugarExpedicion}
                      setText={lugarResult => {
                        setEmisor({
                          ...emisor,
                          lugarExpedicion: lugarResult
                        });
                      }}
                      fontFamily="Arial Narrow, sans-serif"
                      textColor="primary"
                      placeholder="Ingresa el lugar de expedición"
                      lineBottomColor="info"
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Regimen Fiscal "
                    mode="dark"
                    icon="question"
                    iconMode="primary"
                    iconRequiered={!((emisor || {}).regimenFiscal || {}).label}
                  />

                  <SelectOption
                    value={((emisor || {}).regimenFiscal || {}).label}
                    textColor="primary"
                    fontFamily="Arial Narrow, sans-serif"
                    lineBottomColor="info"
                    opciones={[
                      {
                        value: "s/v",
                        label:
                          "No hay opciones configuradas para el regimen fiscal .."
                      },
                      {
                        value: "601-General de Ley Personas Morales",
                        label: "601-General de Ley Personas Morales"
                      },
                      {
                        value: "603-Personas Morales con fines no lucrativos",
                        label: "603-Personas Morales con fines no lucrativos"
                      }
                    ]}
                    setText={result => {
                      setEmisor({ ...emisor, regimenFiscal: result });
                    }}
                  />
                </div>

                <hr />

                <HiddenContainer
                  hiddenValue={true}
                  title="Comprobante"
                  fontFamily="Lucida, sans-serif"
                  fontSize="20px"
                >
                  <ComprobanteInfo
                    ui={{
                      Input,
                      Text,
                      SelectOption,
                      RoundIcon,
                      HiddenContainer
                    }}
                    comprobante={comprobante}
                    setComprobante={setComprobante}
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
