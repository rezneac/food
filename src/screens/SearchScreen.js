import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        });
    };


    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermSubmit={() => { searchApi(term) }}
                onTermChange={(newTerm) => setTerm(newTerm)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultList results={filterResultsByPrice("$")} title="Cost effective" />
                <ResultList results={filterResultsByPrice("$$")} title="Bit pricier" />
                <ResultList results={filterResultsByPrice("$$$")} title="Big spender" />
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({

});

export default SearchScreen;