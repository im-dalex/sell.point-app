<template>
    <b-navbar toggleable="md" type="dark" variant="info" class="mb-5">
        <b-container>
            <b-navbar-brand :to="{ name: 'home' }">SPE</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{ name: 'home' }" exact>Inicio</b-nav-item>
                    <b-nav-item :to="{ name: 'customer' }">Clientes</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class NavBar extends Vue { }
</script>