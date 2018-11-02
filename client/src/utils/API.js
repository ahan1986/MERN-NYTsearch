import axios from "axios";

export default {
    loadResults: function() {
        return axios.get("/api/results");
    },
    saveResults: function(data) {
        console.log('hitting POST in saveResults');
        console.log(data);
        return axios.post("/api/results", data);
    },
    deleteResults: function(id) {
        return axios.delete("/api/results/" + id);
    }
};