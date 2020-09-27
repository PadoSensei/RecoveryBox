//https://formidable.com/open-source/victory/gallery/area-hover-styles

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector} from "react-redux";
import { MediumAppText, BoldAppText } from '../../styles/text'
import Divider from '../Divider'
import { VictoryArea, VictoryScatter, VictoryGroup, VictoryChart, VictoryBar} from './Victory';
import colors from '../../styles/colors'
import _ from 'lodash';
import { DateTime } from 'luxon'
import {Defs, LinearGradient, Stop } from "react-native-svg";

function SuggestionsVisuals () {

  const suggestionsToShow = 5;
  const historicalData = useSelector((state) => state.historicalData);
  const suggestionsData = _.map(historicalData, el => el.suggestions) 
  const fullSuggestionsList = useSelector((state) => state.settings.suggestionSettings.fullSuggestionsList);
  
  // TODO add some kind of toggle to show more data on the graphs or change their format

  function create (array) {
    let obj = {}
    for (let i of array) {
      for (let j of i) {
        if (Object.keys(obj).includes(j)) {
          obj[j] = obj[j]+1
        } else {
          obj[j]= 1
        }
      }
    }
    return obj
  }

  function createSuggestions (obj) {
    let arr = [];
    for (let i in obj) {
      let newobj = {}
      newobj.suggestion = i
      newobj.value = obj[i]
      arr.push(newobj)
    }
    return arr;
  }

  function topFive (arr, num) {
    let newArr= [];
    let max = num;
    for (let i =0; i < max; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }

  function randomNumGen (arr, min, max) {
    let copyArr = arr.slice()
    max = Math.floor(max-1);
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      const choose = Math.floor(Math.random() * (max - min + 1)) + min;
      newArr.push(copyArr.splice(choose,1)[0])
      max-- 
    }
    return newArr
  }

  const suggestionsObject = create(suggestionsData)
  const suggestions = createSuggestions(suggestionsObject)
  const sortedSuggestions = _.orderBy(suggestions, ['value'], ['desc'])
  const topSuggestions = topFive(sortedSuggestions, suggestionsToShow)
  const randomTopSuggestions = randomNumGen(topSuggestions, 0, suggestionsToShow)

  return (
    <View style={styles.container}>
      <BoldAppText style={{color: colors.lightGray, marginBottom:0, fontSize:14, alignSelf:'flex-start',}}>Top 5 Suggestions</BoldAppText>
      <VictoryGroup width={350} height={200} styles={styles.container} >
        <VictoryScatter 
          data={randomTopSuggestions} 
          animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        x={"suggestion"} 
        y={"value"}
        bubbleProperty="value"
        maxBubbleSize={40}
        minBubbleSize={10}
        style={{ 
          data: { 
            fill: colors.blue,
            stroke: 'white',
            strokeWidth: 2,
            opacity: 0.8,
          },
          parent: {
          },
          labels: { 
            fill: colors.darkGrayFont, 
            fontSize: 10,
            color: colors.green,
          }
        }}
        interpolation="natural"
        labels={({ datum }) => `${datum.suggestion}`}
        />

      </VictoryGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SuggestionsVisuals;