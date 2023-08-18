import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { logOutReload } from "@/shared/helper";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
type Event = {
  summary: string; // Asegúrate de que esta propiedad exista en los datos del evento
  start: Date;
  end: Date;
};
type Stat = {
  occupancyPercentage: number; // Asegúrate de que esta propiedad exista en los datos del evento
  freePercentage: number;
};
type NumberEventsMonth = {
  numberOfEventsThisMonth: number; // Asegúrate de que esta propiedad exista en los datos del evento
};
type AverageEventDuration = {
  averageDuration: string; // Asegúrate de que esta propiedad exista en los datos del evento
};

const Estadisticas = ({ setSelectedPage }: Props) => {
  const [events, setEvents] = useState<Event[]>([]); // Estado para almacenar los eventos
  const [stats, setStats] = useState<Stat>({ occupancyPercentage: 0, freePercentage: 0 }); // Estado para almacenar los eventos
  const [numberEvents, setNumberEvents] = useState<NumberEventsMonth>({numberOfEventsThisMonth: 0});
  const [averageDuration, setaverageDuration] = useState<AverageEventDuration>({averageDuration: ""}); // Estado para almacenar los eventos
  
  

  useEffect(() => {
    const googleUserString = localStorage.getItem("googleUser");  
    const googleUser = JSON.parse(googleUserString || "");
    const accessToken = googleUser._tokenResponse.oauthAccessToken;
  
    // Realizar solicitud al backend para obtener los proximos eventos
    fetch('http://localhost:8080/app/eventsProximos', {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Reemplaza con tu access token 
      },
    })
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(logOutReload); 

         // Realizar solicitud al backend para obtener las stats
    fetch('http://localhost:8080/app/stats', {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Reemplaza con tu access token 
      },
    })
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(logOutReload);
     
      // Realizar solicitud al backend para obtener el numero total de eventos
      fetch('http://localhost:8080/app/eventsThisMonth', {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Reemplaza con tu access token 
        },
      })
        .then(response => response.json())
        .then(data => setNumberEvents(data))
        .catch(logOutReload);

        // Realizar solicitud al backend para obtener el numero total de eventos
      fetch('http://localhost:8080/app/averageEventDuration', {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Reemplaza con tu access token 
        },
      })
        .then(response => response.json())
        .then(data => setaverageDuration(data))
        .catch(logOutReload);
    
  }, []);

  

  

  const classes: Array<ClassType> = [
    {
      name: "Tiempo Ocupado",
      description: `Este es tu % de tiempo ocupado: ${stats.occupancyPercentage.toFixed(2)}%. Recuerda que un alto porcentaje de tiempo ocupado puede indicar tu enfoque y compromiso, pero también es importante mantener un equilibrio saludable entre trabajo y descanso.`,
      image: image1,
    },
    {
      name: "Tiempo Libre",
      description: `Este es tu % de tiempo libre: ${stats.freePercentage.toFixed(2)}%, un espacio valioso para crear, innovar y avanzar. Recuerda que tu porcentaje de tiempo libre puede variar en función de tus responsabilidades y objetivos. ¡Aprovéchalo al máximo y haz que cuente!`,
      image: image2,
    },
    {
      name: "Numero Total Eventos este Mes",
      description: numberEvents.numberOfEventsThisMonth > 1
      ? `Este mes tienes un total de ${numberEvents.numberOfEventsThisMonth} eventos en tu calendario.`
      : numberEvents.numberOfEventsThisMonth === 1
      ? 'Este mes tienes un evento en tu calendario.'
      : 'No tienes eventos este mes.',
      image: image3,
    },
    {
      name: "Proximos Eventos",
      description: events.length > 0
      ? `Próximos eventos: ${events.slice(0, 3).map(event => `"${event.summary}" el ${format(new Date(event.start), 'dd/MM/yyyy HH:mm')}`).join(', ')}.`
      : 'No tienes eventos próximos.',
            image: image4,
    },
    {
      name: "Duracion Promedio de Eventos",
      description: `Tus eventos tienen una duración media de ${averageDuration.averageDuration}. Recuerda que la duración óptima de una reunión suele oscilar entre 30 minutos y 1 hora, aunque esto puede variar según el tipo de reunión.`,
      image: image5,
    },
  ];

  return (
    <section id="estadisticas" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Estadisticas)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Tus Estadisticas</HText>
            <p className="py-5">
              Sumérgete en tus datos. Nuestro apartado de estadísticas te brinda 
              una vista panorámica de tus eventos y actividades en el calendario, 
              permitiéndote tomar decisiones informadas para un mejor futuro.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Estadisticas;

