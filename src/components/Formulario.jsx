const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>
            Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {""}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>
        <form className='bg-white shadow-md rounded-lg py-10 px-5'>
            <div className="mb-5">
                <label htmlFor="mascota"  className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input id="mascota" className="border-2 w-full p-2 mt-3 rounded-lg" type="text" placeholder="Nombre Mascota" />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="propietario"
                className="block text-gray-700 uppercase font-bold">
                    Nombre Propietario</label>
                <input 
                id="propietario" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="text" 
                placeholder="Nombre del Propietario" />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="email"
                className="block text-gray-700 uppercase font-bold">
                    Email</label>
                <input 
                id="email" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="email" 
                placeholder="Email Contacto Propietario" />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="alta"
                className="block text-gray-700 uppercase font-bold">
                    Alta</label>
                <input 
                id="alta" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="date" 
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor="sintomas"
                className="block text-gray-700 uppercase font-bold">
                    Sintomas</label>
                <textarea 
                id="sintomas" 
                className="border-2 w-full p-2 mt-3 rounded-lg" 
                type="date" 
                placeholder="Describe los sintomas"
                />
            </div>

            <input 
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold  w-full py-2 px-4 rounded-lg cursor-pointer shadow-md" 
            value="Agregar Paciente" />
         

        </form>
    </div>
  )
}

export default Formulario