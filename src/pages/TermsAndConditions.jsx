import React, { Component } from 'react';

import '../css/terms.css'


const TermsConditions = ({changeTerms, handleSubmit}) => {
    return ( 
        <div className="terms">
            <h1>Terminos y Condiciones</h1>
            <h3>DECLARACIÓN DE PRIVACIDAD</h3>
            <br />
            <hr />
            <h3>SECCIÓN 1 - ¿QUÉ HACEMOS CON TU INFORMACIÓN?</h3>

            <p className="terms__paraterms">
                Cuando compras algo de nuestra tienda, como parte del proceso de compra
                venta, nosotros recolectamos la información personal que nos das tales
                como nombre, dirección y correo electrónico.
                <br />
                <br />
                Cuando navegas en nuestra tienda, también recibimos de manera automática
                la dirección de protocolo de internet de tu computadora (IP) con el fin
                de proporcionarnos información que nos ayuda a conocer acerca de su
                navegador y sistema operativo.
                <br />
                <br />
                Email marketing (if applicable): Con tu permiso, podremos enviarte
                correos electrónicos acerca de nuestra tienda, nuevos productos y otras
                actualizaciones
            </p>
            <h3>SECTION 2 - CONSENTIMIENTO</h3>
            <p className="terms__paraterms">
                Cómo obtienen mi consentimiento?
                <br />
                <br />
                Cuando nos provees tu información personal para completar una
                transacción, verificar tu tarjeta de crédito, crear una órden, concertar
                un envío o hacer una devolución, implicamos que aceptas la recolección y
                uso por esa razón específica solamente.
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
                zomomx@gmail.com.
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
                Sin embargo, algunos proveedores de servicios de terceros, tales como
                pasarelas de pago y otros procesadores de transacciones de pago, tienen
                sus propias políticas de privacidad con respecto a la información que
                estamos obligados a proporcionarles para las transacciones relacionadas
                con las compras.
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
                A modo de ejemplo, si te encuentras en Canadá y tu transacción es
                procesada por una pasarela de pago con sede en Estados Unidos, entonces
                tu información personal utilizada para completar la transacción puede
                ser sujeto de divulgación en virtud de la legislación de Estados Unidos,
                incluyendo la Ley Patriota.
                <br />
                <br />
                Una vez que abandonas el sitio web de nuestra tienda o te rediriges a un
                sitio o aplicación de terceros, ya no estás siendo regulados por la
                presente Política de Privacidad o los Términos de Servicio de nuestra
                página web.
                <br />
                <br />
                Enlaces
                <br />
                <br />
                Cuando haces clic en enlaces de nuestra tienda, puede que seas
                redirigido fuera de nuestro sitio. No somos responsables por las
                prácticas de privacidad de otros sitios y te recomendamos leer sus
                normas de privacidad.
            </p>

            <h3>SECCIÓN 5 - SEGURIDAD</h3>
            <p className="terms__paraterms">
                Para proteger tu información personal, tomamos precauciones razonables y
                seguimos las mejores prácticas de la industria para asegurarnos de que
                no haya pérdida de manera inapropiada, mal uso, acceso, divulgación,
                alteración o destrucción de la misma.
                <br />
                <br />
                SI nos proporcionas la información de tu tarjeta de crédito, dicha
                información es encriptada mediante la tecnología Secure Socket Layer
                (SSL) y se almacena con un cifrado AES-256. Aunque ningún método de
                transmisión a través de Internet o de almacenamiento electrónico es 100%
                seguro, seguimos todos los requisitos de PCI-DSS e implementamos normas
                adicionales aceptadas por la industria.
            </p>

            <p className="terms__paraterms">
                <h3>COOKIES</h3>
                Aquí mencionamos las cookies que utilizamos. Usamos una sola cookie
                encriptada para manter tu sesión y mantener tu carrito actualizado.
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
                <br />
                <br />
                Si nuestra tienda es adquirida o fusionada con otra empresa, tu
                información puede ser transferida a los nuevos propietarios, para que
                podamos seguir vendiéndote productos.
            </p>

            <h3>SECCIÓN 8 - CAMBIOS A ESTA POLÍTICA DE PRIVACIDAD</h3>
            <p className="terms__paraterms">
                Si quieres: acceder, corregir, enmendar o borrar cualquier información
                personal que poseamos sobre ti, registrar una queja, o simplemente
                quieres más información contacta a nuestro Oficial de Cumplimiento de
                Privacidad zomomx@gmail.com o por correo postal a ZOMO MX
                <br />
                <br />
                [Re: Privacy Compliance Officer]
            </p>

            <div className="checkarea">
              <input type="checkbox" name="checkbox1" id="checkbox1" onChange={changeTerms}/>
              <label for="checkbox1">
                Acepto los Terminos y condiciones
              </label>
            </div>
            <button className='checkout' onClick={() => handleSubmit()}>Continuar</button>
        </div>
     );
}
 
export default TermsConditions;