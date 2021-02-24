import * as React from 'react'
import styles from '@styles/components/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <div className={`${styles.footerContainer} dark:bg-transparent`}>
      <div>
        <img
          src="todos_animado_550_50.gif"
          alt="Logotipos de meios de pagamento do PagSeguro"
          title="Este site aceita pagamentos com as principais bandeiras e bancos, saldo em conta PagSeguro e boleto."
        />
        <p>
          Copyright ©2020 www.playshape.com.br, TODOS OS DIREITOS RESERVADOS.
          Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas,
          dizeres, som, software, conjunto imagem, layout, trade dress, aqui
          veiculados são de propriedade exclusiva da PlayShape ou de seus
          parceiros. É vedada qualquer reprodução, total ou parcial, de qualquer
          elemento de identidade, sem expressa autorização. A violação de
          qualquer direito mencionado implicará na responsabilização cível e
          criminal nos termos da Lei. A inclusão no carrinho não garante o preço
          e/ou a disponibilidade do produto. Caso os produtos apresentem
          divergências de valores, o preço válido é o exibido na tela de
          pagamento. Vendas sujeitas a análise e disponibilidade de estoque.
        </p>
      </div>
    </div>
  )
}

export default Footer
