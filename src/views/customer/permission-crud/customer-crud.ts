import httpClient from '@/core/api/httpClient';
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({})
export default class CustomerCrud extends Vue {
    @Action setLoading!: (loading: boolean) => void;

    private get customerId(): string {
        return this.$route.params.id || "0";
    }

    customer: any = {};
    options: any[] = [];
    invalid: boolean = false;

    created() {
        this.initData();
    }

    private async initData() {
        try {
            this.setLoading(true);
            const customer = (Number(this.customerId) > 0) 
                ? await httpClient.get(`customer/${this.customerId}`) : { };
            this.customer = customer;
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }

    cancel() {
        this.$bvModal.msgBoxConfirm('Estás seguro de cancelar esta acción?', {
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
                this.$router.go(-1);
            }
        }).catch(err => {
            console.error(err);
        });
    }

    validateState(ref: string) {
        const field: any = this.$validator.fields.find({ name: ref });
        if (field && (field.dirty || field.validated)) 
        {
            return !this.$validator.errors.has(ref);
        }
        return null;
    }

    throwError(ref: string) {
        return this.$validator.errors.items.find(e => e.field == ref)?.msg;
    }

    onSubmit() {
        try {
            this.$validator.validateAll().then(async result => {
                if (!result) {
                    this.invalid = true;
                    return;
                }
                this.setLoading(true);
                if (this.customer.id > 0) {
                    await httpClient.put(`customer/${this.customer.id}`,this.customer);
                } else  {
                    await httpClient.post(`customer`,this.customer);
                }
                this.$router.go(-1);
            });
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }

}