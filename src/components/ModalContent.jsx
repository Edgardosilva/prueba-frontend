import { useState } from 'react';
import SIIEmpresa from './SIIEmpresa';
import SIIPersonal from './SIIPersonal';

export default function ModalContent({ closeModal }) {
  const [activeTab, setActiveTab] = useState('empresa');

  return (
      <div className="mx-auto  text-secondary roboto-condensed fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-40">
          <div className="bg-white w-[343px] md:w-[600px] rounded-xl p-3 md:p-7 md:pb-3 relative">
              <div className='h-14 flex items-start justify-end'>
                  <button onClick={closeModal}>
                      <img src="close.png" alt="closeLogo" className='w-[13px] m-2 mr-4' />
                  </button>
              </div>
              <h2 className="leading-6 text-lg font-bold text-[20px] text-secondary mb-1 uppercase">Sincroniza tu SII y agiliza tus operaciones</h2>
              <div className="flex mt-8  border-gray-300">
                  <button
                      onClick={() => setActiveTab('empresa')}
                      className={`px-4 py-2 rounded-t-sm w-[135px] border ${activeTab === 'empresa'
                              ? 'text-indigo-950 bg-white border-[#BBB7C9] border-b-0'
                              : 'text-gray-400 border-b-1 border-0 border-[#BBB7C9]'
                          }`}
                  >
                      SII Empresa
                  </button>
                  <button
                      onClick={() => setActiveTab('personal')}
                      className={`px-4 py-2 rounded-t-sm w-[135px] border  ${activeTab === 'personal'
                              ? 'text-indigo-950 bg-white border-[#BBB7C9] border-b-0'
                              : 'text-gray-400 border-b-1 border-0 border-[#BBB7C9]'
                          }`}
                  >
                      SII Personal
                  </button>
                  <div className='border-b-1 border-[#BBB7C9] text-white md:w-1/2'>border</div>
              </div>

              <div className="mt-4 text-sm text-gray-700">
                  {activeTab === 'empresa' ? (
                      <SIIEmpresa />
                  ) : (
                      <SIIPersonal />
                  )}
              </div>
              <div className="mt-4 flex flex-col md:flex-row gap-2 roboto md:justify-between md:items-center">
                  <div className="text-center mb-4 md:mb-0 mt-2 font-semibold hidden md:flex">
                      <a href="#" className="text-sm text-indigo-900 underline tracking-wide font-medium">No volver a mostrar</a>
                  </div>
                  <div className='flex flex-col gap-3 md:gap-0 md:justify-around md:flex-row md:w-[272px] md:h-[40px]'>
                    <button onClick={closeModal} className="w-full md:w-[120px] border-yellow-500 border-[2px] text-yellow-500 py-2 rounded-md text-sm hover:bg-secondary hover:text-white hover:border-white transition">
                        Cerrar
                    </button>
                    <button className="w-full md:w-[140px] bg-yellow-400 text-white py-2 rounded-md text-sm">
                        Sincronizar
                    </button>
                  </div>
                  <div className="text-center mb-4 md:mb-0 mt-2 font-semibold md:hidden">
                      <a href="#" className="text-sm text-indigo-900 underline tracking-wide font-medium">No volver a mostrar</a>
                  </div>
              </div>
          </div>
      </div>
  );
}
