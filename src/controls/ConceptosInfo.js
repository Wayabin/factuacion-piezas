import React from "react";

import { UI, Container } from "./lib/kuhnidev";
import ReceptorDireccionInfo from "./ReceptorDireccionInfo";

export default props => {
  const { ui, concepto, setConcepto } = props;

  return (
    <Container container={concepto} setContainer={setConcepto}>
      {(concepto, setConcepto) => (
        <UI index={ui}>
          {({
            Input,
            Text,
            SelectOption,
            RoundIcon,
            HiddenContainer,
            BuscadorClavesSat
          }) => (
            <div className="container-fluid">
              <div className=" row  border mb-2">
                <code className="col-12">{JSON.stringify(concepto)}</code>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 my-2">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Clave"
                      mode="dark"
                      iconRequiered={!(concepto || {}).clave}
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      iconSize="18px"
                    />
                    <Input
                      text={(concepto || {}).clave}
                      setText={result => {
                        setConcepto({ ...concepto, clave: result });
                      }}
                      fontFamily="Arial Narrow, sans-serif"
                      textColor="primary"
                      placeholder="Ingresa la clave de producto o servicio"
                      lineBottomColor="info"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 my-2">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Producto o servicio"
                      mode="dark"
                      iconRequiered={!(concepto || {}).productoServicio}
                      icon="question"
                      iconMode="primary"
                      tooltip=""
                      iconSize="18px"
                    />
                    <Input
                      text={(concepto || {}).productoServicio}
                      setText={result => {
                        setConcepto({ ...concepto, productoServicio: result });
                      }}
                      fontFamily="Arial Narrow, sans-serif"
                      textColor="primary"
                      placeholder="Ingresa el nombre del producto o servicio"
                      lineBottomColor="info"
                    />
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 my-2 ">
                  <BuscadorClavesSat />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-3 my-2 ">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Unidad de Medida"
                      mode="dark"
                      icon="question"
                      iconMode="primary"
                      iconRequiered={
                        !((concepto || {}).unidadMedida || {}).label
                      }
                    />

                    <SelectOption
                      value={((concepto || {}).unidadMedida || {}).label}
                      textColor="primary"
                      fontFamily="Arial Narrow, sans-serif"
                      lineBottomColor="info"
                      opciones={[
                        {
                          value: "s/v",
                          label: "No hay opciones configuradas.."
                        },
                        {
                          value: "Unidad de medida",
                          label: "Unidad de medida"
                        }
                      ]}
                      setText={result => {
                        setConcepto({ ...concepto, unidadMedida: result });
                      }}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-3 my-2">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Cantidad"
                      mode="dark"
                      iconRequiered={!(concepto || {}).cantidad}
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      iconSize="18px"
                    />
                    <Input
                      text={(concepto || {}).cantidad}
                      setText={result => {
                        setConcepto({ ...concepto, cantidad: result });
                      }}
                      fontFamily="Arial Narrow, sans-serif"
                      textColor="primary"
                      placeholder="Ingresa el RFC"
                      lineBottomColor="info"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-3 my-2">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Precio unitario"
                      mode="dark"
                      iconRequiered={!(concepto || {}).precioUnitario}
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      iconSize="18px"
                    />
                    <Input
                      text={(concepto || {}).precioUnitario}
                      setText={result => {
                        setConcepto({ ...concepto, precioUnitario: result });
                      }}
                      fontFamily="Arial Narrow, sans-serif"
                      textColor="primary"
                      placeholder="Ingresa el RFC"
                      lineBottomColor="info"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-3 my-2">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Importe"
                      mode="dark"
                      iconRequiered={!(concepto || {}).importe}
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      iconSize="18px"
                    />
                    <Text
                      fontFamily="Arial Narrow, sans-serif"
                      text={`$ ${(concepto || {}).importe}`}
                      mode="dark"
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      fontSize="26px"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-3 my-2">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Descuento"
                      mode="dark"
                      iconRequiered={!(concepto || {}).descuento}
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      iconSize="18px"
                    />
                    <Input
                      text={(concepto || {}).descuento}
                      setText={result => {
                        setConcepto({ ...concepto, descuento: result });
                      }}
                      fontFamily="Arial Narrow, sans-serif"
                      textColor="primary"
                      placeholder="Ingresa el RFC"
                      lineBottomColor="info"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 my-2">
                  <div className="container-fluid p-2">
                    <Text
                      fontFamily="Lucida, sans-serif"
                      text="Descripción"
                      mode="dark"
                      iconRequiered={!(concepto || {}).descripcion}
                      icon="question"
                      iconMode="primary"
                      tooltip="El Registro Federal de Contribuyentes es una clave que requiere toda persona física o moral en México para realizar cualquier actividad económica lícita por la que esté obligada a pagar impuestos, con algunas excepciones. A estas personas se les llama contribuyentes"
                      iconSize="18px"
                    />
                    <Input
                      text={(concepto || {}).descripcion}
                      setText={result => {
                        setConcepto({ ...concepto, descripcion: result });
                      }}
                      fontFamily="Arial Narrow, sans-serif"
                      textColor="primary"
                      placeholder="Ingresa el RFC"
                      lineBottomColor="info"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <HiddenContainer
                  hiddenValue={true}
                  title="Impuestos"
                  fontSize="26px"
                  fontFamily="Lucida, sans-serif"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-3 my-2 ">
                      <div className="container-fluid p-2">
                        <Text
                          fontFamily="Lucida, sans-serif"
                          text="Impuesto"
                          mode="dark"
                          icon="question"
                          iconMode="primary"
                          iconRequiered={
                            !((concepto || {}).impuestos || {}).label
                          }
                        />

                        <SelectOption
                          value={((concepto || {}).impuestos || {}).label}
                          textColor="primary"
                          fontFamily="Arial Narrow, sans-serif"
                          lineBottomColor="info"
                          opciones={[
                            {
                              value: "s/v",
                              label: "No hay opciones configuradas.."
                            },
                            {
                              value: "Unidad de medida",
                              label: "Unidad de medida"
                            }
                          ]}
                          setText={result => {
                            setConcepto({ ...concepto, impuestos: result });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-2  d-flex justify-content-center align-items-center">
                      <button className="btn btn-primary  d-flex justify-content-center align-items-center">
                        <span className="mr-2">Agregar impuesto</span>
                        <RoundIcon icon="plus" mode="light"></RoundIcon>
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Tipo de Impuesto</th>
                            <th>Impuesto</th>
                            <th>Tasa o Cuota</th>
                            <th>Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="d-flex flex-column">
                              <span
                                className="badge badge-success"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Con cambios dentro del control"
                              >
                                Traslado
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-warning">
                                002-IVA
                              </span>
                            </td>
                            <td>
                              <code>
                                <strong>16.00%</strong>
                              </code>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </HiddenContainer>
              </div>
              <div className="row">
                <HiddenContainer
                  hiddenValue={true}
                  title="Impuestos Locales "
                  fontSize="26px"
                  fontFamily="Lucida, sans-serif"
                ></HiddenContainer>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center py-3">
                  <button className="btn btn-primary  d-flex justify-content-center align-items-center">
                    <span className="mr-2">Agregar concepto</span>
                    <RoundIcon icon="plus" mode="light"></RoundIcon>
                  </button>
                </div>
              </div>
            </div>
          )}
        </UI>
      )}
    </Container>
  );
};
