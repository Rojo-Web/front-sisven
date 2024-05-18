<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">CUSTOMERS</h1>
                </div>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">F/Nacimiento</th>
                            <th scope="col">N/Telefono</th>
                            <th scope="col">Correo</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(customer, index) in customers" :key="index">
                            <th scope="row">{{ customer.id }}</th>
                            <td>{{ customer.document_number }}</td>
                            <td>{{ customer.first_name }}</td>
                            <td>{{ customer.last_name }}</td>
                            <td>{{ customer.address }}</td>
                            <td>{{ customer.birthday }}</td>
                            <td>{{ customer.phone_number }}</td>
                            <td>{{ customer.email }}</td>

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
    name: 'Customer',
    data() {
        return {
            customers: []
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/customers')
            .then(response => (this.customers = response.data.customers))

    },
}


</script>