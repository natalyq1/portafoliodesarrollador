 let jobs=[
    {
        id:1,
        empresa: "SiriusXM y Outplex - Omnichannel ",
        email:"juliana.correal@kuepa.edu.co",
        cargo:"Agente call center",
        anio:"Febrero 2021 a octubre 2021 ",
        telefono:"311 1112345",
        tareas:"Responder dudas, solucionar inconvenientes de los clientes con el servicio que presta, ayudarlos en la compra del servicio, soporte técnico.\nVelar por los derechos del cliente y de la compañía.\nHacer retención."
    },
    {
        id:2,
        empresa: "Walmart.com - 24-7 InTouch",
        email:"juliana.correal@kuepa.edu.co",
        cargo:"Agente telefónico call center bilingüe ",
        anio:"Octubre 2020 a enero de 2021",
        telefono:"311 1112345",
        tareas:"Responder dudas, solucionar inconvenientes de los clientes con el servicio que presta, ayudarlos en la compra del servicio, soporte técnico.\nVelar por los derechos del cliente y de la compañía.\nHacer retención."

    },
    {
        id:3,
        nombre:"Jefe directo: Cesar Torres",
        empresa: "Joyería Carezza",
        email:"juliana.correal@kuepa.edu.co",
        cargo:"Atención al cliente, ventas y algunas labores administrativas. ",
        anio:"Enero 2019 a octubre de 2019",
        telefono:"311 1112345",
        tareas:"Responder dudas, solucionar inconvenientes de los clientes con el servicio que presta, ayudarlos en la compra del servicio, soporte técnico.\nVelar por los derechos del cliente y de la compañía.\nHacer retención."
        
    }

]
export function getAllJobs(){
    return jobs;
}
export function getJobs(id){
    return jobs.find((job)=> job.id===id)
}
