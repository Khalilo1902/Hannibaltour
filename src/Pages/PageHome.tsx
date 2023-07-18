

const PageHome = () => {
  return (
    <div className=" md:flex flex-row gap-3">
      
      <section className='flex flex-col text-center items-center mt-7 gap-3 border-solid  container mx-auto '>
                <h2 className='text-[1.7rem] p-2 m-1'>Sousse</h2>

                <figure >
                    <img className='w-[400px] h-auto rounded-2xl' src='../../public/bilder/sousse.jpg' alt=""/>
                    <figcaption> <span>statt 80 $</span> Nur für <span className='text-3xl text-red-800'>35 $</span>
                    </figcaption>
                </figure>

                <p className='p-2 ligne'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis non quae, impedit commodi
                    sapiente ipsam est illo? Odio pariatur excepturi sint molestiae! Porro est adipisci omnis provident
                    id nemo,
                    cum ullam qui dolores, eaque,
                    distinctio vitae a incidunt assumenda quos sint doloribus ducimus nostrum? Tempora distinctio
                    reiciendis
                    modi deleniti.</p>
            </section>

            <section className='flex flex-col text-center items-center mt-7 gap-3 border-solid  container mx-auto'>
                <h2 className='text-[1.7rem] p-2 m-1'>Jerba</h2>

                <figure >
                    <img className='w-[400px] h-auto rounded-2xl' src='../../public/bilder/wusste.jpg' alt=""/>
                    <figcaption> <span className=' line-through'>statt 120 $</span> Nur für <span className='text-3xl text-red-800'>35 $</span>
                    </figcaption>
                </figure>

                <p className='p-2 ligne'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis non quae, impedit commodi
                    sapiente ipsam est illo? Odio pariatur excepturi sint molestiae! Porro est adipisci omnis provident
                    id nemo,
                    cum ullam qui dolores, eaque,
                    distinctio vitae a incidunt assumenda quos sint doloribus ducimus nostrum? Tempora distinctio
                    reiciendis
                    modi deleniti.</p>
            </section>

            <section className='flex flex-col text-center items-center mt-7 gap-3 border-solid  container mx-auto'>
                <h2 className='text-[1.7rem] p-2 m-1'>Touzer</h2>

                <figure >
                    <img className='w-[400px] h-auto rounded-2xl' src='../../public/bilder/touzer.jpg' alt=""/>
                    <figcaption> <span className=" line-through">statt 200 $</span> Nur für <span className='text-3xl text-red-800'>120 $</span>
                    </figcaption>
                </figure>

                <p className='p-2 ligne'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis non quae, impedit commodi
                    sapiente ipsam est illo? Odio pariatur excepturi sint molestiae! Porro est adipisci omnis provident
                    id nemo,
                    cum ullam qui dolores, eaque,
                    distinctio vitae a incidunt assumenda quos sint doloribus ducimus nostrum? Tempora distinctio
                    reiciendis
                    modi deleniti.</p>
            </section>

      
    </div>
  )
}

export default PageHome
