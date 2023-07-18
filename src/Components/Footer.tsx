const Footer = () => {
  return (
    <div className=" bg-yellow-50  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full justify-items-center gap-12 py-4 ">
      {/* <div className=" flex flex-col  justify-center gap-3 w-1/3 h-96">
        
        <div className=" flex flex-wrap ">
          
        </div>
      </div>
      <div className=" flex flex-col gap-3  justify-center w-1/3 h-96">
       
        <div className=" flex flex-wrap ">
        
       
        </div> 
      </div>
      <div className=" flex flex-col  justify-center w-1/3 h-96">
        <h4 className="text[1rem] text-red-700 uppercase">
          Geprüfte Sicherheit
        </h4>
        <img className=" w-[100px]" src="../../public/bilder/zahlungen/gepruft.jpg" alt="" />
      </div>*/}
      <div className=" flex flex-col items-center justify-center w-full">
        <div className="">
          <h4 className="">Unsere Bezahlarten</h4>
        </div>
        <div className=" flex flex-col gap-4">
       <div className=" grid grid-cols-3 ">
       <img
            className="clarna w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/klarna-card.png"
            alt=""
          />
          <img
            className="w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/master-card.png"
            alt=""
          />
          <img
            className="w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/paypal-card.png"
            alt=""
          />
       </div>
         <div className=" grid grid-cols-3 ">
         <img
            className="w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/visa-card.png"
            alt=""
          />
          <img
            className="w-1/3  bg-center"
            src="../../public/bilder/zahlungen/vorkasse-card.png"
            alt=""
          />
          <img className ="w-1/3" src="../../public/bilder/zahlungen/spa.png" alt="" />
         </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center w-full">
        <div className=" flex justify-center w-full">
        <h4 className="">Unsere Partner</h4>
        </div>
        <div className=" flex flex-col gap-4 ">
       <div className=" grid grid-cols-2 justify-items-center">
       <img
          className="w-1/3 rounded-xl bg-cover "
          src="../../public/bilder/Partner/dpd.png"
          alt=""
        />
        <img
          className="w-1/3 rounded-xl bg-cover "
          src="../../public/bilder/Partner/lufthansa.jpg"
          alt=""
        />
       </div>
         <div className=" grid grid-cols-2 justify-items-center ">
         <img
          className=" rounded-xl bg-cover w-1/3"
          src="../../public/bilder/Partner/sparkasse.png"
          alt=""
        />
        <img
          className=" rounded-xl bg-cover w-1/3"
          src="../../public/bilder/zahlungen/spiegeltv.png"
          alt=""
        />
         </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center w-full ">
        <div>
          <h4 className="">Unsere Bezahlarten</h4>
        </div>
        <div className=" flex flex-col gap-4">
       <div className=" grid grid-cols-3 ">
       <img
            className="clarna w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/klarna-card.png"
            alt=""
          />
          <img
            className="w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/master-card.png"
            alt=""
          />
          <img
            className="w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/paypal-card.png"
            alt=""
          />
       </div>
     
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center w-full">
        <div>
          <h4 className="">Unsere Bezahlarten</h4>
        </div>
        <div className=" flex flex-col gap-4">
       <div className=" grid grid-cols-3 ">
       <img
            className="clarna w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/klarna-card.png"
            alt=""
          />
          <img
            className="w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/master-card.png"
            alt=""
          />
          <img
            className="w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/paypal-card.png"
            alt=""
          />
       </div>
         <div className=" grid grid-cols-3 ">
         <img
            className="w-1/3 rounded-xl"
            src="../../public/bilder/zahlungen/visa-card.png"
            alt=""
          />
          <img
            className="w-1/3  bg-center"
            src="../../public/bilder/zahlungen/vorkasse-card.png"
            alt=""
          />
          <img className ="w-1/3" src="../../public/bilder/zahlungen/spa.png" alt="" />
         </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
