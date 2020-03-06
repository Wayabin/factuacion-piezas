import React, { useEffect, useState } from "react";

import { ContainerArray } from "./lib/kuhnidev";

export default props => {
  console.log("receptor del bot alidado", props);
  const { receptor, status } = props;

  return (
    <ContainerArray datas={[receptor, status]}>
      {([receptor, setReceptor], [status, setStatus]) => {
        const ClientNameError = props => {
          console.log("Props", props);
          const { rfc } = props;
          const [error, setError] = useState("");
          useEffect(() => {
            // setStatus.disabled(true);

            if (
              !/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/.test(
                rfc
              )
            ) {
              setError("¡RFC invalido! Porfavor verificalo");
              // setStatus.disabled(false);
              return;
            }
          }, [rfc]);
          if (!error) {
            return null;
          }
          return <span>Error: {error}</span>;
        };
        return <ClientNameError rfc={receptor.rfc} />;
      }}
    </ContainerArray>
  );
};
