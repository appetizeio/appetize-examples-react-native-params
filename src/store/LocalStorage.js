import AsyncStorage from '@react-native-community/async-storage'

export const storeItem = async ( key , value) => {
    console.log("store: key: ", key)
    console.log("store: value: ", value)
    try {
        await AsyncStorage.setItem(key, value)
        console.log("store item Success"+value);
    } catch (error) {
        console.error("store item: ", error)
        return error
    }
}


export const getItem =  async (key) => {
    try {
        const value =  await AsyncStorage.getItem(key)
        console.log("getItem: Success", value)
        return value
    } catch (error) {
        console.error("get item: ", error)
        return error
    }
}

