import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AnalizadorAuto = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoursOfWork, setHoursOfWork] = useState<number | null>(null);
  const [startOfWork, setStartOfWork] = useState<string>('');


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
      e.preventDefault();
  };

  return (
    <section id="analizadorautomatico" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AnalizadorAutomatico)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">START NOW</span> TO ANALYZE YOUR CALENDAR
          </HText>
          <p className="my-5">
          Nuestra función de análisis de calendario te brinda una visión completa 
          de tu tiempo. Evaluará tus intervalos sin reuniones, tiempo invertido en 
          reuniones (incluyendo reuniones aceptadas, aceptadas provisionalmente y superpuestas),
          así como el recuento de asistentes en tus reuniones. Además, distinguirá el 
          tiempo reservado, donde eres el único participante, de las reuniones reales. 
          También podrás marcar días no laborables, como feriados y vacaciones, para excluirlos 
          del análisis. Una herramienta poderosa para maximizar tu productividad y entender 
          cómo utilizas tu tiempo.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              onSubmit={onSubmit}
              action="" // llamar a un metodo del backend y pasarle las cosas
              method="POST"
            >
            <div className="mb-5">
            <label htmlFor="dateOfInitFin" className="block mb-2">
              Fechas de Inicio y Fin a analizar:
            </label>
            <div className="flex gap-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select Start Date"
              className={inputStyles}
            />

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Select End Date"
              className={inputStyles}
            />
            </div>
          </div>
          <div className="mb-5">
          <label htmlFor="startOfWork" className="block mb-2">
            Hora de inicio de la jornada laboral:
          </label>
          <input
            type="time"
            id="startOfWork"
            value={startOfWork}
            onChange={(e) => setStartOfWork(e.target.value)}
            className={`w-32 ${inputStyles}`}
          />
        </div>
          <div className="mb-5">
            <label htmlFor="hoursOfWork" className="block mb-2">
              Horas habituales de trabajo:
            </label>
            <input
              type="number"
              id="hoursOfWork"
              placeholder="Horas"
              value={hoursOfWork !== null ? hoursOfWork.toString() : ''}
              onChange={(e) => setHoursOfWork(Number(e.target.value))}
              className={`w-32 ${inputStyles}`}
              min={0} // Restringir a números negativos
              max={24}  // Restringir a un máximo de 24
            />
          </div>
              
          <div className="flex justify-center items-center">
              <button
                type="submit"
                className="mt-5 mx-auto rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </div>
            </form>
          </motion.div>

      <motion.div
        className="relative mt-16 basis-2/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
          <img
            className="w-full"
            alt="contact-us-page-graphic"
            src={ContactUsPageGraphic}
          />
        </div>
      </motion.div>
    </div>

      </motion.div>
    </section>
  );
};

export default AnalizadorAuto;
