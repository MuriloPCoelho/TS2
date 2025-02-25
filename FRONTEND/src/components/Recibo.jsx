import logo from "../assets/ts-logo.jpg";
import Assinatura from "./Assinatura";

import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

const Recibo = () => {
  return (
    <div
      id="recibo"
      className="bg-[#f9fdfe] rounded-xs text-preto aspect-[3/2] max-w-2xl py-4 px-6 flex flex-col gap-2"
    >
      <div
        id="recibo-header"
        className="flex justify-between items-center border-b pb-2"
      >
        <div className="text-xs font-semibold flex items-center gap-2 w-full">
          <div className="w-12 h-12">
            <img src={logo} alt=" logo ts" />
          </div>
          <div>
            <div className="whitespace-nowrap">
              ACADEMIA DE TENIS SANTOS LTDA.
            </div>
            <div>CNPJ: 19.437.767/0001-00</div>
          </div>
        </div>
        <div className="font-bold text-3xl w-full text-center">RECIBO</div>
        <div className="w-full flex justify-end">
          <div className="bg-ts-20 px-[16px] py-[8px] rounded font-semibold">
            <div className="">R$ 1440,00</div>
          </div>
        </div>
      </div>
      <div id="recibo-body" className="flex flex-col gap-5 py-2 h-full">
        <div>
          <span className="font-semibold">Recebemos de: </span>
          <span>Fulano de Tal</span>
        </div>
        <div>
          <span className="font-semibold">A importância de: </span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
          {/* @TODO valor por extenso do total */}
        </div>
        <div>
          <span className="font-semibold">Correspondente a: </span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At magnam
            nostrum nobis quis doloribus quaerat ex perferendis consequatur cum
            dolor!
          </span>
          {/* @TODO lista de itens */}
        </div>
      </div>
      <div className="flex gap-1 font-semibold">
        <span>Canoas,</span>
        <span>10 de Janeiro de 2000</span>
      </div>
      <div id="recibo-footer" className="pt-4 border-t ">
        <div>
          <div className="py-3 px-1 w-1/2 ml-auto">
            <Assinatura />
          </div>
          <div className="text-sm flex flex-col gap-2">
            <div>
              <Icon icon={faPhone} /> (51) 99360-7472
            </div>
            <div>
              <Icon icon={faEnvelope} /> triskasantostennis@hotmail.com
            </div>
            <div>
              <Icon icon={faMapMarkerAlt} />{" "}
              <span className="whitespace-nowrap">
                Av. Inconfidência, 740 - Marechal Rondon, Canoas - RS, 92020-342
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recibo;
