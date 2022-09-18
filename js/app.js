let btn = document.getElementById('btn-random')
const alertsWrapper = document.querySelector('.app-output')


const TOPICS = `
Tema 1. La encuesta: posibilidades y limitaciones como técnica de recogida de datos. Campos de
aplicación. Construcción del cuestionario. Fiabilidad y validez del cuestionario.
Tema 2. La actitud: definición y el cambio de actitudes. Las escalas de medición de la actitud. Aplicación
del análisis de actitudes y estudios de opinión en el ámbito social.
Tema 3. Primera infancia: inteligencia motora, desarrollo afectivo y social. Adquisiciones básicas.
Problemas y dificultades más frecuentes en esta etapa. Orientación a los padres. Pautas para la formación
de los maestros y cuidadores.
Tema 4. La niñez intermedia: desarrollo cognitivo, afectivo-emocional y social. Desarrollo de la
personalidad. Problemas y dificultades más frecuentes en esta etapa. Orientación a padres. Pautas para la
formación de los maestros. La coeducación. La violencia y la afectividad en la cultura escolar.
Tema 5. Pubertad y Adolescencia. Cambios anatomofisiológicos. Desarrollo cognitivo y moral.
Personalidad adolescente. Patrones de conducta individual y social. Desarrollo del aprendizaje social.
Influencia del grupo de iguales. Desarrollo de la sexualidad. Habilidades sociales y autocontrol.
Tema 6. La distribución normal. Estadística inferencial: estimación de parámetros y pruebas de hipótesis.
Distribución muestral. Error alfa y beta (i y ii). Grado de significación estadística.
Tema 7. Relación entre variables: relación entra variables cualitativas, relación entre variables
cuantitativas, relación entre variables cuantitativas y cualitativas. El modelo general lineal. El modelo de
regresión múltiple. Técnicas de regresión multivariantes.
Tema 8. Ordenación del sistema educativo en Andalucía: estructura, principios, fines y contenido.
Régimen de centros docentes que imparten enseñanzas de régimen general.
Tema 9. Características generales de la educación infantil y educación primaria en Andalucía: estructura,
objetivos, contenidos, competencias básicas, evaluación y metodología. Las medidas de atención a
la diversidad.
Tema 10. Características generales de la educación secundaria, del Bachillerato y de la formación
profesional de grado medio y grado superior en Andalucía: estructura, objetivos, contenidos
básicos, evaluación y metodología. Las medidas de atención a la diversidad.
Tema 11. La acción tutorial como integrante de la función docente. Técnicas y funciones de los tutores en
las enseñanzas de régimen general en el ámbito territorial de Andalucía.
Tema 12. Principios y modelos generales de evaluación en educación. Sus fines y sus tipos. La evaluación
de la formación del profesorado. La autoevaluación.
Tema 13. La orientación educativa. Principios, modelos y técnicas. La organización del sistema de
orientación en Andalucía. Los departamentos de orientación. Los equipos de orientación educativa.
Tema 14. La orientación profesional y los procesos de toma de decisión vocacional. La madurez
vocacional y el proyecto de vida. El autoconocimiento y la elección de estudios y profesiones.
Modelos y programas de orientación profesional.
Tema 15. Detección, identificación del alumnado con necesidades específicas de apoyo educativo y organización de
la respuesta educativa.
Tema 16. La familia y el proceso educativo. Crisis del modelo tradicional de la familia. Tipos de
familia y la evaluación y orientación de problemas educativos.
Tema 17. Las tecnologías de la información y de la comunicación (TIC). Definición y clasificación.
Regulación. Diferencias entre la comunicación presencial y la comunicación virtual. La formación
online y otras aplicaciones en el ámbito educativo.
Tema 18. Control de los contenidos digitales en Internet. La regulación de contenidos lícitos e ilícitos para
la infancia y la adolescencia. Las redes sociales de carácter virtual y los procesos de construcción
de roles e identidades. Indicadores estadísticos sobre el uso de Internet.
Tema 19. Los videojuegos: efectos aptitudinales y emocionales en la infancia y adolescencia. La
corregulación de contenidos y el sistema de clasificación por edades. Los videojuegos y las teorías de la
estimulación, de la catársis y del aprendizaje imitativo o vicario. La adicción a los vídeojuegos.
Tema 20. Evolución del concepto de salud. Prevención y promoción. Educación para la salud. Metodología
y líneas de actuación.
Tema 21. La reforma sanitaria en Andalucía. La atención primaria de salud. Objetivos.
Estructuración territorial. Recursos. Organización de un centro de salud.
Tema 22. La planificación sanitaria. Determinación de necesidades de salud. El Plan Andaluz de
Salud. Programación, evaluación y ejecución.
Tema 23. El programa de salud materno-infantil en Andalucía (I): planificación familiar. Atención al
embarazo, parto y puerperio.
Tema 24. El Programa de Salud materno-infantil en Andalucía (II). Líneas básicas de atención a la
infancia y adolescencia. Atención al niño sano. Atención en la etapa escolar. Protocolos de
observación continua: detección de problemas de salud en el ámbito educativo. Alteraciones físicas y de
conducta. Detección de malos tratos.
Tema 25. El programa de salud mental en Andalucía. Acogida y ordenación de la demanda. Atención
integral al paciente psicótico. La atención infanto-juvenil.
Tema 26. La atención sanitaria al paciente crónico y a las personas mayores en Andalucía.
Autonomía, fragilidad y dependencia. La educación sanitaria en dichos campos.
Tema 27. Síndrome de inmunodeficiencia adquirida. Implicaciones sanitarias, psicológicas y
sociales. Estrategias de intervención. Dispositivos para la atención a los pacientes con SIDA en Andalucía.
Programas de prevención.
Tema 28. Drogas y adicciones: concepto, clasificación. Antecedentes, líneas generales y estructura del
Plan Andaluz sobre Drogas y Adicciones. Regulación sobre prevención y asistencia en materia de
drogodependencias y adicciones y normas de desarrollo.
Tema 29. La población andaluza ante las drogas. Problemática actual en la población juvenil. Factores de
protección y factores de riesgo de las drogodependencias.
Tema 30. El abordaje de las drogodependencias y adicciones. Programas terapeúticos. La red de recursos
asistenciales: tipología, objetivos, programas y recursos de incorporación sociolaboral de personas
con problemas de drogodependencias y adicciones. Itinerarios personalizados de incorporación
social.
Tema 31. Psicopatología: clasificación CIE 10 y DSM 5: características clínicas más relevantes e
incidencia en la población de los trastornos psicológicos y trastornos de la personalidad.
Tema 32. Técnicas de intervención psicológicas efectivas contrastadas empíricamente. Tratamientos
eficaces en los trastornos de adultos. Tratamientos eficaces en los trastornos mentales de niños y
adolescentes. Criterios para determinar los tratamientos contrastados empíricamente.
Tema 33. Regulación en materia de prevención de riesgos laborales y sus disposiciones de
desarrollo. La prevención de riesgos laborales en la Administración de la Junta de Andalucía: regulación,
competencias y modelo de organización preventiva adoptado.
Tema 34. El accidente de trabajo. Factores humanos y técnicos causantes de los accidentes
laborales. Predisposición al accidente. Principales índices estadísticos utilizados en seguridad.
Siniestrabilidad laboral en Andalucía.
Tema 35. La motivación en el trabajo. Efectos de los estilos de liderazgo sobre el comportamiento
y la productividad del equipo de trabajo. Técnicas de motivación aplicables al entorno laboral.
Tema 36. Los factores psicosociales en la prevención de riesgos laborales. Definición y clasificación de los
factores psicosociales. Intervención psicosocial sobre la organización del trabajo y sobre los trabajadores.
Tema 37. El hostigamiento psicológico en el trabajo o mobbing: definición y formas de expresión. Causas.
Dinámica del hostigamiento y causas sobre la organización y el/la trabajador/a. Prevención e intervención
del mobbing.
Tema 38. El síndrome de estar quemado o bournout: definición, variables predictoras y consecuencias
para el trabajador/a. Instrumentos de medida del bournout. Colectivos laborales propensos a padecer el
síndrome característico de bournout. Técnicas de intervención sobre el bournout.
Tema 39. Situaciones de estrés en el trabajo. Las consecuencias del estrés laboral. La
vulnerabilidad individual: personalidad, expectativas de control, etc. Técnicas para la evaluación del
estrés. Estrategias de afrontamiento e intervención sobre el estrés. Acciones preventivas sobre el
estrés: acciones sobre el individuo y acciones sobre la organización. 
Tema 40. Regulación sobre la promoción de la autonomía personal y atención a las personas en situación
de dependencia. El Sistema para la Autonomía y la Atención de la Dependencia: prestaciones y
servicios; valoración de la dependencia y reconocimiento del derecho a las prestaciones del sistema.
Intervención del psicólogo.
Tema 41. La Mediación Familiar en Andalucía. Normativa reguladora. Técnicas y Modelos de mediación
familiar. Diferencias con la terapia psicológica.
Tema 42. Gestión de los recursos humanos en la Administración de la Junta de Andalucía. Metodologías
de gestión de recursos humanos en general: la valoración de puestos de trabajo y la evaluación del
desempeño en el ámbito privado. Relación de los Puestos de Trabajo como instrumento de organización
integral de los recursos humanos.
Tema 43. La Ley 9/2016, de 27 de diciembre, de servicios sociales de Andalucía. Estructura
territorial de los servicios sociales. Competencias de las Administraciones Públicas. Participación
ciudadana. Estrategia de ética. Modelo de calidad. 
Tema 44. El sistema público de servicios sociales en Andalucía. Estructura funcional. Prestaciones. Proceso de
Intervención. Planificación. Las y los profesionales de los servicios sociales. 
Tema 45. Concepto de indicador psicosocial. Definiciones y tipologías de indicadores. Metodología
de elaboración de un sistema de indicadores de cambio social. Límites de los indicadores.
Tema 46. La comunidad como unidad de acción. Concepto y características de la programación de
la intervención comunitaria. Tipos y modalidades de los programas comunitarios. Diseño, administración,
formación, participación y coordinación en los programas comunitarios.
Tema 47. La evaluación sistemática de programas, aspectos metodológicos de la evaluación. Propósitos
evaluativos: objetivos, perfeccionamiento y centrados en el cliente.
Tema 48. Los servicios sociales comunitarios en la Ley 9/2016, de 27 de diciembre, de servicios
sociales de Andalucía. Funciones. Equipos profesionales. Profesional de referencia. 
Tema 49. La situación de Discapacidad: evolución del concepto, descripción y clasificación.
Normativa en materia de discapacidad. Reconocimiento, declaración y clasificación del grado de
discapacidad. La atención a las personas con discapacidad: centros, servicios, ayudas y
prestaciones. La inclusión y la participación de las personas con discapacidad. 
Tema 50. Las personas mayores: aspectos biológicos, psicológicos y sociales. El Paradigma del
Envejecimiento Activo. 
Tema 51. Atención y protección a las personas mayores en Andalucía: Normativa, Recursos, Servicios,
Programas y Prestaciones. El maltrato en el ámbito de las personas mayores. 
Tema 52. Las Políticas de Igualdad de Oportunidades y los Planes de Igualdad. Recursos de atención
a las mujeres que sufren violencia en la Comunidad Autónoma de Andalucía.
Tema 53. Concepto , tipología, manifestaciones y víctimas de violencia de género. Antecedentes y
evolución en el abordaje político y social. Marco legal vigente. El pacto de Estado en materia de Violencia
de Género y la Ley 13/2007, de 26 de noviembre, de medidas de prevención y protección integral contra
la violencia de género: nociones básicas. La violencia en la pareja o expareja: Etiología, el proceso de los
malos tratos. Entorno familiar. Características psicológicas y situación personal de las víctimas y de los
maltratadores. Indicadores de violencia. La intervención en crisis. La violencia vicaria. La violencia sexual.
Tema 54. Regulación sobre las medidas de protección Integral contra la violencia de género. El
informe pericial en casos de violencia de género. Pruebas psicológicas para detectar malos tratos.
El síndrome de Estocolmo doméstico en mujeres maltratadas y el Trastorno de Estrés Postraumático
como indicativos válidos en los juzgados de violencia. Los equipos psicosociales en los juzgados de
violencia. La segunda victimización. Actitud personal y repercusión en la intervención profesional. 
Tema 55. Derechos, igualdad de trato y no discriminación de las personas homosexuales,
bisexuales, transexuales, transgénero y/o intersexuales (LGTBI), y de sus familiares, en la
Comunidad Autónoma de Andalucía. Conceptos, principios y efectividad de los derechos. Normativa
aplicable. 
Tema 56. La protección jurídica del menor. Derechos de las personas menores y su interés
superior. Actuaciones en situación de desprotección. Atención inmediata. Actuaciones en situación
de riesgo. La situación de desamparo. Guarda de menores. Medidas de protección. 
Tema 57. La adopción internacional: normativa reguladora, características diferenciales. Factores de
riesgo y de protección en la valoración de la idoneidad para la adopción internacional. La residencia. La
postadopción: la parentalidad adoptiva y la construcción del vínculo y los principales problemas de
adaptación.
Tema 58. El maltrato infantil. Explicaciones etiológicas y factores de riesgo de las situaciones de
desprotección infantil. Programas de detección, prevención y tratamiento del maltrato infantil en
Andalucía. El Sistema de Información del Maltrato Infantil. 
Tema 59. La violencia sexual en la infancia. Prevención, detección y tratamiento. Los Programas de
atención a menores víctimas de violencia sexual. Papel de la psicología.
Tema 60. Detección, investigación y valoración de situaciones de riesgo y desamparo infantil. La
intervención familiar en casos de desprotección infantil. La prevención. El papel del psicólogo en los
equipos de atención e intervención en familias con menores en situación de riesgo y desprotección.
Tema 61. Acogimiento Familiar: normativa reguladora, tipos y clasificación, criterios de aplicación como
medida de protección. Repercusiones psicológicas y sociales en el menor y la familia. Intervención
del psicólogo en el proceso.
Tema 62. La adopción: normativa reguladora, situación actual de la adopción, repercusiones psicológicas
y sociales en el menor y la familia, intervención del psicólogo en el proceso. La «revelación» y la
«búsqueda de orígenes». El Servicio postadopción.
Tema 63. El proceso de la valoración de la idoneidad. La entrevista psicológica de valoración de
idoneidad: objetivos, características, áreas a explorar. Actitudes del entrevistador. Interpretación de resultados.
El informe de idoneidad/no idoneidad. Pruebas psicológicas: Criterios de aplicación. La formación de los
solicitantes.
Tema 64. El acoplamiento del menor. Seguimiento y problemas de adaptación. Los riesgos de interrupción
y la prevención de los mismos. La intervención del psicólogo durante el proceso.
Tema 65. Acogimiento residencial. Programas y centros de protección de menores. Normativa.
Organización, funcionamiento y planificación de la acción educativa. Atención a las necesidades de las
personas menores en acogimiento residencial. Preparación para la vida independiente. La intervención
desde el equipo técnico. 
Tema 66. Características psicosociales de los jóvenes delincuentes y de los menores
delincuentes.Tipología de delitos. Modelos explicativos de la delincuencia juvenil y modelos de
intervención socioeducativa. Situación en Andalucía.
Tema 67. Regulación sobre la responsabilidad penal de los menores. Los menores infractores:
intervención del psicólogo en el equipo técnico. El informe técnico. El proyecto de centro y el
proyecto de atención individualizado.
Tema 68. Intervención en crisis y emergencias. Delimitación conceptual y tipología de emergencias. Tipos
de afectados. Reacciones ante los eventos traumáticos. Primeros auxilios psicológicos. La comunicación
en emergencias: comunicación de malas noticias. El duelo. Atención al interviniente: el estrés
traumático secundario. Intervención estratégica: asesoramiento y organización de escenarios.
Tema 69. Psicología y justicia: regulación jurídica de la figura del perito. Psicología forense y sus ámbitos
de aplicación. Técnicas psicológicas aplicadas al ámbito forense. La entrevista psicológica forense y las
pruebas psicológicas en el ámbito forense, ventajas y limitaciones.
Tema 70. Inmigración y emigración: análisis de la situación y repercusiones en Andalucía. Plan integral
para la inmigración en Andalucía. Cooperación al desarrollo y voluntariado social en este ámbito.`


