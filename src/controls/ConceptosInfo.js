import React from "react";

import { ContainerArray, Container } from "./lib/kuhnidev";

import Input from "./Input";
import Text from "./Text";
import SelectOption from "./SelectOption";
import ReceptorDireccionInfo from "./ReceptorDireccionInfo";
import { RoundIcon } from "./RoundIcon";

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
    <div className="container-fluid shadow-sm bg-light p-2 ">
      <div className=" row shadow-sm bg-light p-2">
        <div className="col-12 col-sm-12 col-md-4 mb-2">
          Indicador Nuevo conepto
        </div>
        <div className=" p-2 col-12 col-sm-12 col-md-4 mb-2">
          Buscador de coneptos
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 mb-2">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Clave"
            mode="dark"
            iconRequiered={!receptor.rfc}
            icon="question"
            iconMode="info"
            // iconSize='2x'
          />
          <Input
            text={receptor.rfc}
            setText={setReceptor.rfc}
            fontFamily="Arial Narrow, sans-serif"
            textColor="info"
          />

          <div>{rfcError || null}</div>
        </div>
        <div className=" col-sm-12 col-md-4 mb-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Producto o servicio"
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
          />
          <div>{razonError || null}</div>
        </div>

        <div className="col-sm-12 col-md-4 mb-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Descripcion SAT"
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
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 mb-2">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Unidad de Medida"
            mode="dark"
            iconRequiered={!receptor.rfc}
            icon="question"
            iconMode="info"
            // iconSize='2x'
          />
          <Input
            text={receptor.rfc}
            setText={setReceptor.rfc}
            fontFamily="Arial Narrow, sans-serif"
            textColor="info"
          />

          <div>{rfcError || null}</div>
        </div>
        <div className=" col-sm-12 col-md-3 mb-2">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Cantidad"
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
          />
          <div>{razonError || null}</div>
        </div>
        <div className=" col-sm-12 col-md-3 mb-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Precio Unitario"
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
          />
          <div>{razonError || null}</div>
        </div>
        <div className=" col-sm-12 col-md-3 mb-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Importe"
            icon="question"
            mode="dark"
            iconMode="info"
            iconRequiered={!receptor.razon}
          />
          <Text
            fontFamily="Lucida, sans-serif"
            text="$ Importe"
            icon="question"
            mode="succes"
            fontSize="22px"
          />
          <div>{razonError || null}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 mb-2">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Descuento"
            mode="dark"
            iconRequiered={!receptor.rfc}
            icon="question"
            iconMode="info"
            // iconSize='2x'
          />
          <Input
            text={receptor.rfc}
            setText={setReceptor.rfc}
            fontFamily="Arial Narrow, sans-serif"
            textColor="info"
          />

          <div>{rfcError || null}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 mb-2">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Descripcion"
            mode="dark"
            iconRequiered={!receptor.rfc}
            icon="question"
            iconMode="info"
            // iconSize='2x'
          />
          <Input
            text={receptor.rfc}
            setText={setReceptor.rfc}
            fontFamily="Arial Narrow, sans-serif"
            textColor="info"
          />

          <div>{rfcError || null}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 mb-2 d-flex justify-content-center">
          <button className="btn btn-primary d-flex justify-content-center align-items-center">
            <span className="mr-2"> Agregar Conceptos</span>
            <RoundIcon icon="plus" mode="light" />{" "}
          </button>

          <div>{rfcError || null}</div>
        </div>
      </div>
    </div>
  );
};
