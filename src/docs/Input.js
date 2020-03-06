import React from "react";
import Input from "../controls/Input";
export default props => {
  return (
    <div className="mb-3 p-4 border">
      <p>
        Este es el control <code>&lt;Input /&gt;</code>
      </p>
      <div className="border p-4" style={{ backgroundColor: "whitesmoke" }}>
        <Input
          placeholder="Escribe tu nombre ..."
          text="Mi nombre es Kuhni"
          textColor="success"
        />
      </div>
      <p>
        Este control puede funcionar de manera asilada y recibe las propiedades:
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Modo</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Ejemplo</th>
            <th>Efecto</th>
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
                input
              </span>
            </td>
            <td>
              <code>
                <strong>text</strong>
              </code>
            </td>
            <td>
              <span className="badge badge-warning">string</span>
            </td>
            <td>
              <code>{`{ text: 'Mi nombre es Kuhni' }`}</code>
            </td>
            <td>
              <span className="text-secondary">
                Muestra el texto en el Input
              </span>
            </td>
          </tr>
          <tr>
            <td className="d-flex flex-column">
              <span className="badge badge-success">input</span>
            </td>
            <td>
              <code>
                <strong>placeholder</strong>
              </code>
            </td>
            <td>
              <span className="badge badge-warning">string</span>
            </td>
            <td>
              <code>{`{ placeholder: 'Escribe tu nombre ...' }`}</code>
            </td>
            <td>
              <span className="text-secondary">
                Ajusta el placeholder del input
              </span>
            </td>
          </tr>
          <tr>
            <td className="d-flex flex-column">
              <span className="badge badge-success">input</span>
            </td>
            <td>
              <code>
                <strong>textColor</strong>
              </code>
            </td>
            <td>
              <span className="badge badge-warning">string</span>
            </td>
            <td>
              <code>{`{ textColor: 'success' }`}</code>
            </td>
            <td>
              <span className="text-secondary">
                Ajusta el color del texto a mostrar en el input, si no recibe la
                propiedad &nbsp;
                <code>textColor</code> &nbsp; el color por defecto sera primary
                de la plantilla de estillos de css boostrap
              </span>
            </td>
          </tr>
          <tr>
            <td className="d-flex flex-column">
              <span className="badge badge-success">input</span>
            </td>
            <td>
              <code>
                <strong>disabled</strong>
              </code>
            </td>
            <td>
              <span className="badge badge-info">string</span>
            </td>
            <td>
              <code>{`{ disabled: true }`}</code>
            </td>
            <td>
              <span className="text-secondary">
                Habilita o deshabilta el control &nbsp; <code>Input</code>
                &nbsp; para escritura, si la propiedad se encuentra con valor
                true, el control no permitira edición, y false permitira edición
              </span>
            </td>
          </tr>
          <tr>
            <td className="d-flex flex-column">
              <span className="badge badge-danger">input + refresh</span>
            </td>
            <td>
              <code>
                <strong>setText</strong>
              </code>
            </td>
            <td>
              <span className="badge badge-primary">function(string)</span>
            </td>
            <td>
              <code>{`text => setText(newText)`}</code>
            </td>
            <td>
              <span className="text-secondary">
                Envía el texto de la caja de texto cuándo se pulsa Enter
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