TOPICARR = TOPICS.split("Tema")

function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

let appearedTopics = []

btn.addEventListener('click', function(){
    findTopic(appearedTopics)
    findTopic(appearedTopics)
    findTopic(appearedTopics)
    let alerts = alertsWrapper.querySelectorAll('.alert')
    let timeOut = 0
    alerts.forEach((alert, i) =>{
        switch(i){
            case 0: setTimeout(() => alert.classList.add('fade-in'), 0)
                break;
            case 1: setTimeout(() => alert.classList.add('fade-in'), 500)
                break;
            case 2: setTimeout(() => alert.classList.add('fade-in'), 1000)
                break;
        }
    })
    if(window.innerWidth < 992){
        window.scrollTo(0, document.body.scrollHeight)
    }
})

function appendTopic(topic){
    const fragment = document.createDocumentFragment();
    const templateTopics = document.querySelector('#topicsTemplate')
    let alert = templateTopics.content.querySelector('.alert')
    alert.textContent = topic
    const clone = templateTopics.cloneNode(true)
    fragment.append(clone.content)
    alertsWrapper.append(fragment)
}
function findTopic(arr){
    if(alertsWrapper.childElementCount === 4)return
    let randomNum = getRandomInt(70)
    arr.forEach(item => {
        if(+item === randomNum) {
            randomNum =  Math.ceil(Math.random() * randomNum)
        } 
    })
    randomNumFormatted = `${randomNum}.`
    TOPICARR.forEach(topic => {
        let topicSub = topic.trim().substring(0, topic.indexOf("."))
        if(topicSub === randomNumFormatted){
            appendTopic(topic)
            arr = [...arr, +randomNumFormatted]
        }
    });
}
