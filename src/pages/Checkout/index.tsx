import { useContext } from 'react'
import { SelectedCoffeesContext } from '../../context/SelectedCoffeesContext'

export function Checkout() {
  const { selectedCoffees } = useContext(SelectedCoffeesContext)

  console.log(selectedCoffees)

  return (
    <main>
      <section>
        <h1>Complete seu pedido</h1>
        <article>
          <div>
            <h3>P</h3>
            <div>
              <h2>Endereço de entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <form>
            <input type="number" placeholder="CEP"></input>
            <div>
              <input type="text" placeholder="Rua"></input>
              <div>
                <input type="number" placeholder="Número"></input>
                <input type="text" placeholder="Complemento"></input>
              </div>
              <div>
                <input type="text" placeholder="Bairro"></input>
                <input type="text" placeholder="Cidade"></input>
                <input type="text" placeholder="Estado"></input>
              </div>
            </div>
          </form>
        </article>
        <article>
          <div>
            <h3>P</h3>
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <ul>
            <li>Cartão de crédito</li>
            <li>Cartão de débito</li>
            <li>Dinheiro</li>
          </ul>
        </article>
      </section>
      <section>
        <h1>Cafés selecionados</h1>
        <article></article>
      </section>
    </main>
  )
}
