import httpClient from '@/core/api/httpClient';
import { Component, Vue } from 'vue-property-decorator';
import DataTable from '@/components/dataTable/dataTable.vue';
import { Action } from 'vuex-class';

@Component({
    components: {
        DataTable
    }
})
export default class Customer extends Vue{
    @Action setLoading!: (loading: boolean) => void;
    items: any[] = [];
    fields: any[] = [];

    created() {
        this.initData();
    }

    private async initData() {
        try {
            this.setLoading(true);
            const response: any[] = await httpClient.get('customer');
            this.fields = [
                {
                    key: 'id',
                    label: 'Código',
                },
                {
                    key: 'name',
                    label: 'Nombre',
                },
            ];
            this.items = response;
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }

    navigate(id: string) {
        this.$router.push({ name: 'customer-crud', params: { id } });
    }

    async deleteItem(id: number) {
        try {
            this.setLoading(true);
            await httpClient.delete(`customer/${id}`);
            this.$router.go(0);
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }
}