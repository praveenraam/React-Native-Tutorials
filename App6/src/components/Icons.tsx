import React from 'react'
import type { PropsWithChildren } from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name:string
}>

const Icon = ( {name} : IconProps) => {
  
  switch (name){
    case 'circle':
        return <FontAwesomeIcon name="cirlce-thin" size={38} color="#F7CD2E"/>
        break;
    case "cross" :
        return <FontAwesomeIcon name="times" size={38} color="38CC77" ></FontAwesomeIcon>
    default :
        return <FontAwesomeIcon name="pencil" size={38} color="0D0D0D" ></FontAwesomeIcon>
  }
  
    return (

    <div>Icon</div>
  )
}



export default Icon