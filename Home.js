import { Text, View, TouchableOpacity, StyleSheet,FlatList, Settings } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10
  }
});


const diarys = [
  {
    id: '1',
    diary: 'today was sunny',
  },
  {
    id: '2',
    diary: 'Today was rainy'
  },
  {
    id: '3',
    diary: 'Today was cloudy'
  }
]

const renderDiary = ({item}) => {
  return(
    <View style= {{ flexDirection: 'row',borderBottomColor: '#ddd', borderBottomWidth: 4, padding:10, fontSize: 20}}>
    <Text style= {{marginRight:10}}>{item.id}</Text>
    <Text>{item.diary}</Text>
    </View>
  )
}

const Home = (props) => {
  return(
    <View style={styles.container}>
     <View style={{flex:1}}>
        <FlatList data={diarys} renderItem={renderDiary} style={{flex:1}}/>
      </View>
      <TouchableOpacity style={{flex:1}}
        onPress={() => props.navigation.navigate('write your story')}>
          <View style= {{ position: 'absolute', left:80, bottom: 20, zIndex: 10,}}>
            <View style= {{width: 80, height: 80, backgroundColor: 'tomato', borderRadius: 40, alignItems: 'center', justifyContent: 'center',}}>
                <Text style= {{textAlign:'center',fontSize:20}} onPress= {()=>props.navigation.navigate("write your story")}>
                Write
              </Text>
            </View>
          </View>
      </TouchableOpacity>
    </View>

    
  )
}

export default Home;