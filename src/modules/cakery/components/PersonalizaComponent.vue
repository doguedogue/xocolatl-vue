<template>
                <div class="col-6">
              <h1>Personaliza tu Pastel</h1>
              <p>Mira todas las variedades que tenemos para ti</p>
            </div>

            <div class="col-6">
              <table>
                <tr>
                  <th colspan="2">Sabores</th>
                  <th colspan="2">Tamaño</th>
                </tr>
                <tr>
                  <th>Variedad</th>
                  <th>Precio</th>
                  <th>Variedad</th>
                  <th>Precio</th>                  
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Fondant</router-link></td>
                  <td>$500</td>
                  <td><router-link :to="{ name: 'pedidos' }">8 - 10 personas</router-link></td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Cajeta</router-link></td>
                  <td>$300</td>
                  <td><router-link :to="{ name: 'pedidos' }">12 - 15 personas</router-link></td>
                  <td>$500</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Queso-Piña</router-link></td>
                  <td>$400</td>
                  <td><router-link :to="{ name: 'pedidos' }">20 personas</router-link></td>
                  <td>$700</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Choco-Nuez</router-link></td>
                  <td>$200</td>
                  <td><router-link :to="{ name: 'pedidos' }">30 personas</router-link></td>
                  <td>$800</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Café</router-link></td>
                  <td>$300</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Choco-Queso</router-link></td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Trufa</router-link></td>
                  <td>$450</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Vainilla-Durazno</router-link></td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Tres Leches Vainilla</router-link></td>
                  <td>$350</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Tres Leches Cajeta</router-link></td>
                  <td>$150</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Tres Leches Rompope</router-link></td>
                  <td>$300</td>
                </tr>
                <tr>
                  <td><router-link :to="{ name: 'pedidos' }">Mango-limon</router-link></td>
                  <td>$400</td>
                </tr>
              </table>              
            </div>

            <div class="col-3 right">
              <div class="aside">
                <h2>¿Como personalizo mi Pastel?</h2>
                <br>
                <h3>1. Escoge el Pastel</h3>
                <br>
                <h3>2. Escoge la Personalización</h3>
                <br>
                <h3>3. Entra a Pedidos</h3>
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

.blanco {
  height: 100px;
}
</style>
