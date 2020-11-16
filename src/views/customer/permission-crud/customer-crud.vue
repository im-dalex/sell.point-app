<template>
    <div>
        <b-form @submit.stop.prevent="onSubmit">
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Nombre del Empleado:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        name="input-2"
                        v-validate="'required'"
                        autocomplete="off"
                        :state="validateState('input-2')"
                        v-model="customer.name"
                        placeholder="Ingresar Nombre"
                        data-vv-as="Name"
                        ></b-form-input>
                        <span class="input-error" v-if="invalid">{{ throwError('input-2') }}</span>
                    </b-form-group>
                </b-col>
            </b-row>
            <div class="mt-3">
                <b-button @click="cancel()" variant="danger">Atras</b-button> | 
                <b-button type="submit" variant="primary">Guardar</b-button>
            </div>
        </b-form>
    </div>
</template>
<script lang="ts" src="./customer-crud.ts"></script>
<style lang="scss" scoped>
    .input-error {
        color: #F75454;
        font-size: rem(12px);
        line-height: 2;
        margin-top: rem(10px);
    }
</style>