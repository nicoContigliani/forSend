import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from "../components/layout"
import axios from 'axios';
import { useState } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [goodSend, setGoodSend] = useState(false)
  if (goodSend) {
    setTimeout(() => {
      setGoodSend(false)
    }, 10000);
  }

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    const correo = []
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    try {

      correo.push(event.target.first.value)

    } catch (error) {
      console.log("🚀 ~ file: index.js:34 ~ handleSubmit ~ error:", error)


    }
    forSend(correo)

  }
  const forSend = async (correo) => {
    console.log("🚀 ~ file: index.js:36 ~ forSend ~ correo:", correo)
    //const url = 'http://localhost:3001/api/mail/mail/send-mail/array'
    const url = 'https://nuntius-production.up.railway.app/api/mail/mail/send-mail/array';


    try {
      const dataSend = await axios.post(url, correo)
      console.log("🚀 ~ file: index.js:43 ~ forSend ~ dataSend:", dataSend)
      if (dataSend.status == 200) setGoodSend(true)

    } catch (error) {
      console.log("🚀 ~ file: index.js:48 ~ forSend ~ error:", error)
    }


  }

  return (
    <Layout
      title="Home"

      className={styles.container}>
      <Head>
        <title>
          home
        </title>
      </Head>
      {/* Go my <Link href="/posts/first-post">post </Link> */}


      <div className='container'>

        <h1>Ingresar correos</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first">Correo</label><br />
          <input type="text" id="first" name="correo" required />

          {/* <label htmlFor="last">Last Name</label>
          <input type="text" id="last" name="last" required /> */}

          <button type="submit">Submit</button>
        </form>
        {
          (goodSend) ? (
            <div>
              <img src='https://ichef.bbci.co.uk/news/1024/branded_mundo/F98B/production/_99838836_mario976.jpg' />
            </div>

          ) : (

            <div class="d-flex justify-content-center">
              cargar correo
              <div class="spinner-border" role="status">
                <h4></h4>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )

        }


      </div>







    </Layout>
  )
}
