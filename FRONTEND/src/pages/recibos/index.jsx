import html2canvas from "html2canvas";
import Recibo from "../../components/recibo";


const Recibos = () => {
  let div = document.getElementById("recibo");

  const clicou = () => {
    html2canvas(div).then((canvas) => {
      console.log("clicou");

      document.body.appendChild(canvas);
    });
  };

  return (
    <div id="teste" className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="">Recibos</h1>
        <div className="border rounded-lg p-10">
          <Recibo />
        </div>
        <button onClick={clicou}>Printar</button>
      </div>
    </div>
  );
};

export default Recibos;