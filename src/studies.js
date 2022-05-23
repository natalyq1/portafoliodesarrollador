
let studies=[
    {
        id:1,
        empresa: "Kuepa-Institución para el trabajo y desarrollo humano.",
        cargo:"Técnica laboral en Digitación y Procesamiento de Datos.",
        anio:"Agosto 2022",
    },
    {
        id:2,
        empresa: "Kuepa-Institución para el trabajo y desarrollo humano.",
        cargo:"Certificación de inglés: Nivel B2",
        anio:"Febrero 2022",
    },
    {
        id:3,
        empresa: "SENA- Servicio Nacional de Aprendizaje",
        cargo:"Técnico Producción de Multimedia",
        anio:"Octubre 2021 en curso",
    },
    {
        id:4,
        empresa: "Fundación Universitaria Escuela de Artes y Letras.",
        cargo:"Estudios de pregrado-Profesional en Artes Plásticas con énfasis en procesos bidimensionales y tridimensionales ",
        anio:"2014 a 2018",
    }
]
export function getAllStudies(){
    return studies;
}
export function getStudies(id){
    return studies.find((studie)=> studie.id===id)
}