import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="content">
          <h2>Descubre Soluciones de Importación desde el Reino Unido con TREXCO</h2>
          <p>En la segunda mitad del 2024, las relaciones comerciales entre Chile
            y el Reino Unido alcanzarán un hito con la adhesión del Reino Unido
            al CPTPP. Esta nueva era promete oportunidades únicas para
            importadores chilenos</p>
            <h2>Ventajas del CPTPP</h2>
          <p>
            Acceso a productos británicos de alta calidad con aranceles
            reducidos en chile, ampliando su competitividad y alcance de mercado.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/container1.png"
            alt="loading"
            width={500}
            height={400}
          />
        </div>
      </div>

      <div className="container">
        <div className="content">
          

        
          <h2>Nuestros servicios</h2>

          <p>
            Excelencia en Sourcing: Búsqueda precisa de productos y materias
            primas del Reino Unido.
          </p>
          <p>
            Transporte sin Problemas: Soluciones de envío marítimo y aéreo, con
            entrega segura y puntual.
          </p>
          <p>
            Garantía de Cumplimiento: Revisiones rigurosas y manejo experto de
            la documentación comercial.
          </p>

          <h2>Porque elegir TREXCO</h2>
          <p>
            Con una amplia experiencia en transporte y logística, TREXCO se
            destaca como su socio de confianza para navegar en el comercio
            internacional.
          </p>

          <button className="button">
            <Link href="https://trexxbox.vercel.app">
              Book now
            </Link>
          </button>
        </div>
      </div>

      

      

      

   
    </>
  );
}
