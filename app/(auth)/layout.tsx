import React from 'react'
import Image from 'next/image'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex min-h-screen">
        <section className="hidden w-1/2 justify-center  bg-brand p-10 lg:flex xl:w-2/5">
            <div className="flex flex-col justify-between h-full">
                <div className="max-w-[500px] space-y-12">
                    <Image src="/Logo.png" alt="Chirag" width={350} height={250} className="object-contain" />
                    <div className="space-y-5 text-white">
                        <h1 className="text-4xl font-bold">Manage your files the best way</h1>
                        <p className="text-lg">Keep all your files in one place and access them from anywhere</p>
                    </div>
                </div>
                <div className='pb-32'>
                    <Image src="/assets/images/files.png" alt="Chirag" width={342} height={342} className="transition-all hover:rotate-2 hover:scale-105" />
                </div>
            </div>
        </section>

        <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/Logo1.png"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;