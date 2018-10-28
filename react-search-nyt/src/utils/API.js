import axios from 'axios';

export default {
    loadResults: function() {
        return axios.get("/api/results");
    },
    saveResults: function(data) {
        return axios.post("/api/results", data);
    }
};