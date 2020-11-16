<template>
  <div class="home">
    <h1></h1>
    <b-container>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://www.misfinanzasparaminegocio.com/wp-content/uploads/2018/08/permisos.jpg" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Sistema de Puntos de Venta">
              <b-card-text>
                Gestiona tus puntos de venta de una manera confiable y eficiente.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class Home extends Vue {}
</script>
