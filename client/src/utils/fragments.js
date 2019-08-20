const searchProperty = (a , s) => {
  let property
  for(let [k,v] of Object.entries(a)){
    if( k === s) return v
    if( v instanceof Object )
      if((property = searchProperty( v , s)) && property ) return property
    if( v instanceof Array ) {
      for(let i of v){
        if ( i instanceof Object )
          if((property = searchProperty( i , s ) && property) ) return property
      }
    }
  }
}
const spreadFragment = ( fragment , searchFun ) => `...${searchFun( fragment , 'name' ).value}`
const listFragment = ( fragment , searchFun ) => {
  return `fragment ${searchFun(fragment,'name').value} on Link {
    ${searchFun(fragment, 'selections').map( v => v.name.value ).join(',\n')}
  }`
}

export default {
  spreadFragment,
  listFragment,
  searchProperty,
}