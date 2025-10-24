// App.jsx
import React from "react";

function App() {
  return (
    <div className="font-sans">
      {/* Sección Inicio (Hero Compacta) */}
      <section className="bg-purple-400 text-white py-20 flex flex-col items-center text-center">
        {/* Encabezado Hero */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          SERVICIO NACIONAL DE APRENDIZAJE
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Explora la variedad de nuestros programas y contáctanos para más información.
        </p>

        {/* Botones */}
        <div className="flex space-x-4">
          <a
            href="#programas"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Inicio
          </a>
          <a
            href="#contacto"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Empresa
          </a>
           <a
            href="#contacto"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
             Contacto
          </a>
        </div>

      </section>

      {/* Sección Programas */}
      <section id="programas" className="bg-gray-100 text-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-600 mb-12 text-center">Nuestros Programas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">ADSO</h3>
              <p>Programa enfocado en el diseño, desarrollo y mantenimiento de aplicaciones y sistemas informáticos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Animaion 3D</h3>
              <p>Formación para crear contenidos visuales en tres dimensiones aplicados a cine, videojuegos y publicidad.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Redes de datos </h3>
              <p>Capacita en la instalación, configuración y administración de redes de comunicación seguras y eficientes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Multimedia</h3>
              <p>Enseña a diseñar y desarrollar contenidos digitales interactivos como sitios web, videos y animaciones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Ciberseguridad</h3>
              <p>Forma profesionales capaces de proteger sistemas, redes e información ante amenazas digitales.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Comercio Exterior</h3>
              <p>Brinda conocimientos sobre operaciones internacionales, importaciones, exportaciones y logística global.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="bg-purple-200 text-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-600 mb-8 text-center">Contacto</h2>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="Contacto"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="Mensaje"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="col-span-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
