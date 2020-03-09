import React from "react";

import { ContainerArray } from "./lib/kuhnidev";

import Input from "./Input";

export default props => {
  const { client, status, nameError, lastnameError, lastname2Error } = props;

  return (
    <ContainerArray containers={[client, status]}>
      {([client, setClient], [status, setStatus]) => (
        <div>
          <h1>Datos del Cliente</h1>
          <div>
            <label>Nombre</label>
            <Input text={client.name} setText={setClient.name} />
          </div>
          <div>{nameError || null}</div>
          <div>
            <label>Apellido Paterno</label>
            <Input text={client.lastname} />
          </div>
          <div>{lastnameError || null}</div>
          <div>
            <label>Apellido Materno</label>
            <Input text={client.lastname2} />
          </div>
          <div>{lastname2Error || null}</div>
        </div>
      )}
    </ContainerArray>
  );
};
