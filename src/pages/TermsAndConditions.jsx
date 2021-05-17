import React, { Component } from "react";

import "../css/terms.css";

const TermsConditions = ({ changeTerms, handleSubmit }) => {
  return (
    <div className="terms">
      <h1>Terminos y Condiciones</h1>
      <h3>DECLARACIÓN DE PRIVACIDAD</h3>
      <br />
      <hr />
      <h3>SECCIÓN 1 - ¿QUÉ HACEMOS CON TU INFORMACIÓN?</h3>

      <p className="terms__paraterms">
        Lambda Technologies utiliza los datos recopilados para proporcionarle
        una experiencia enriquecida e interactiva en el uso de nuestros
        servicios. En particular, usamos los datos para:
        <br />
        <br />
        - Mejorar y desarrollar nuestros servicios.
        <br />
        <br />
        - Proporcionar una mejor experiencia de usuario.
        <br />
        <br />
        - Proporcionar nuestros productos, lo que incluye la actualización,
        protección y solución de problemas.
        <br />
        <br />
        -Para compilar, entrenar y mejorar la precisión de nuestros métodos
        automatizados de procesamiento.
        <br />
        <br />
        Cuando utilizas nuestros servicios, estas aceptando el uso de tu cámara
        web, esto con el fin de realizar los análisi requeridos para las pruebas
        dentro de nuestro sitio.
      </p>
      <h3>SECTION 2 - CONSENTIMIENTO</h3>
      <p className="terms__paraterms">
        Cómo obtienen mi consentimiento?
        <br />
        <br />
        En el momento en el que aceptas los términos y condiciones, nos estás
        proporcionando el consentimiento de utilizar tu cámara web así como el
        almacenamiento de los datos recopilados al momento de estar utilizando
        nuestros servicios, ya sea:
        <br />
        <br />
        - Entrenamiento del modelo de reconocimiento de personas.
        <br />
        <br />
        - Las emociones analizadas por el Facial Recognition Model.
        <br />
        <br />
        Si te pedimos tu información personal por una razón secundaria, como
        marketing, te pediremos directamente tu expreso consentimiento, o te
        daremos la oportunidad de negarte.
        <br />
        <br />
        ¿Cómo puedo anular mi consentimiento?
        <br />
        <br />
        Si luego de haber aceptado cambias de opinión, puedes anular tu
        consentimiento para que te contactemos, por la recolección, uso o
        divulgación de tu información, en cualquier momento, contactándonos a
        lambdatech@gmail.com.
      </p>

      <h3>SECCIÓN 3 - DIVULGACIÓN</h3>
      <p className="terms__paraterms">
        Podemos divulgar tu información personal si se nos requiere por ley o si
        violas nuestros Términos de Servicio.
      </p>

      <h3>SECCIÓN 4 - SERVICES DE TERCERAS PARTES</h3>
      <p className="terms__paraterms">
        En general, los proveedores de terceras partes utilizados por nosotros
        solo recopilarán, usarán y divulgarán tu información en la medida que
        sea necesaria para que les permita desempeñar los servicios que nos
        proveen.
        <br />
        <br />
        Para estos proveedores, te recomendamos que leas las políticas de
        privacidad para que puedas entender la manera en que tu información
        personal será manejada.
        <br />
        <br />
        En particular, recuerda que algunos proveedores pueden estar ubicados o
        contar con instalaciones que se encuentran en una jurisdicción diferente
        a ti o nosotros. Así que si deseas proceder con una transacción que
        involucra los servicios de un proveedor a terceros, tu información puede
        estar sujeta a las leyes de la jurisdicción (jurisdicciones) en que se
        encuentra el proveedor de servicios o sus instalaciones.
        <br />
        <br />
        Una vez que abandonas el nuestro sitio o te rediriges a un sitio o
        aplicación de terceros, ya no estás siendo regulados por la presente
        Política de Privacidad o los Términos de Servicio de nuestra página web.
      </p>

      <h3>SECCIÓN 5 - SEGURIDAD</h3>
      <p className="terms__paraterms">
        Para proteger tu información personal, tomamos precauciones razonables y
        seguimos las mejores prácticas de la industria para asegurarnos de que
        no haya pérdida de manera inapropiada, mal uso, acceso, divulgación,
        alteración o destrucción de la misma.
      </p>

      <h3>SECCIÓN 6 - EDAD DE CONSENTIMIENTO</h3>
      <p className="terms__paraterms">
        Al utilizar este sitio, declaras que tienes al menos la mayoría de edad
        en tu estado o provincia de residencia, o que tienes la mayoría de edad
        en tu estado o provincia de residencia y que nos has dado tu
        consentimiento para permitir que cualquiera de tus dependientes menores
        use este sitio.
      </p>

      <h3>SECCIÓN 7 - CAMBIOS A ESTA POLÍTICA DE PRIVACIDAD</h3>
      <p className="terms__paraterms">
        Nos reservamos el derecho de modificar esta política de privacidad en
        cualquier momento, así que por favor revísala frecuentemente. Cambios y
        aclaraciones entrarán en vigencia inmediatamente después de su
        publicación en el sitio web. Si hacemos cambios materiales a esta
        política, notificaremos aquí que ha sido actualizada, por lo que cual
        estás enterado de qué información recopilamos, cómo y bajo qué
        circunstancias, si las hubiere, la utilizamos y/o divulgamos.
      </p>

      <h3>SECCIÓN 8 - CAMBIOS A ESTA POLÍTICA DE PRIVACIDAD</h3>
      <p className="terms__paraterms">
        Si quieres: acceder, corregir, enmendar o borrar cualquier información
        personal que poseamos sobre ti, registrar una queja, o simplemente
        quieres más información contacta a nuestro Oficial de Cumplimiento de
        Privacidad lambdatech@gmail.com
        <br />
        <br />
        [Re: Privacy Compliance Officer]
      </p>

      <div className="checkarea">
        <input
          type="checkbox"
          name="checkbox1"
          id="checkbox1"
          onChange={changeTerms}
        />
        <label for="checkbox1">Acepto los Terminos y condiciones</label>
      </div>
      <button className="checkout" onClick={() => handleSubmit()}>
        Continuar
      </button>
    </div>
  );
};

export default TermsConditions;
