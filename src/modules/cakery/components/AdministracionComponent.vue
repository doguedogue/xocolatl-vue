<template>
                  <!-- <p>El pastelero necesita:</p>
              <p>Tener la información de la cantidad de sabores que le quedan para hacer los pasteles.</p>
              <p>Tener la información de la cantidad de adornos que le quedan para hacer los pasteles.</p>
              <p>Una tabla donde aparezcan los pedidos que se han realizado con los datos del formulario.</p> -->

            <div class="col-3">
              <h1>Administración</h1>
              <br>
              <form onsubmit="enviaFormulario(); return false;" id="forma" method="post">
                <table>
                  <tr>
                    <th colspan="2">Inventario</th>
                  </tr>                  
                  <tr>
                    <th>Elemento</th>
                    <th>Cantidad</th>
                  </tr>
                  <tr>
                    <td>
                      Leche
                    </td>
                    <td>
                      <input type="number" id="leche" name="leche" value= "400" class="inputform right"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Harina
                    </td>
                    <td>
                      <input type="number" id="harina" name="harina" value= "300" class="inputform right"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Chocolate
                    </td>
                    <td>
                      <input type="number" id="chocolate" name="chocolate" value= "200" class="inputform right"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Fresa
                    </td>
                    <td>
                      <input type="number" id="fresa" name="fresa" value= "100" class="inputform right"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Azúcar
                    </td>
                    <td>
                      <input type="number" id="azucar" name="azucar" value= "120" class="inputform right"/>
                    </td>
                  </tr>                                    
                  <tr>
                    <td><input type="reset"></td>
                    <td><input type="submit" value="Submit"></td>
                  </tr>
                </table>
              </form>              
            </div>

            <div class="col-4">
              <table class="ordenes">
                <tr>
                  <th colspan="4">Pedidos</th>
                </tr>                  
                <tr>
                  <th>No. Orden</th>
                  <th>Solicitud</th>
                  <th>estado</th>
                  <th>Fecha</th>
                </tr>
                <tr>
                  <td>
                    PL12323
                  </td>
                  <td>
                    Xocolatl S
                  </td>
                  <td>
                    En Proceso
                  </td>
                  <td>
                    07/MAR/22
                  </td>
                </tr>
                <tr>
                  <td>
                    PL02324
                  </td>
                  <td>
                    Unicornio XL
                  </td>
                  <td>
                    En Proceso
                  </td>
                  <td>
                    07/MAR/22
                  </td>
                </tr>
                <tr>
                  <td>
                    PL12233
                  </td>
                  <td>
                    Vainilla-D M
                  </td>
                  <td>
                    En Proceso
                  </td>
                  <td>
                    09/MAR/22
                  </td>
                </tr>
                <tr>
                  <td>
                    PL12323
                  </td>
                  <td>
                    Sinfonia G
                  </td>
                  <td>
                    Pendiente
                  </td>
                  <td>
                    10/MAR/22
                  </td>
                </tr>
                <tr>
                  <td>
                    LM12322
                  </td>
                  <td>
                    ChocoNuez XL
                  </td>
                  <td>
                    Cancelado
                  </td>
                  <td>
                    14/MAR/22
                  </td>
                </tr>
                <tr>
                  <td>
                    AK12323
                  </td>
                  <td>
                    Xocolatl G
                  </td>
                  <td>
                    Pendiente
                  </td>
                  <td>
                    18/MAR/22
                  </td>
                </tr> 
                <tr>
                  <td>
                    RD12312
                  </td>
                  <td>
                    RedVelvet M
                  </td>
                  <td>
                    Pendiente
                  </td>
                  <td>
                    21/MAR/22
                  </td>
                </tr>
                <tr>
                  <td>
                    MS123
                  </td>
                  <td>
                    Unicornio S
                  </td>
                  <td>
                    Pendiente
                  </td>
                  <td>
                    29/MAR/22
                  </td>
                </tr>
                <tr>
                  <td>
                    RV3858
                  </td>
                  <td>
                    Xocolatl XL
                  </td>
                  <td>
                    Pendiente
                  </td>
                  <td>
                    31/MAR/22
                  </td>
                </tr>
              </table>
            </div>
          
            <div class="col-2 right">
              <div class="aside">
                <h2>Resurtir</h2>
                <p>Ingredientes</p>
                <br>
                <h2>Proveedores</h2>
                <p>Pedidos semanales</p>
                <br>
                <h2>Nomina</h2>
                <p>Pagos de nomina</p>
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
.right {
    text-align:right;
}
</style>
