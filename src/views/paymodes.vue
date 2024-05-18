<template>
    <div class="container mt-3">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="alert alert-success" role="alert">
                        <h1 class="mb-0" style="color: green;">Medios de pago</h1>
                    </div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Observacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(paymode,index) in paymodes" :key="index">
                                <th scope="row">{{paymode.id}}</th>
                                <td>{{paymode.name}}</td>
                                <td>{{paymode.observation}}</td>
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
        name: 'Paymode',
        data(){
            return{
                paymodes: []
            }
        },
        mounted(){
            axios
            .get("http://127.0.0.1:8000/api/paymodes")
            .then(response => (this.paymodes = response.data.paymodes))
        },
    }
    </script>