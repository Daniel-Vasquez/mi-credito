import { useState } from "react";
import Btn from "./Btn";
import "../components/styles/Form.css";

const TERM_MONTHS = [12, 24, 36];
const MIN_DESIRED_AMOUNT = 10_000;
const MAX_DESIRED_AMOUNT = 1_000_000;

const MIN_ANNUAL_RATE = 8.9;
const MAX_ANNUAL_RATE = 14.9;

const CAT = 15.71;
const OPENING_COMMISSION = 348.0;

const PERCENTAGE_ANNUAL_RATE = 10;

function calculateMonthlyPayment(desiredAmount, months, annualRate) {
  return desiredAmount / (months * annualRate);
}

function NetAmountDeposited(desiredAmount, months) {
  return desiredAmount * months - OPENING_COMMISSION;
}

function totalPaid(desiredAmount, percentageAnnualRate) {
  return desiredAmount + OPENING_COMMISSION - percentageAnnualRate;
}

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function MonthsButton({ months, setMonths, value }) {
  return (
    <button
      className={months === value ? "select" : ""}
      onClick={() => setMonths(value)}
    >
      {value}
    </button>
  );
}

function Form() {
  const [desiredAmount, setDesiredAmount] = useState(MIN_DESIRED_AMOUNT);
  const [annualRate, setAnnualRate] = useState(PERCENTAGE_ANNUAL_RATE);
  const [months, setMonths] = useState(12);

  return (
    <div className="FormContainer">
      <h2 className="FormContainer_text">SIMULADOR DE CRÉDITO</h2>
      <div className="form_line"></div>
      <div>
        <div className="FormContainer_amount">
          <p>{formatMoney(desiredAmount)}</p>
          <p>Monto deseado</p>
        </div>
        <div className="FormContainer_amount-range">
          <input
            type="range"
            min={MIN_DESIRED_AMOUNT}
            max={MAX_DESIRED_AMOUNT}
            value={desiredAmount}
            onChange={(e) => setDesiredAmount(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="FormContainer_rate">
          <p>{annualRate}%</p>
          <p>Tasa anual</p>
        </div>
        <div className="FormContainer_rate-range">
          <input
            type="range"
            min={MIN_ANNUAL_RATE}
            max={MAX_ANNUAL_RATE}
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
          />
        </div>
      </div>
      <div className="FormContainer_term">
        <p className="FormContainer_term-text">Plazo a meses</p>
        <div className="FormContainer_term-btn">
          {TERM_MONTHS.map((month) => (
            <MonthsButton
              key={month}
              value={month}
              setMonths={setMonths}
              months={months}
            />
          ))}
        </div>
      </div>
      <section className="DetailsContainer">
        <div className="DetailsContainer_payMonth">
          <p className="DetailsContainer_payMonth-text">Pago mensual</p>
          <span className="DetailsContainer_payMonth-span">
            {formatMoney(
              calculateMonthlyPayment(desiredAmount, months, annualRate / 100)
            )}
          </span>
        </div>
        <div className="DetailsContainer_commission">
          <p className="DetailsContainer_commission-text">
            Comisión de apertura
          </p>
          <span className="DetailsContainer_commission-span">
            {formatMoney(OPENING_COMMISSION)}
          </span>
        </div>
        <div className="DetailsContainer_neto">
          <p className="DetailsContainer_neto-text">Monto neto Depositado</p>
          <span className="DetailsContainer_neto-span">
            {formatMoney(NetAmountDeposited(desiredAmount, months))}
          </span>
        </div>
        <div className="DetailsContainer_total">
          <p className="DetailsContainer_total-text">Total pagado</p>
          <span className="DetailsContainer_total-span">
            {formatMoney(totalPaid(desiredAmount, annualRate / 100))}
          </span>
        </div>
        <div className="DetailsContainer_cat">
          <p className="DetailsContainer_cat-text">CAT</p>
          <span className="DetailsContainer_cat-span">{CAT}%</span>
        </div>
        <Btn
          className="DetailsContainer-btn"
          title="SOLICITAR MI CREDITO"
          color="purple"
        />
      </section>
    </div>
  );
}

export default Form;
