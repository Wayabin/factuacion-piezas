import React from "react";
import { UI, Container } from "./lib/kuhnidev";
export default props => {
  const { ui, direccion, setDireccion } = props;

  return (
    <Container container={direccion} setContainer={setDireccion}>
      {(direccion, setDireccion) => (
        <UI index={ui}>
          {({ Input, Text, SelectOption, RoundIcon, HiddenContainer }) => (
            <div className="cotainer-fluid ">
              <div className=" row border mb-2">
                <code className="col-12">{JSON.stringify(direccion)}</code>
              </div>
              <div className=" row ">
                <div className=" col-12 col-sm-12 col-md-6 mb-md-2  ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Nombre Sucursal"
                    mode="dark"
                    iconRequiered={!(direccion || {}).nombreSucursal}
                    icon="question"
                    iconMode="primary"
                    // iconSize='2x'
                  />
                  <Input
                    text={(direccion || {}).nombreSucursal}
                    setText={nombre_sucursal => {
                      setDireccion({
                        ...direccion,
                        nombreSucursal: nombre_sucursal
                      });
                    }}
                    fontFamily="Arial Narrow, sans-serif"
                    textColor="primary"
                    placeholder="Ingresa el nombre de la sucursal"
                    lineBottomColor="info"
                  />
                </div>

                <div className=" col-sm-12 col-md-6 mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Contacto"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(direccion || {}).contacto}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(direccion || {}).contacto}
                    setText={contactoResult => {
                      setDireccion({
                        ...direccion,
                        contacto: contactoResult
                      });
                    }}
                    textColor="primary"
                    placeholder="Escribe el nombre del contacto"
                    lineBottomColor="info"
                  />
                </div>
              </div>
              <hr />
              <div className=" row ">
                <div className=" col-12 col-sm-12 col-md-3 mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Calle"
                    mode="dark"
                    iconRequiered={!(direccion || {}).calle}
                    icon="question"
                    iconMode="primary"
                    // iconSize='2x'
                  />
                  <Input
                    text={(direccion || {}).calle}
                    setText={calleResult => {
                      setDireccion({
                        ...direccion,
                        calle: calleResult
                      });
                    }}
                    fontFamily="Arial Narrow, sans-serif"
                    textColor="primary"
                    placeholder="Escribe el nombre de la calle"
                    lineBottomColor="info"
                  />
                </div>

                <div className=" col-sm-12 col-md-3 mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="No.Int"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(direccion || {}).no_int}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(direccion || {}).no_int}
                    setText={numeroInterior => {
                      setDireccion({
                        ...direccion,
                        no_int: numeroInterior
                      });
                    }}
                    textColor="primary"
                    placeholder="Escribe el número interior"
                    lineBottomColor="info"
                  />
                </div>
                <div className=" col-sm-12 col-md-3 mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="No.Ext"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(direccion || {}).no_ext}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(direccion || {}).no_ext}
                    setText={numeroExterior => {
                      setDireccion({
                        ...direccion,
                        no_ext: numeroExterior
                      });
                    }}
                    textColor="primary"
                    placeholder="Escribe el número exterior"
                    lineBottomColor="info"
                  />
                </div>
                <div className=" col-sm-12 col-md-3 mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Colonia"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(direccion || {}).colonia}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(direccion || {}).colonia}
                    setText={coloniaResult => {
                      setDireccion({
                        ...direccion,
                        colonia: coloniaResult
                      });
                    }}
                    textColor="primary"
                    placeholder="Escribe el nombre de la colonia"
                    lineBottomColor="info"
                  />
                </div>
              </div>

              <div className=" row ">
                <div className=" col-12 col-sm-12 col-md-4  mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Referencia"
                    mode="dark"
                    iconRequiered={!(direccion || {}).referencia}
                    icon="question"
                    iconMode="primary"
                    // iconSize='2x'
                  />
                  <Input
                    text={(direccion || {}).referencia}
                    setText={referenciaResult => {
                      setDireccion({
                        ...direccion,
                        referencia: referenciaResult
                      });
                    }}
                    fontFamily="Arial Narrow, sans-serif"
                    textColor="primary"
                    placeholder="Escribe un referencia"
                    lineBottomColor="info"
                  />
                </div>

                <div className=" col-sm-12 col-md-4 mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Localidad"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(direccion || {}).localidad}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(direccion || {}).localidad}
                    setText={localidadResult => {
                      setDireccion({
                        ...direccion,
                        localidad: localidadResult
                      });
                    }}
                    textColor="primary"
                    placeholder="Escribe la localidad"
                    lineBottomColor="info"
                  />
                </div>
                <div className=" col-sm-12 col-md-4 mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Municipio"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(direccion || {}).municipio}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(direccion || {}).municipio}
                    setText={municipioResult => {
                      setDireccion({
                        ...direccion,
                        municipio: municipioResult
                      });
                    }}
                    textColor="primary"
                    placeholder="Escribe el municipio"
                    lineBottomColor="info"
                  />
                </div>
              </div>

              <div className=" row ">
                <div className=" col-12 col-sm-12 col-md-4 mb-md-2  ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Estado"
                    mode="dark"
                    iconRequiered={!(direccion || {}).estado}
                    icon="question"
                    iconMode="primary"
                    // iconSize='2x'
                  />
                  <Input
                    text={(direccion || {}).estado}
                    setText={estadoResult => {
                      setDireccion({
                        ...direccion,
                        estado: estadoResult
                      });
                    }}
                    fontFamily="Arial Narrow, sans-serif"
                    textColor="primary"
                    placeholder="Seleciona o escribe el estado"
                    lineBottomColor="info"
                  />
                </div>

                <div className=" col-sm-12 col-md-4 mb-md-2 ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Pais"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(direccion || {}).pais}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(direccion || {}).pais}
                    setText={paisResult => {
                      setDireccion({
                        ...direccion,
                        pais: paisResult
                      });
                    }}
                    textColor="primary"
                    placeholder="Seleciona o escribe el pais"
                    lineBottomColor="info"
                  />
                </div>
                <div className=" col-sm-12 col-md-4 mb-5 mb-md-2">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Codigo Postal"
                    icon="question"
                    mode="dark"
                    iconMode="primary"
                    iconRequiered={!(direccion || {}).cp}
                  />

                  <Input
                    fontFamily="Arial Narrow, sans-serif"
                    text={(direccion || {}).cp}
                    setText={codigoPostal => {
                      setDireccion({
                        ...direccion,
                        cp: codigoPostal
                      });
                    }}
                    textColor="primary"
                    placeholder="Escibre el codigo postal"
                    lineBottomColor="info"
                  />
                </div>
              </div>
              <hr />
              <div className=" row ">
                <div className=" col-12 col-sm-12 col-md-12 mb-md-2  ">
                  <Text
                    fontFamily="Lucida, sans-serif"
                    text="Correo"
                    mode="dark"
                    iconRequiered={!(direccion || {}).correo}
                    icon="question"
                    iconMode="primary"
                    // iconSize='2x'
                  />
                  <Input
                    text={(direccion || {}).correo}
                    setText={email => {
                      setDireccion({
                        ...direccion,
                        correo: email
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
