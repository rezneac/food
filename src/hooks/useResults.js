import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const respons = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose"
                }
            });
            setResults(respons.data.businesses);
        } catch (e) {
            console.log(e);
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        searchApi("pasta")
    }, [])

    return [searchApi, results, errorMessage];
};