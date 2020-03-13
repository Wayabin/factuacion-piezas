import React from "react";
import Input from "./Input";
import Text from "./Text";
import SelectOption from "./SelectOption";
import HiddenContainer from "./HiddenContainer";

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
    <div className="cotainer-fluid shadow-sm bg-light p-2">
      <div className=" row ">
        <div className="col-sm-12 col-md-4  mb-2 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Tipo de Comprobante"
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
      <div className=" row ">
        <div className="col-sm-12 col-md-6 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Moneda"
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
      <div className=" row ">
        <div className="col-sm-12 col-md-6 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Metodo de Pago"
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
        <div className="col-sm-12 col-md-6 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Forma de Pago"
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

      <HiddenContainer
        title="Informacion Adicional"
        content={
          <div className="col ">
            <Input
              fontFamily="Arial Narrow, sans-serif"
              text={receptor.razon}
              setText={setReceptor.razon}
              textColor="info"
            />
            <div>{razonError || null}</div>
          </div>
        }
      />
    </div>
  );
};
