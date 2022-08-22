import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultList = ({ title, results }) => {

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({item}) => {
                    return <Text>{item.name}</Text>
                }}  
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }

});

export default ResultList;