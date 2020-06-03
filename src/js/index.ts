import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface Lastbil {
    LastBilType: string;
    AntalKm: number;
    AntalLiter: number;
}
let baseUri: string = "https://localhost:44362/api/Item"

var app = new Vue({
    el: "#app",
    data: {
        Lastbils: [], formData: {LastBilType:"",AntalKm:0, AntalLiter:0},

    },
    methods: {
        getAllLastbils() {
            axios.get<Lastbil[]>(baseUri)
                .then((Response: AxiosResponse<Lastbil[]>) => {
                    this.Lastbils = Response.data
                    console.log(Response.data)
                })
                .catch((error: AxiosError) => {
                    console.log(error.message)
                })
            },
        }
    })