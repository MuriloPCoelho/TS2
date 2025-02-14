import Recibo from "../../components/recibo";
import * as htmlToImage from 'html-to-image';

const Recibos = () => {
  const clicou = () => {
    let node = document.getElementById("recibo");

    htmlToImage
      .toPng(node)
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch((err) => {
        console.error("oops, something went wrong!", err);
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
