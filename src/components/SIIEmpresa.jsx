import React from 'react';

const SIIEmpresa = () => {
    return (
        <div className='roboto border-b border-slate-200 text-secondary' >
            <div className='w-[319px] md:w-full'>
                <p className="mb-7 mt-7 tracking-wide text-sm">
                    Vincula tu cuenta del SII Empresa para sincronizar automáticamente tus facturas, recibir 
                    ofertas en cuanto las emitas y evita requisitos adicionales en tus operaciones.
                </p>
            </div>
            <div className="mb-3">
                <label className="block text-sm text-indigo-950 mb-1 font-semibold tracking-wide">Rut Empresa</label>
                <input
                    type="text"
                    className="w-full border border-gray-400 px-3 py-2"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block  text-sm text-indigo-950 mb-1 font-semibold tracking-wide">Contraseña SII</label>
                <input
                    type="password"
                    className="w-full border border-gray-400 px-3 py-2"
                    required
                />
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-600 mb-7 mt-7">
                <img src="lock.png" alt="lockLogo" />
                <p className='font-light md:w-[502px]'>
                    Tus credenciales estarán encriptadas y solo podremos leer información, sin realizar ningún cambio.
                    Además en cualquier momento podrás desactivarla desde el menú Sincronizaciones.
                </p>
            </div>
        </div>
    );
};

export default SIIEmpresa;