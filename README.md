# React-native-custom-components

React-native-custom-components compatible for both ios and android

# List of components
- [SearchBar](#searchBar)

## SearchBar 

##### Preview:

<img src="assets/images/SearchBar.png" width="250" />

##### Usage:

```
<SearchBar
    shadow
    round={10}
    leftComponent={<Icon name="star" size={16} color={"black"} />}
    onChangeText={() => { }} />
```

##### Property

| Property             |    Type    |       Default        | Description                                        |
| -------------------- | :--------: | :------------------: | -------------------------------------------------- |
| shadow  |   boolean   |  false     | use to apply shadow effect on the SearchBar container         
| round   |   number    |  10        | use to change border radius of the SearchBar container         
| placeholder  |   string   |  ""    | use to add placeholder to the SearchBar        
| onChangeText  |   functioj   |  required     | use to update search bar input     
| shadow  |   boolean   |  false     | use to apply shadow effect on the SearchBar container         
| containerStyle  |   object   |  detail in source code     | use to style SearchBar container
| textInputStyle  |   object   | detail in source code     | use to style Search input 
| leftComponent  |   object   |  null     | use to add custom component on the left of the search bar
| rightComponent  |   object   |  vector search icon     | use to add custom component on the right of the search bar


    