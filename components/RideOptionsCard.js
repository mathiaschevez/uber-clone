import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-elements/dist/image/Image';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    muliplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    muliplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-gray-200 flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw `text-center py-5 text-xl`}>Select a ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id} 
        renderItem={({ item: {id, title, muliplier, image}, item }) =>(
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-300'}`}
          >
            <Image 
              style={{
                width:80,
                height: 80,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel time {travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP',
              }).format(
                (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * muliplier) / 100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-300`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})