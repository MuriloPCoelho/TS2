import html2canvas from "html2canvas";
import Recibo from "../../components/recibo";

const Recibos = () => {
  const clicou = () => {
    let div = document.getElementById("recibo");

    html2canvas(div).then((canvas) => {
      const imgURL = canvas.toDataURL("image/png");
      downloadImage(imgURL, 'nome-cliente.png');
    });
  };

  const downloadImage = (dataURL, fileName) => {
    let anchor = document.createElement('a');
    anchor.href = dataURL;
    anchor.download = fileName;
    anchor.click();
    anchor.remove();
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