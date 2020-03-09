import React from "react";
import Input from "./Input";
import Text from "./Text";
import SelectOption from "./SelectOption";
import { HiddenContainer } from "../HiddenContainer";
import EmisorPagoInfo from "./EmisorPagoInfo";

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
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Lugar de Expedicion (Matriz o sucursal)"
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

        <div className="col-sm-12 col-md-6 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Regimen Fiscal"
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
        <HiddenContainer
          title="Informacion de Pago"
          content={
            <EmisorPagoInfo receptor={receptor} setReceptor={setReceptor} />
          }
        />
      </div>
    </div>
  );
};
