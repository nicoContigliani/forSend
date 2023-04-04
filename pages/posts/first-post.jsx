
import Image from 'next/image';
import imgs from "/public/images/fornext.jpg"
import Layout from "../../components/layout"
export default function FistPost() {
  return (
    <Layout
    title="First Post"
    >
      <h1>
        Prueba
      </h1>
      <Image
       src={imgs}// rota para a imagem
       height={144} // altura desejada
       width={144} // largura desejado
       alt="Minha foto"
      />
    </Layout>
  )
}
