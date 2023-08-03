import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  HeartIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Mayor Productividad",
    description:
      "La gestión del tiempo eficiente te permite priorizar tareas y enfocarte en lo más importante.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Reducción del Estrés",
    description:
      "Al tener un plan claro y organizado, puedes evitar la sensación de estar abrumado por múltiples tareas y plazos.",
  },
  {
    icon: <CalendarIcon className="h-6 w-6" />,
    title: "Mejor Toma de Decisiones",
    description:
      "Al tener un manejo adecuado del tiempo, tienes la oportunidad de tomar decisiones más informadas y pensadas.",
  },
  {
    icon: <BuildingOfficeIcon className="h-6 w-6" />,
    title: "Mejora Calidad de Trabajo",
    description:
      "Al poder dedicar más tiempo y atención a cada tarea, la calidad de tu trabajo tiende a mejorar, lo que puede tener un impacto positivo.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Crecimiento a nivel Profesional",
    description:
      "Una gestión eficiente del tiempo puede hacer que seas más eficiente y efectivo en tu trabajo, por lo que lleva a oportunidades de crecimiento y desarrollo dentro de tu organización.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST TIME.</HText>
          <p className="my-5 text-sm">
            Potencia tus estadísticas de tiempo de manera excepcional con 
            nuestra aplicación. Te ayudamos a comprender cómo utilizas tu 
            tiempo para que puedas maximizar tu productividad y lograr tus 
            metas de manera eficiente.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF MEMBERS GETTING{" "}
                    <span className="text-primary-500">ORGANIZED</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Millones de miembros felices logrando la organización que necesitan. 
              Nuestra plataforma te brinda las herramientas para gestionar tu tiempo 
              de manera eficiente y eficaz.
              Te ayudamos a alcanzar tus metas y objetivos con una planificación sólida y efectiva. 
              Únete a nuestra comunidad y descubre cómo puedes simplificar tu vida y disfrutar de 
              cada momento sin preocupaciones.
              </p>
              <p className="mb-5">
              Tu tiempo es valioso, y estamos aquí para asegurarnos de que lo aproveches al máximo. 
              Únete a nuestra familia de miembros satisfechos y comienza a disfrutar de una vida más 
              equilibrada y productiva. ¡Tu futuro organizado te espera!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Start Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
