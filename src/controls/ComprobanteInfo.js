import React from "react";
import { UI, Container } from "./lib/kuhnidev";
export default props => {
  const { ui, comprobante, setComprobante } = props;

  return (
    <Container container={comprobante} setContainer={setComprobante}>
      {(comprobante, setComprobante) => (
        <UI index={ui}>
          {({ Input, Text, SelectOption, RoundIcon, HiddenContainer }) => (
            <div className="cotainer-fluid shadow-sm bg-light p-2">
              <div className=" row border mb-2">
                <code className="col-12">{JSON.stringify(comprobante)}</code>
              </div>
              <div className=" row ">
                <div className="col-sm-12 col-md-4">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Tipo de comprobante "
                    mode="dark"
                    icon="question"
                    iconMode="primary"
                    iconRequiered={
                      !((comprobante || {}).tipoComprobante || {}).label
                    }
                  />

                  <SelectOption
                    value={((comprobante || {}).tipoComprobante || {}).label}
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
                        value: "Factura",
                        label: "Factura"
                      }
                    ]}
                    setText={result => {
                      setComprobante({
                        ...comprobante,
                        tipoComprobante: result
                      });
                    }}
                  />
                </div>
              </div>
              <div className=" row ">
                <div className="col-sm-12 col-md-6 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Moneda "
                    mode="dark"
                    icon="question"
                    iconMode="primary"
                    iconRequiered={!((comprobante || {}).moneda || {}).label}
                  />

                  <SelectOption
                    value={((comprobante || {}).moneda || {}).label}
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
                        value: "MXN - Peso Mexicano",
                        label: "MXN - Peso Mexicano"
                      },
                      {
                        value: "USD - Dollar EUA",
                        label: "USD - Dollar EUA"
                      }
                    ]}
                    setText={result => {
                      setComprobante({ ...comprobante, moneda: result });
                    }}
                  />
                </div>
                <div
                  className=" col-12 col-md-6  "
                  hidden={
                    ((comprobante || {}).moneda || {}).label ===
                    "MXN - Peso Mexicano"
                  }
                >
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Tipo de cambio "
                    mode="dark"
                    iconRequiered={!(comprobante || {}).tipoCambio}
                    icon="question"
                    iconMode="primary"
                    // iconSize='2x'
                  />
                  <Input
                    text={(comprobante || {}).tipoCambio}
                    setText={tipoCambioResult => {
                      setComprobante({
                        ...comprobante,
                        tipoCambio: tipoCambioResult
                      });
                    }}
                    fontFamily="Arial Narrow, sans-serif"
                    textColor="primary"
                    placeholder="Ingresa el valor del tipo de "
                    lineBottomColor="info"
                  />
                </div>
              </div>

              <div className=" row ">
                <div className="col-sm-12 col-md-6 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Metodo de pago  "
                    mode="dark"
                    icon="question"
                    iconMode="primary"
                    iconRequiered={
                      !((comprobante || {}).metodoPago || {}).label
                    }
                  />

                  <SelectOption
                    value={((comprobante || {}).metodoPago || {}).label}
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
                        value: "PUE- Pago en una sola exibicion",
                        label: "PUE- Pago en una sola exibicion"
                      }
                    ]}
                    setText={result => {
                      setComprobante({ ...comprobante, metodoPago: result });
                    }}
                  />
                </div>
              </div>

              <div className=" row ">
                <div className=" col-12 col-sm-12 col-md-6 mb-md-2  ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Informacion adicional "
                    mode="dark"
                    iconRequiered={!(comprobante || {}).informacionAdicional}
                    icon="question"
                    iconMode="primary"
                    // iconSize='2x'
                  />
                  <Input
                    text={(comprobante || {}).informacionAdicional}
                    setText={result => {
                      setComprobante({
                        ...comprobante,
                        informacionAdicional: result
                      });
                    }}
                    fontFamily="Arial Narrow, sans-serif"
                    textColor="primary"
                    placeholder="Escibre el correo electronico "
                    lineBottomColor="info"
                  />
                </div>
              </div>
            </div>
          )}
        </UI>
      )}
    </Container>
  );
};
