import logo from '../assets/ts-logo.jpg'

const Recibo = () => {
  return (
    <div className="bg-branco rounded-xs text-preto w-3xl p-3 flex flex-col gap-2">
        <div id="recibo-header" className="flex justify-between items-center border-b pb-2">
            <div className="text-xs font-semibold flex items-center gap-2 w-full">
                <div className="w-12 h-12">
                  <img src={logo} alt=" logo ts" />
                </div>
                <div>
                  <div className='whitespace-nowrap'>ACADEMIA DE TENIS SANTOS LTDA.</div>
                  <div>CNPJ: 19.437.767/0001-00</div>
                </div>
            </div>
            <div className="font-bold text-3xl w-full text-center">RECIBO</div>
            <div className='w-full flex justify-end'>
              <div className='bg-ts-20 px-4 py-2 rounded font-semibold flex gap-1 w-max'>
                R$
                <span>1440,00</span>
              </div>
            </div>
        </div>
        <div id="recibo-body" className="">body</div>
        <div id="recibo-footer" className="pt-2 border-t">footer</div>
    </div>
  )
}

export default Recibo