import React from 'react';

const SIIPersonal = () => {
    return (
        <div className='roboto border-b border-slate-200 text-secondary' >
            <div className='w-[319px] md:w-full'>
                <p className="mb-7 mt-7 tracking-wide">
                    Vincula tu cuenta SII Personal para sincronizar automáticamente tus facturas y recibir ofertas 
                    en cuanto las emitas.
                </p>
            </div>
            <div className="mb-3">
                <label className="block font-semibold text-sm text-indigo-950 mb-1 tracking-wide">Rut Empresa</label>
                <input
                    type="text"
                    className="w-full border border-gray-400 px-3 py-2 "
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block font-semibold text-sm text-indigo-950 mb-1 tracking-wide">Contraseña SII</label>
                <input
                    type="password"
                    className="w-full border border-gray-400 px-3 py-2"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block font-semibold text-sm text-indigo-950 mb-1 tracking-wide">Contraseña Personal SII</label>
                <input
                    type="password"
                    className="w-full border border-gray-400 px-3 py-2"
                    required
                />
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-600 mb-7 mt-7">
                <img src="lock.png" alt="lockLogo" />
                <p className='font-light md:w-[502px] '>
                    Tus credenciales estarán encriptadas y solo podremos leer información, sin realizar ningún cambio.
                    Además en cualquier momento podrás desactivarla desde el menú Sincronizaciones.
                </p>
            </div>
        </div>
    );
};

export default SIIPersonal;