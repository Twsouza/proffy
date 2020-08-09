import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/8239709?s=460&u=42d8239caaf9812f2fe3a7e86ea93b1b85bf6a72&v=4" alt="Taynan Souza"/>
        <div>
          <strong>Taynan Souza</strong>
          <span>Lorem ipsum</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo ipsum, fuga quia non, maxime et adipisci ducimus, esse excepturi quod facere corporis voluptatum unde nisi eum. Dolore, vitae? Laudantium?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;