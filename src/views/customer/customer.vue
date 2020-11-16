<template>
    <div>
        <DataTable v-if="fields.length != 0"
            ref="dataTable"
            :items="items"
            :fields="fields"
            @deleteItem="deleteItem($event)"
            @navigate="navigate($event)"/>
    </div>
</template>
<script lang="ts" src="./customer.ts"></script>