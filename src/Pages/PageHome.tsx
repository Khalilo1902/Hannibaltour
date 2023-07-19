const PageHome = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 ">
        <section className=" flex flex-col text-center items-center mt-7 gap-3 border-solid  container mx-auto ">
          <h2 className="text-[1.7rem] p-2 m-1">Sousse</h2>

          <figure>
            <img
              className="w-[400px] h-auto rounded-2xl cursor-pointer"
              src="../../public/bilder/sousse.jpg"
              alt=""
            />
            <figcaption>
             
              <span>statt 80 $</span> Nur für
              <span className="text-3xl text-red-800">35 $</span>
            </figcaption>
          </figure>

          <p className="p-2 ligne">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            reiciendis non quae, impedit commodi sapiente ipsam est illo? Odio
            pariatur excepturi sint molestiae! Porro est adipisci omnis
            provident id nemo, cum ullam qui dolores, eaque, distinctio vitae a
            incidunt assumenda quos sint doloribus ducimus nostrum? Tempora
            distinctio reiciendis modi deleniti.
          </p>
        </section>

        <section className="flex flex-col text-center items-center mt-7 gap-3 border-solid  container mx-auto">
          <h2 className="text-[1.7rem] p-2 m-1">Jerba</h2>

          <figure>
            <img
              className="w-[400px] h-auto rounded-2xl cursor-pointer"
              src="../../public/bilder/wusste.jpg"
              alt=""
            />
            <figcaption>
              {" "}
              <span className=" line-through">statt 120 $</span> Nur für{" "}
              <span className="text-3xl text-red-800">35 $</span>
            </figcaption>
          </figure>

          <p className="p-2 ligne">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            reiciendis non quae, impedit commodi sapiente ipsam est illo? Odio
            pariatur excepturi sint molestiae! Porro est adipisci omnis
            provident id nemo, cum ullam qui dolores, eaque, distinctio vitae a
            incidunt assumenda quos sint doloribus ducimus nostrum? Tempora
            distinctio reiciendis modi deleniti.
          </p>
        </section>

        <section className="flex flex-col text-center items-center mt-7 gap-3 border-solid  container mx-auto">
          <h2 className="text-[1.7rem] p-2 m-1">Touzer</h2>

          <figure>
            <img
              className="w-[400px] h-auto rounded-2xl cursor-pointer"
              src="../../public/bilder/touzer.jpg"
              alt=""
            />
            <figcaption>
              {" "}
              <span className=" line-through">statt 200 $</span> Nur für{" "}
              <span className="text-3xl text-red-800">120 $</span>
            </figcaption>
          </figure>

          <p className="p-2 ligne">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            reiciendis non quae, impedit commodi sapiente ipsam est illo? Odio
            pariatur excepturi sint molestiae! Porro est adipisci omnis
            provident id nemo, cum ullam qui dolores, eaque, distinctio vitae a
            incidunt assumenda quos sint doloribus ducimus nostrum? Tempora
            distinctio reiciendis modi deleniti.
          </p>
        </section>
      </div>
      <div className=" container mx-auto rounded mt-3 mb-3">
        <section>
          <img
            className=" h-[40vh] w-full object-cover"
            src="../../public/bilder/main-bild.jpg"
            alt=""
          />
        </section>
      </div>
      <div className=" container mx-auto flex  items-center justify-center gap-12 flex-wrap ">
        <div className=" flex flex-col gap-4 bg-slate-200 outline-2 w-[300px] items-center justify-center mb-4 rounded-lg">
          <h2>Couscous</h2>
          <figure className=" flex flex-col items-center justify-center p-3">
            <img
              className=" w-[200px] h-[200px] mb-4 rounded"
              src="../../public/bilder/essen/couscous.jpg"
              alt=""
            />
            <figcaption className=" p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              velit illum ex numquam voluptatem nihil aliquid mollitia fuga
              magnam dolorum!
            </figcaption>
          </figure>
        </div>
        <div>
        <div className=" flex flex-col gap-4 bg-slate-200 outline-2 w-[300px] items-center justify-center mb-4 rounded-lg">
          <h2>Gegrillte Salat</h2>
          <figure className=" flex flex-col items-center justify-center p-3">
            <img
              className=" w-[200px] h-[200px] mb-4 rounded"
              src="../../public/bilder/essen/salat.jpg"
              alt=""
            />
            <figcaption className=" p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              velit illum ex numquam voluptatem nihil aliquid mollitia fuga
              magnam dolorum!
            </figcaption>
          </figure>
        </div>

        </div>
        <div>
        <div className=" flex flex-col gap-4 bg-slate-200 outline-2 w-[300px] items-center justify-center mb-4 rounded-lg">
          <h2>MeerFrüchte</h2>
          <figure className=" flex flex-col items-center justify-center p-3">
            <img
              className=" w-[200px] h-[200px]  mb-4 rounded"
              src="../../public/bilder/essen/meerfruchten.jpg"
              alt=""
            />
            <figcaption className=" p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              velit illum ex numquam voluptatem nihil aliquid mollitia fuga
              magnam dolorum!
            </figcaption>
          </figure>
        </div>

        </div>
      </div>
    </div>
  );
};

export default PageHome;
