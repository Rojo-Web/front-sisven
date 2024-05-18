<template>
        <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">Productos</h1>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product,index) in products" :key="index">
                            <th scope="row">{{product.id}}</th>
                            <td>{{product.name}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.stock}}</td>
                            <td>{{product.nameC}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name: 'Product',
    data(){
        return{
            products: []
        }
    },
    mounted(){
        axios
        .get("http://127.0.0.1:8000/api/products")
        .then(response => (this.products = response.data.products))
    },
}
</script>