<template>
  <div class="col-6">
    <h1>Pedidos</h1>
    <p>Realiza tu pedido</p>
  </div>

  <div class="col-6">
    <form onsubmit="enviaFormulario(); return false;" id="forma" method="post">
      <table>
        <tr>
          <th colspan="2">Tipo de Pastel</th>
        </tr>
        <tr>
          <td colspan="2">
            <select id="pastel" class="inputform">
              <option value="none" id="">
                Selecciona una opción por favor
              </option>
              <optgroup label="Pasteles" id="">
                <option value="Xocolatl">Xocolatl Special $419</option>
                <option value="Unicornio">Unicornio $719</option>
                <option value="RedVelvet">Red Velvet $489</option>
                <option value="VainillaDurazno">Vainilla - Durazno $419</option>
                <option value="Sinfonia">Sinfonía De Fresa $459</option>
                <option value="ChocolateNuez">Chocolate Y Nuez $419</option>
              </optgroup>
            </select>
          </td>
        </tr>
        <tr>
          <th colspan="2">Fecha</th>
        </tr>
        <tr>
          <td colspan="2">
            <input
              type="datetime-local"
              id="fecha"
              name="fecha"
              class="inputform"
            />
          </td>
        </tr>

        <tr>
          <th>Sabores</th>
          <th>Tamaño</th>
        </tr>
        <tr>
          <td>
            <select id="sabor">
              <option value="none" id="">El tipo de mi pastel</option>
              <optgroup label="Fondant" id="">
                <option value="Fondant">Fondant $500</option>
                <option value="Fotografia">Fotografia $600</option>
                <option value="Personaje">Personaje $500</option>
              </optgroup>
              <optgroup label="Tres Leches" id="">
                <option value="Vainilla">Vainilla $350</option>
                <option value="Cajeta">Cajeta $150</option>
                <option value="Rompope">Rompope $300</option>
              </optgroup>
              <optgroup label="Varios" id="">
                <option value="Cajeta">Cajeta $300</option>
                <option value="Queso-Piña">Queso-Piña $400</option>
                <option value="Choco-Nuez">Choco-Nuez $200</option>
                <option value="Cafe">Café $300</option>
                <option value="Choco-Queso">Choco-Queso $250</option>
                <option value="Trufa">Trufa $450</option>
              </optgroup>
            </select>
          </td>
          <td>
            <select id="tamanio">
              <option value="none" id="">Selecciona una opción</option>
              <optgroup label="Tamaño" id="">
                <option value="8-10">8-10 personas $0</option>
                <option value="12-15">12-15 personas $500</option>
                <option value="20">20 personas $700</option>
                <option value="30">30 personas $800</option>
              </optgroup>
            </select>
          </td>
        </tr>
        <tr>
          <th colspan="2">Nombre</th>
        </tr>
        <tr>
          <td colspan="2">
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              class="inputform"
            />
          </td>
        </tr>
        <tr>
          <th colspan="2">Teléfono</th>
        </tr>
        <tr>
          <td colspan="2">
            <input
              type="text"
              id="telefono"
              name="telefono"
              placeholder="Teléfono"
              class="inputform"
            />
          </td>
        </tr>
        <tr>
          <th colspan="2">Correo electrónico</th>
        </tr>
        <tr>
          <td colspan="2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              class="inputform"
            />
          </td>
        </tr>
        <tr>
          <th colspan="2">Descripción</th>
        </tr>
        <tr>
          <td colspan="2">
            <textarea
              id="descripcion"
              name="descripcion"
              cols="40"
              rows="5"
              placeholder="Descripción"
              class="inputform"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td><input type="reset" /></td>
          <td><input type="submit" value="Submit" /></td>
        </tr>
      </table>
    </form>
  </div>

  <div class="col-3 right">
    <div class="aside">
      <h2>¿Como realizo el pedido?</h2>
      <br />
      <h3>1. Escoge el Pastel</h3>
      <br />
      <h3>2. Selecciona la fecha y hora</h3>
      <br />
      <h3>3. Escoge la Personalización Sabor y Tamaño</h3>
      <br />
      <h3>4. Ingresa tu nombre</h3>
      <br />
      <h3>5. Ingresa tu teléfono</h3>
      <br />
      <h3>6. Ingresa tu correo electrónico</h3>
      <br />
      <h3>7. Agrega una breve descripción u observación</h3>
      <br />
      <h3>Nos pondremos en contacto contigo a la brevedad</h3>
    </div>
  </div>
  <div class="col-4 blanco"></div>
</template>

<style scoped>
.aside {
  background-color: #161b22;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #1d2228;
}

.inputform {
  width: 100%;
}
.blanco {
  height: 100px;
}
</style>
