import FilmItem from './FilmItem'
import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList,Text,ActivityIndicator } from 'react-native'

import ItemCour from './ItemCour'
//Array de cours static en attendant l'api
const DATA = [
    {
      id: '1',
      title: 'Algo2',
      professeur: 'Eric Zeghers'
    },
    {
      id: '2',
      title: 'Web',
      professeur: 'Kristen Garnier'
    },
    {
      id: '3',
      title: 'DAC',
      professeur:'Vincent Sauvage'
    },
    {
        id: '4',
        title: 'DAC',
        professeur: 'Vincent Sauvage'
    },
    {
        id: '5',
        title: 'POO3',
        professeur: 'Antoine Vacavant'
      },
  ];


class SearchCour extends React.Component {
    

    //reset les var pour le changement films
    _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => { 
        console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
        this._loadFilms() 
    })
}
    // _displayLoading() {
    //     if (this.state.isLoading) {
    //       return (
    //         <View style={styles.loading_container}>
    //           <ActivityIndicator size='large' />
    //         </View>
    //       )
    //     }    
    // }
 
    constructor(props) {
        super(props)

        this.page = 0;
        this.totalPages = 0;
        this. searchedText=""
        this.state = {
            films : [],
            isLoading: false
        };
    }
    _searchTextInputChanged(text){
        this.searchedText = text
    }
   

    render() {

      return (
        <View style={{flex:1 ,flexDirection:'column',}}>    
            <View style={{backgroundColor: 'grey', flex :1,justifyContent: 'center', alignItems: 'center'}}>
            {/* <TextInput 
            style={styles.textinput} 
            
            //onPress={() => displayDetailForFilm(film.id)}
            placeholder='Titre du film'
            onChangeText={(text)=> this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._searchFilms()}
            
            />
            <Button style={styles.textinput} title='Rechercher'  onPress={() => this._searchFilms() }/>
                */}
                    
                    
                <Text style={{color: "white"}} > Liste des cours :  </Text>
                    
            
            </View>        
            
            <View style={{backgroundColor: 'white', flex:5}}>
                
                
                <FlatList
                        data = {DATA}
                        keyExtractor={item => item.id.toString()}
                        
                        renderItem={({item}) => <ItemCour Cour={item}/>}
                /> 
                        

                
            </View>
        </View>
      )
    }
      
}

const styles = StyleSheet.create({
main_container:{
     marginTop: 20, backgroundColor: 'white',flex:1 
},

    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    loading_container: {
        flex:1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default SearchCour