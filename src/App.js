import React, { useState } from "react";
import "./styles.css";

import BotClientValidator from "./controls/BotClientValidator";
import ReceptorInfo from "./controls/ReceptorInfo";
import Input from "./docs/Input";

export default function App() {
  const [receptor, setReceptor] = useState({
    rfc: "",
    razon: "",
    usoCfdi: ""
  });

  return (
    <>
      <div className="m-sm-5">
        <ReceptorInfo
          receptor={[receptor, setReceptor]}
          rfcError={<BotClientValidator receptor={[receptor, setReceptor]} />}
        />
      </div>
      <div className="m-2">
        <Input />
      </div>
    </>
  );
}
