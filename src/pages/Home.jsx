import React from 'react'
import { Assets } from '../assets/Asset'

function Home() {
    return (
      <div className='min-h-screen'>
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Conteneur d'image avec contrôle précis */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl">
            <img
              src={Assets.Images.Home.BG1}
              alt="Background"
              className="w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                minWidth: '100%',
                minHeight: '100%',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
          
          
          {/* Contenu */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Welcome to AEH
            </h1>
            
          </div>
        </section>
        <section>
            section 2
            
        </section>
      </div>
    )
  }

export default Home
