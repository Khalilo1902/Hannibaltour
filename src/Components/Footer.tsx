const Footer = () => {
  return (
    <div>

    <footer className="bg-slate-200  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
      <div className=" flex flex-col items-center justify-start w-full border-b py-3 lg:border-r lg:border-b-0 border-gray-400">
        <div className="">
          <h4 className=" mb-4">Unsere Bezahlarten</h4>
        </div>
        <div className=" flex flex-col gap-4">
          <div className=" grid grid-cols-3 justify-items-center gap-12">
            <img
              className="clarna w-[70px] rounded-xl"
              src="/bilder/zahlungen/klarna-card.png"
              alt=""
            />
            <img
              className="w-[70px] rounded-xl"
              src="/bilder/zahlungen/master-card.png"
              alt=""
            />
            <img
              className="w-[70px] rounded-xl"
              src="/bilder/zahlungen/paypal-card.png"
              alt=""
            />
          </div>
          <div className=" grid grid-cols-3 justify-items-center gap-12">
            <img
              className="w-[70px] rounded-xl"
              src="/bilder/zahlungen/visa-card.png"
              alt=""
            />
            <img
              className="w-[70px]  bg-center"
              src="/bilder/zahlungen/vorkasse-card.png"
              alt=""
            />
            <img
              className="w-[70px]"
              src="/bilder/zahlungen/zahlungen/spa.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-start w-full border-b py-3 lg:border-r lg:border-b-0 border-gray-400">
        <div className=" flex justify-center w-full">
          <h4 className=" mb-4">Unsere Partner</h4>
        </div>
        <div className=" flex flex-col gap-4 ">
          <div className=" grid grid-cols-2 justify-items-center gap-12">
            <img
              className="w-[70px] rounded-xl bg-cover "
              src="/bilder/Partner/dpd.png"
              alt=""
            />
            <img
              className="w-[70px] rounded-xl bg-cover "
              src="/bilder/Partner/lufthansa.jpg"
              alt=""
            />
          </div>
          <div className=" grid grid-cols-2 justify-items-center gap-4 ">
            <img
              className=" rounded-xl bg-cover w-[70px]"
              src="/bilder/Partner/sparkasse.png"
              alt=""
            />
            <img
              className=" rounded-xl bg-cover w-[70px]"
              src="/bilder/zahlungen/spiegeltv.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-start w-full border-b py-3 lg:border-r lg:border-b-0 border-gray-400">
        <div className=" flex flex-col items-center">
          <h4 className="">Social Media</h4>
          <p>E-Mail:khalil.haouas@gmail.gmail </p>
          <p className=" mb-4">Telefon: 02331 - 00 00 00 00 </p>

        </div>
        <div className=" flex flex-col gap-4">
          <div className=" grid grid-cols-3 justify-items-center gap-8">
            <img
              className="clarna w-[30px] rounded-xl "
              src="/bilder/zahlungen/social-media/fb.png"
              alt=""
            />
            <img
              className="w-[30px] rounded-xl"
              src="/bilder/zahlungen/social-media/instagram.png"
              alt=""
            />
            <img
              className="w-[30px] rounded-xl"
              src="/bilder/zahlungen/social-media/twitter.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-start w-full  py-3">
        <div className=" mb-4">
          <h4 className="">Aboniren unsere news letter</h4>
        </div>
        <div className=" flex flex-col gap-4">
        <input className=" outline-none py-2 px-4 rounded-lg" type="email" placeholder="Write Your Email ..." />
<span className=" mt-3"><button className=" bg-red-300 rounded-full py-2 px-4">Abonieren</button></span>
        </div>

      </div>
    </footer>
    <div className=" bg-black text-center">
       <p className=" text-white">&copy;2023 || AllRight Reserved</p>
    </div>

    </div>
  );
};
export default Footer;
