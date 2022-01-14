import checked from "../Assets/checked-pricing.png";
import apiMembership from "../apiMembership";
import Btn from "./Btn";

import "./styles/CardMembership.css";

const CardMembership = () => {
  return (
    <div className='CardMembershipContainer'>
      {apiMembership.map((card) => {
        return (
          <div className='CardMembership' key={card.title}>
            <h1 className='CardMembership_title'>{card.title}</h1>
            <p className='CardMembership_pricer'>$<code>{card.price}</code> /mount</p>
            <ul className='CardMembership_details'>
              {card.details.map((detail) =>
              <div key={detail.id}>
                <li className={`CardMembership_details-li ${!detail.active && 'textDecoration'}`}> {detail.active && <img src={checked} alt='Icon checked'/>} {detail.description}</li>
              </div>
              )}
            </ul>
            <Btn title="Sing up" color='white'/>
          </div>
        )
      })}
    </div>
  );
};

export default CardMembership;
