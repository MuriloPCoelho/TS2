import html2canvas from 'html2canvas';

const Recibos = () => {
  let div = document.getElementById('teste')
  
  const clicou = () => {
    
    html2canvas(div).then(canvas => {
      console.log('clicou');
      
      document.body.appendChild(canvas)
    })
  }


  return (
    <div id="teste" className="flex justify-center items-center h-screen">
      <div className=''>
        <h1 className=''>Recibos</h1>
        <button onClick={clicou}>Printar</button>
      </div>
    </div>
  );
};

export default Recibos;
