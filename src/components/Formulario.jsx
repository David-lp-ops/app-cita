import { useState,useEffect } from "react"
import Error from "./Error";
const Formulario = ({pacientes, setPacientes,paciente,setPaciente}) => {

    const [nombre,setNombre]=useState("");
    const [propietario,setPropietario]=useState("");
    const [email,setEmail]=useState("");
    const [alta,setAlta]=useState("");
    const [sintomas,setSintomas]=useState("");
    const [error,setError]=useState(false);
    useEffect (()=>{ 
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        } 
    },[paciente]);
    const generarId=()=>{
        const random=Math.random().toString(36).substring(2,15);
        const fecha =Date.now().toString(36)
        return random + fecha
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre,propietario,email,alta,sintomas].includes("")){
            console.log("Todos los campos son obligatorios");
            setError(true);
            return;
        }
        setError(false)
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            id:generarId()
        }

        if(paciente.id){
            objetoPaciente.id=paciente.id;
            const nuevoPaciente = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(nuevoPaciente);
            setPaciente({});
        }else{
            objetoPaciente.id=generarId();
            setPacientes([...pacientes,objetoPaciente]);
        }
        setNombre("");
        setPropietario("");
        setEmail("");
        setAlta("");
        setSintomas("");

    }
 
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 mb-4'>
        <h2 className='font-black text-3xl text-center text-violet-500'>
            Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
            A??ade Pacientes y {""}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>
        <form 
        onSubmit={handleSubmit}
           className='bg-white shadow-xl rounded-xl py-10 px-5  '>
            
            {error && <Error><p>Todos los campos son obligatorios</p></Error>   }
                
            <div className="mb-5">
                <label htmlFor="mascota"  
                className="block text-sm font-medium text-gray-500 ">
                    Nombre Mascota</label>
                <input id="mascota" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="text" 
                placeholder="Nombre Mascota"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="propietario"
                className="block text-sm font-medium text-gray-500 ">
                    Nombre Propietario</label>
                <input 
                id="propietario" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="text" 
                placeholder="Nombre del Propietario" 
                value={propietario}
                onChange={(e)=>setPropietario(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="email"
                className="block text-sm font-medium text-gray-500 ">
                    Email</label>
                <input 
                id="email" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="email" 
                placeholder="Email Contacto Propietario" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="alta"
                className="block text-sm font-medium text-gray-500">
                    Alta</label>
                <input 
                id="alta" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="date" 
                value={alta}
                onChange={(e)=>setAlta(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor="sintomas"
                className="block text-sm font-medium text-gray-500">
                    Sintomas</label>
                <textarea 
                id="sintomas" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="date" 
                placeholder="Describe los sintomas"
                value={sintomas}
                onChange={(e)=>setSintomas(e.target.value)}
                />
            </div>

            <input 
            type="submit"
            className="bg-violet-500 hover:bg-violet-700 hover:ring hover:ring-violet-300  text-white font-bold  w-full py-2 px-4 rounded-lg cursor-pointer shadow-md" 
            value={paciente.id ? 'Editar Paciente':'Agregar paciente'} />
         

        </form>
    </div>
  )
}

export default Formulario