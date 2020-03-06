import React from "react";

import { ContainerArray } from "./lib/kuhnidev";

import Input from "./Input";
import Text from "./Text";
import SelectOption from "./SelectOption";

export default props => {
  const {
    receptor,
    status,
    rfcError,
    lastnameError: razonError,
    lastname2Error: usodeCfdiError
  } = props;

  return (
    <ContainerArray datas={[receptor, status]}>
      {([receptor, setReceptor], [status, setStatus]) => (
        <div className=" row shadow-sm bg-light p-2 ">
          <div className=" col-12 col-sm-12 col-md-4 mb-sm-3 ">
            <Text
              fontFamily="Lucida, sans-serif"
              text="RFC"
              mode="dark"
              iconRequiered={!receptor.rfc}
              icon="question"
              iconMode="info"
              // iconSize='2x'
            />
            <Input
              text={receptor.rfc}
              setText={setReceptor.rfc}
              textColor="danger"
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
              text={receptor.razon}
              setText={setReceptor.razon}
              textColor="success"
            />
            <div>{razonError || null}</div>
          </div>

          <div className=" col-sm-12 col-md-4 ">
            <Text
              fontFamily="Lucida, sans-serif"
              text="Uso de CFDI"
              mode="dark"
              icon="question"
              iconMode="info"
              iconRequiered={!receptor.usoCfdi}
            />

            <SelectOption textColor="danger" />
            <div>{usodeCfdiError || null}</div>
          </div>
        </div>
      )}
    </ContainerArray>
  );
};
