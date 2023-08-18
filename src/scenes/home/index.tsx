import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorChatGpt from "@/assets/Unknown-3.png";
import SponsorYoutube from "@/assets/Unknown-4.png";
import SponsorFortune from "@/assets/Unknown-5.png";
import SponsorGoogle from "@/assets/Unknown-6.png";
import SponsorCantabria from "@/assets/cantabria.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="Logo-fotor-bg-remover" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
            Gana el control de tu tiempo y mejora la colaboración en tu equipo con 
            nuestra app de organización de reuniones. NoMoreMeetings analiza 
            tus citas para un flujo de trabajo más fluido y conectado.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Start Now
            </ActionButton>
            <a
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              href="https://www.sodexo.es/blog/gestion-tiempo/#:~:text=Cuando%20se%20aprende%20a%20administrar,efectiva%20y%20se%20aproveche%20mejor."  // Reemplaza esto con la URL de la página web externa
              target="_blank"  // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer"  // Agrega atributos de seguridad recomendados
            >
            Learn More
            </a>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 flex justify-center items-center">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="chat-sponsor" src={SponsorChatGpt} />
              <img alt="youtube-sponsor" src={SponsorYoutube} />
              <img alt="stack-sponsor" src={SponsorFortune} />
              <img alt="google-sponsor" src={SponsorGoogle} />
              <img alt="cantabria-sponsor" src={SponsorCantabria} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
