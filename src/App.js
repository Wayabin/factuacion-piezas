import React, { useState, useEffect } from "react";
import "./styles.css";
import { UI, Container, version } from "./controls/lib/kuhnidev";
import controls from "./controls/controls";

import BotClientValidator from "./controls/BotClientValidator";

import ReceptorInfo from "./controls/ReceptorInfo";
import Input from "./docs/Input";
import ReceptorDireccionInfo from "./controls/ReceptorDireccionInfo";
import HiddenContainer from "./controls/HiddenContainer";
import EmisorInfo from "./controls/EmisorInfo";
import ConceptosInfo from "./controls/ConceptosInfo";

export default function App() {
  const [receptor, setReceptor] = useState({
    rfc: "Algun RFC",
    razon: "Alguna razon Social",
    usoCfdi: {
      value: "G01-Adquisicion de mercancias",
      label: "G01-Adquisicion de mercancias"
    }
  });

  const [receptorDireccion, setReceptorDireccion] = useState({
    nombreSucursal: "Nombre de sucursal",
    contacto: "",
    calle: "",
    no_int: "",
    no_ext: "",
    colonia: "",
    referencia: "Myreferencia",
    localidad: "",
    municipio: "",
    estado: "",
    pais: "",
    cp: "",
    correo: "gino_sil@hotmail.com"
  });

  const [emisor, setEmisor] = useState({
    lugarExpedicion: "Lugar de expedicion",
    regimenFiscal: {
      value: "601-General de Ley Personas Morales",
      label: "601-General de Ley Personas Morales"
    }
  });
  const [comprobante, setComprobante] = useState({
    tipoComprobante: {
      value: "Factura",
      label: "Factura"
    },
    moneda: {
      value: "MXN - Peso Mexicano",
      label: "MXN - Peso Mexicano"
    },
    tipoCambio: "",
    metodoPago: {
      value: "PUE- Pago en una sola exibicion",
      label: "PUE- Pago en una sola exibicion"
    },
    informacionAdicional: "Informacion adicional"
  });
  const [concepto, setConcepto] = useState({
    clave: "clave",
    productoServicio: "Producto o servicio",
    descripcionSat: "Descripcion del SAT",
    unidadMedida: {
      value: "Unidad de medida",
      label: "Unidad de medida"
    },
    importe: "Importe",
    cantidad: "Cantidad",
    precioUnitario: "Precio unitario",
    descuento: "Descuento",
    descripcion: "Descripcion del producto"
  });
  return (
    <Container container={receptor} setContainer={setReceptor}>
      {(receptor, setReceptor) => (
        <UI index={controls}>
          {({ Input, Text, SelectOption, RoundIcon, HiddenContainer }) => {
            return (
              <div className="m-5">
                <HiddenContainer
                  hiddenValue={true}
                  title="Datos del receptor"
                  fontSize="26px"
                  fontFamily="Lucida, sans-serif"
                >
                  <ReceptorInfo
                    ui={{
                      Input,
                      Text,
                      SelectOption,
                      RoundIcon,
                      HiddenContainer
                    }}
                    receptor={receptor}
                    setReceptor={setReceptor}
                    direccion={receptorDireccion}
                    setDireccion={setReceptorDireccion}
                  />
                </HiddenContainer>
                <HiddenContainer
                  hiddenValue={true}
                  title="Datos del emisor"
                  fontSize="26px"
                  fontFamily="Lucida, sans-serif"
                >
                  <EmisorInfo
                    ui={{
                      Input,
                      Text,
                      SelectOption,
                      RoundIcon,
                      HiddenContainer
                    }}
                    emisor={emisor}
                    setEmisor={setEmisor}
                    comprobante={comprobante}
                    setComprobante={setComprobante}
                  />
                </HiddenContainer>
                <HiddenContainer
                  hiddenValue={false}
                  title="Conceptos"
                  fontSize="26px"
                  fontFamily="Lucida, sans-serif"
                >
                  <ConceptosInfo
                    ui={{
                      Input,
                      Text,
                      SelectOption,
                      RoundIcon,
                      HiddenContainer
                    }}
                    concepto={concepto}
                    setConcepto={concepto}
                  />
                </HiddenContainer>
              </div>
            );
          }}
        </UI>
      )}
    </Container>
  );
}
