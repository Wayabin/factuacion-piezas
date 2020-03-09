import React from "react";
import Input from "./Input";
import Text from "./Text";
import SelectOption from "./SelectOption";

export default props => {
  const {
    receptor,
    setReceptor,
    rfcError,
    lastnameError: razonError,
    lastname2Error: usodeCfdiError
  } = props;

  console.log("Receptor Direccion", receptor);

  return (
    <div className="cotainer-fluid shadow-sm bg-light p-2">
      <div className=" row ">
        <div className=" col-12 col-sm-12 col-md-6 mb-md-2  ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Nombre Sucursal"
            mode="dark"
            iconRequiered={!receptor.direccion}
            icon="question"
            iconMode="info"
            // iconSize='2x'
          />
          <Input
            text={receptor.direccion}
            setText={setReceptor.direccion}
            fontFamily="Arial Narrow, sans-serif"
            textColor="info"
            placeholder="Ingresa el nombre de la sucursal"
          />

          <div>{rfcError || null}</div>
        </div>

        <div className=" col-sm-12 col-md-6 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Contacto"
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
            placeholder="Ingresa el nombre del contacto"
          />
          <div>{razonError || null}</div>
        </div>
      </div>
      <hr />
      <div className=" row ">
        <div className=" col-12 col-sm-12 col-md-3 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Calle"
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

        <div className=" col-sm-12 col-md-3 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="No.Int"
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
        <div className=" col-sm-12 col-md-3 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="No.Ext"
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
        <div className=" col-sm-12 col-md-3 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Colonia"
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
      </div>

      <div className=" row ">
        <div className=" col-12 col-sm-12 col-md-4  mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Referencia"
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

        <div className=" col-sm-12 col-md-4 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Localidad"
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
        <div className=" col-sm-12 col-md-4 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Municipio"
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
      </div>

      <div className=" row ">
        <div className=" col-12 col-sm-12 col-md-4 mb-md-2  ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Estado"
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

        <div className=" col-sm-12 col-md-4 mb-md-2 ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Pais"
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
        <div className=" col-sm-12 col-md-4 mb-5 mb-md-2">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Codigo Postal"
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
      </div>
      <hr />
      <div className=" row ">
        <div className=" col-12 col-sm-12 col-md-12 mb-md-2  ">
          <Text
            fontFamily="Lucida, sans-serif"
            text="Correo"
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
    </div>
  );
};
