import assinatura from '../assets/assinatura-ts.jpg'

const Assinatura = () => {
  return (
    <div>
    <div className='w-72 rotate-[1.55deg]'>
      <img src={assinatura} alt="assinatura" />
    </div>
    <div className='text-center border-t z-10 relative'>
      <div className='text-sm'>Assintura do Responsavel</div>
      <div className='text-xs'>000.000.000-00</div>
    </div>
  </div>
  )
}

export default Assinatura