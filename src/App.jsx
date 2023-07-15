import React, { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PrviKorak from "./components/PrviKorak";
import DrugiKorak from "./components/DrugiKorak";
import TreciKorak from "./components/TreciKorak";
import CetvrtiKorak from "./components/CetvrtiKorak";

const App = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    ime: "",
    prezime: "",
    email: "",
    zanimanje: "",
    grad: "",
    adresa: "",
  });

  return (
    <>
      {page === 1 && (
        <PrviKorak
          page={page}
          setPage={setPage}
          data={data}
          setData={setData}
        />
      )}
      {page === 2 && (
        <DrugiKorak
          page={page}
          setPage={setPage}
          data={data}
          setData={setData}
        />
      )}
      {page === 3 && <TreciKorak page={page} setPage={setPage} data={data} />}
      {page === 4 && <CetvrtiKorak />}
    </>
  );
};

export default App;
