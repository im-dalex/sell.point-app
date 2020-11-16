import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class DataTable extends Vue {
    @Prop() items!: any[];
    @Prop() fields!: any[];

    mounted() {
        this.fields.push({ key: 'actions', label: 'Acciones' });
    }

    deleteItem(id: number) {
        this.$bvModal.msgBoxConfirm('Estás seguro de eliminar este registro?', {
            title: 'Confirmar',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',    
            okTitle: 'Si',
            cancelTitle: 'No',
            footerClass: 'p-2',
            centered: true
        }).then( value => {
            if (value) {
                this.$emit('deleteItem', id);
            }
        }).catch(err => {
            console.error(err);
        });
    }

    navigate(id: number) {
        this.$emit('navigate', id);
    }
}