<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">Detalles</h1>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">invoice</th>
                            <th scope="col">product</th>
                            <th scope="col">quantity</th>
                            <th scope="col">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(detail, index) in details" :key="index">
                            <td>{{ detail.id }}</td>
                            <td>{{ detail.invoices_number }}</td>
                            <td>{{ detail.products_name }}</td>
                            <td>{{ detail.quantity }}</td>
                            <td>{{ detail.price }}</td>
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
    name: 'Detail',
    data() {
        return {
            details: []
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/details")
            .then(response => (this.details = response.data.details))
    },
}
</script>