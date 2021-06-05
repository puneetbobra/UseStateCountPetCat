import React, {useState} from 'react'
import { Button, Text, View } from 'react-native'

const Cat = (props) => {
    const [count, setCount] = useState(0)

    return (
        <View>
            <Text>You pet {props.name} the cat {count} times!</Text>
            <Button
                title="Pet Cat"
                onPress={() => {
                    setCount(count +1 )                
                }}
                />
        </View>
    )
            }

const Cafe = () => {
    return (
        <>
        <Cat name = 'Alice' />
        <Cat name = 'Bob' />
        <Cat name = 'Kavish' />
        </>
    )
}

export default Cafe
