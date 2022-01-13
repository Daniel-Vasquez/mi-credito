import "../components/styles/Form.css";

function Form() {
  return (
    <div className="Form">
      <h2>SIMULADOR DE CRÉDITO</h2>
      <div className="line"></div>
      <div>
        <div>
          <p>Total</p>
          <p>Monto deseado</p>
        </div>
        <div>
          <input type="range" />
        </div>
      </div>
      <div>
        <div>
          <p>Total</p>
          <p>Tasa anual</p>
        </div>
        <div>
          <input type="range" />
        </div>
      </div>
      <div>
        <p>Plazo a meses</p>
        <div>
          <button>12</button>
          <button>24</button>
          <button>36</button>
        </div>
      </div>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Pago mensual</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Comisón de apertura</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Monto neto Depositado</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Total pagado</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">CAT</label>
            <input type="text" />
          </div>

          <button
            type="submit"
          >
            SOLICITAR MI CREDITO
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
