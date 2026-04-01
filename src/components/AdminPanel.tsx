import { useEffect, useState } from 'react';
import { Download, ExternalLink, RefreshCcw } from 'lucide-react';

export function AdminPanel() {
  const [afiliados, setAfiliados] = useState([]);

  const cargarDatos = () => {
    fetch('https://campa-aprd.onrender.com/api/afiliados/lista')
      .then(res => res.json())
      .then(data => setAfiliados(data))
      .catch(err => console.error("Error cargando datos:", err));
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleDescargar = () => {
    window.open('https://campa-aprd.onrender.com/api/afiliados/exportar', '_blank');
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen"> {/* Reduje padding en móvil */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header Responsivo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter">
              BASE DE DATOS 🐾
            </h1>
            <p className="text-gray-500 text-sm">Campaña Said Urbán - Melchor Ocampo</p>
          </div>
          
          <div className="flex w-full md:w-auto gap-3">
            <button onClick={cargarDatos} className="p-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition">
              <RefreshCcw size={20} />
            </button>
            <button 
              onClick={handleDescargar}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-green-700 shadow-lg transition text-sm"
            >
              <Download size={20} /> EXCEL
            </button>
          </div>
        </div>

        {/* CONTENEDOR CON SCROLL HORIZONTAL (LA CLAVE) */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto"> {/* Este div permite el scroll en cel */}
            <table className="w-full text-left border-collapse min-w-[700px]"> {/* min-w evita que se amontone */}
              <thead className="bg-black text-[#FFD600]">
                <tr>
                  <th className="p-4 text-xs uppercase font-black">Nombre</th>
                  <th className="p-4 text-xs uppercase font-black">Contacto</th>
                  <th className="p-4 text-xs uppercase font-black">Dirección</th>
                  <th className="p-4 text-xs uppercase font-black text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {afiliados.map((a: any) => (
                  <tr key={a.id} className="border-b hover:bg-yellow-50 transition">
                    <td className="p-4 font-bold text-gray-800 text-sm">{a.nombreCompleto}</td>
                    <td className="p-4">
                      <div className="text-sm font-medium">{a.telefono}</div>
                      <div className="text-[10px] text-gray-500 truncate max-w-[150px]">{a.email}</div>
                    </td>
                    <td className="p-4 text-xs text-gray-600 leading-tight">
                      <div className="max-w-[200px]">{a.direccion}</div>
                    </td>
                    <td className="p-4 text-center">
                      <a 
                        href={`https://campa-aprd.onrender.com/uploads/ines/${a.fotoIneUrl?.split('/').pop()}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black hover:bg-blue-600 hover:text-white transition border border-blue-200"
                      >
                        <ExternalLink size={12} /> VER INE
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {afiliados.length === 0 && (
            <div className="p-20 text-center text-gray-400 font-medium bg-white">
              No hay registros todavía. ¡A mover esa campaña! 🐾
            </div>
          )}
        </div>

      </div>
    </div>
  );
}