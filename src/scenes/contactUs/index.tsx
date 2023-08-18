import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from "react";
import { logOutReload } from "@/shared/helper";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type Stat = {
  occupancyPercentage: number; // Asegúrate de que esta propiedad exista en los datos del evento
  freePercentage: number;
};

const AnalizadorAuto = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [startOfWork, setStartOfWork] = useState<string>('');
  const [endOfWork, setEndOfWork] = useState<string>('');
  const [stats, setStats] = useState<Stat>({ occupancyPercentage: 0, freePercentage: 0 }); // Estado para almacenar los eventos
  const [popupVisible, setPopupVisible] = useState(false);
  

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const googleUserString = localStorage.getItem("googleUser");
    const googleUser = JSON.parse(googleUserString || "");
    const accessToken = googleUser._tokenResponse.oauthAccessToken;

    const requestData = {
      startDate,
      endDate,
      startTime: startOfWork,
      endTime: endOfWork,
    };

    try {
      const response = await fetch("http://localhost:8080/app/calendar", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json', // Especificar el tipo de contenido JSON
        },
        body: JSON.stringify(requestData), // Convertir el objeto en una cadena JSON
      });

      if (!response.ok) {
        // Manejar errores de respuesta aquí
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      setStats(data);
      setPopupVisible(true); // Mostrar el popup

    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
    
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
              onSubmit={handleSubmit}
              action="" // llamar a un metodo del backend y pasarle las cosas
              method="POST"
            >
            <div className="mb-5">
            <label htmlFor="dateOfInitFin" className="block mb-2">
              Fechas de Inicio y Fin a analizar:
            </label>
            <div className="flex gap-4">
            <DatePicker
              selected={startDate !== '' ? new Date(startDate) : null}
              onChange={(date) => setStartDate(date?.toISOString() || '')}
              placeholderText="Select Start Date"
              className={inputStyles}
            />

            <DatePicker
              selected={endDate !== '' ? new Date(endDate) : null}
              onChange={(date) => setEndDate(date?.toISOString() || '')}
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
          <label htmlFor="startOfWork" className="block mb-2">
            Hora de fin de la jornada laboral:
          </label>
          <input
            type="time"
            id="endOfWork"
            value={endOfWork}
            onChange={(e) => setEndOfWork(e.target.value)}
            className={`w-32 ${inputStyles}`}
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
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
    <img
      className="w-full"
      alt="contact-us-page-graphic"
      src={ContactUsPageGraphic}
    />
    {popupVisible && (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-70 backdrop-blur-md">
  <div className="bg-white rounded-lg p-5 max-w-md">
    <h2 className="text-2xl font-semibold mb-3">Resultados del Análisis:</h2>
    <p className="mb-2">Ocupación: {stats?.occupancyPercentage.toFixed(2)}%</p>
    <p>Libre: {stats?.freePercentage.toFixed(2)}%</p>
    <div className="mt-auto flex justify-center">
    <button
      onClick={() => setPopupVisible(false)}
      className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition duration-300"
    >
      Cerrar
    </button>
    </div>
  </div>
</div>
    )}
  </div>
</motion.div>

    </div>

      </motion.div>
    </section>
  );
};

export default AnalizadorAuto;
