import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer kLW3trfloDsBpJkDWS6phJI3Up9C3LVnXZYUYtqiTZ_dO3VtBQs1lvWIOg1atjgi5KZwVSnfHkA-CUuY3egqSTMbynw8D2qVu7hy1gaQzv3AV85JYV2NtJy1-2v7YnYx"
    }
});
