<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">Facturas</h1>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">number</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Método de pago</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(invoice, index) in invoices" :key="index">
                            <td>{{ invoice.id }}</td>
                            <td>{{ invoice.number }}</td>
                            <td>{{ invoice.customer_name }} {{ invoice.customer_last_name }}</td>
                            <td>{{ invoice.paymode_name }}</td>
                            <td>{{ invoice.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Invoice',
    data() {
        return {
            invoices: []
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/invoices")
            .then(response => (this.invoices = response.data.invoices))
    },
}
</script>