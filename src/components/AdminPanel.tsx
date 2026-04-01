import { useEffect, useState } from 'react';
import { Download, ExternalLink, RefreshCcw } from 'lucide-react';

export function AdminPanel() {
  const [afiliados, setAfiliados] = useState([]);

  // Función para cargar los datos de la DB
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
    // Esto dispara la descarga del Excel que hicimos en Java
    window.open('https://campa-aprd.onrender.com/api/afiliados/exportar', '_blank');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-black">BASE DE DATOS 🐾</h1>
            <p className="text-gray-500">Campaña Said Urbán - Melchor Ocampo</p>
          </div>
          
          <div className="flex gap-3">
            <button onClick={cargarDatos} className="p-3 bg-gray-200 rounded-xl hover:bg-gray-300">
              <RefreshCcw size={20} />
            </button>
            <button 
              onClick={handleDescargar}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 shadow-lg transition"
            >
              <Download size={20} /> DESCARGAR EXCEL (.xlsx)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-black text-[#FFD600]">
              <tr>
                <th className="p-5">Nombre</th>
                <th className="p-5">Contacto</th>
                <th className="p-5">Dirección</th>
                <th className="p-5">Documento</th>
              </tr>
            </thead>
            <tbody>
              {afiliados.map((a: any) => (
                <tr key={a.id} className="border-b hover:bg-yellow-50 transition">
                  <td className="p-5 font-bold text-gray-800">{a.nombreCompleto}</td>
                  <td className="p-5">
                    <div className="text-sm">{a.telefono}</div>
                    <div className="text-xs text-gray-500">{a.email}</div>
                  </td>
                  <td className="p-5 text-sm text-gray-600">{a.direccion}</td>
                  <td className="p-5">
                    <a 
                      href={`https://campa-aprd.onrender.com/uploads/ines/${a.fotoIneUrl.split('/').pop()}`} 
                      target="_blank" 
                      className="flex items-center gap-2 text-blue-600 font-bold hover:underline"
                    >
                      <ExternalLink size={16} /> Ver INE
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {afiliados.length === 0 && (
            <div className="p-20 text-center text-gray-400 font-medium">
              No hay registros todavía. ¡A mover esa campaña! 🐾
            </div>
          )}
        </div>
      </div>
    </div>
  );
}