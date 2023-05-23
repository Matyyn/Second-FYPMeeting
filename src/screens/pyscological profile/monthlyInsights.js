import React,{useState} from 'react';
import Slider from '@react-native-community/slider';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
//import { LineChart } from 'react-native-chart-kit';

const MyLineChart = () => {
    
      {/* <LineChart
        data={data}
        width={Dimensions.get('window').width - 35}
        height={300}
        chartConfig={{
          backgroundColor: 'white',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          gridVisible: false, // Remove the background grids
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      /> */}
      const data = [10, 12, 15, 8, 5, 9, 11, 13, 14, 7, 6, 10];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const maxDataValue = Math.max(...data);
      return (
        <View style={styles.chartContainer}>
        <View style={styles.gridContainer}>
          
        </View>
        <View style={styles.barContainer}>
          {data.map((value, index) => (
            
            <View key={index}>
            <View style={[styles.bar, { height: (value / maxDataValue) * 200 }]}>
              <Text style={styles.barText}>{value}</Text>
            </View>
            <Text style={styles.monthText}>{months[index]}</Text>
          </View>
          ))}
        </View>
      </View>
        
  );
};


const FrequentEmotions=()=>{
  return (
      <>
      <View style={{marginBottom:'10%',flexDirection:'row',marginLeft:'7%',marginRight:'7%',justifyContent: 'space-between'}}>
      <View style={[styles.tag, styles.tag1]}>
        <Text style={styles.tagText}>Sad</Text>
      </View>
      <View style={[styles.tag, styles.tag2]}>
        <Text style={styles.tagText}>Optimistic</Text>
      </View>
      <View style={[styles.tag, styles.tag3]}>
        <Text style={styles.tagText}>Relaxed</Text>
      </View>
      </View>
      </>
  );
}
const StressScale = () => {
  const [sliderValue, setSliderValue] = useState('Low');

  const handleSliderChange = (value) => {
    let selectedValue;
    switch (value) {
      case 0:
        selectedValue = 'Low';
        break;
      case 33:
        selectedValue = 'Average';
        break;
      case 66:
        selectedValue = 'High';
        break;
      case 100:
        selectedValue = 'Highest';
        break;
    }
    setSliderValue(selectedValue);
  };

  const renderSliderOptions = () => {
    const options = ['Low', 'Average', 'High', 'Highest'];

    return options.map((option, index) => (
      <Text key={index} style={sliderValue === option ? styles.selectedOption : styles.option}>
        {option}
      </Text>
    ));
  };

  return (
    <>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={33}
          value={
            sliderValue === 'Low'
              ? 0
              : sliderValue === 'Average'
              ? 33
              : sliderValue === 'High'
              ? 66
              : 100
          }
          onValueChange={handleSliderChange}
          minimumTrackTintColor="red" // Adjust the color as needed
          disabled ={true}
          maximumTrackTintColor="white" // Adjust the color as needed
          thumbTintColor="black" // Adjust the color as needed
        />
      </View>
      <View style={styles.optionsContainer}>{renderSliderOptions()}</View>
    </>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>      
        <View style={styles.container}>          
              <Text style={styles.header}>Mood Graph</Text>
              <MyLineChart />
              <Text style={styles.header}>Frequent Emotions</Text>
              <Text style={styles.paragraph}>Top 3 emotions eperienced in this period</Text>
              <FrequentEmotions/>
              <Text style={styles.header}>Stress Scale</Text>
              <Text style={styles.paragraph}>Stress scale in this period</Text>
              <StressScale/>
        </View>      
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  sliderContainer: {    
    marginTop:'6%',
    backgroundColor: 'orange',    
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,    
    borderRadius:10,
    marginLeft:'6%',
    marginRight:'6%'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',    
    textAlign: 'center',
    padding: 10,   
    height:'100%' 
  },
  header: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight:'600',
    paddingLeft: 25,
    marginTop: 16,
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 12,   
    paddingLeft: 25, 
  },
  tag: {
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  tag1: {
   backgroundColor: '#FF6347', // Tomato
  },
  tag2: {
    backgroundColor: 'lightgreen', // Deep Sky Blue
  },
  tag3: {
    backgroundColor: '#FFD700', // Yellow
    
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold',
  },    
  slider: {
    width: '90%',
    marginLeft:'5%',
    marginRight:'5%'
  },
  optionsContainer: {
    flexDirection: 'row',
    marginHorizontal:20,
    justifyContent: 'space-between',
    marginTop: 16,
  },
  option: {
    fontSize: 16,
    color: '#000',
    fontWeight:'700',
    marginLeft:'1%',marginRight:'1%'
  },
  selectedOption: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BFFF',
    marginLeft:'1%',marginRight:'1%'
  },
  chartContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingBottom: 16,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 3,
    paddingHorizontal: 4,
  },
  gridLine: {
    width: 1,
    height: '100%',
    backgroundColor: '#CCCCCC',
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  bar: {
    width: 20,
    backgroundColor: 'orange',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 4,
  },
  barText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  monthText: {
    color: 'black',
    fontSize: 10,
  },
});