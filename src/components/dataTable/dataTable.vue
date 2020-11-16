<template>
    <div class="text-left">
        <b-button variant="success" @click="navigate(0)" class="mb-3">Agregar Registro</b-button>
        <b-table striped hover :fields="fields" :items="items" 
            show-empty 
            emptyText="No existen registros para mostrar.">
            <template v-slot:cell(actions)="data">
                <b-button variant="warning" @click="navigate(data.item.id)">Editar</b-button> | 
                <b-button variant="danger" @click="deleteItem(data.item.id)">Eliminar</b-button>
            </template>
        </b-table>
    </div>
</template>
<script lang="ts" src="./dataTable.ts"></script>