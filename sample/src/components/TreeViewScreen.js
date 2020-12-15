/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import headerImage from '../assets/images/background.jpg';

const screenWidth = Dimensions.get('screen').width;
const barSize = screenWidth / 9;

const DateInput = (props) => {
  return (
    <View
      style={{
        width: '35%',
        height: 25,
        flexDirection: 'row',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
      }}>
      <View style={{width: '80%'}}>
        <TextInput
          placeholder={props.placeholder}
          style={{
            padding: 5,
            textAlign: 'center',
          }}
        />
      </View>
      <View style={{width: '20%'}}>
        <MIcon name="calendar-today" size={20} color="#ce6f0c" />
      </View>
    </View>
  );
};

const Bar = (props) => {
  return (
    <View
      style={{
        width: barSize,
        height: 10,
        padding: 2,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{height: 5, backgroundColor: '#ddd'}} />
    </View>
  );
};

const Bars = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <SLIcon
        name="badge"
        size={20}
        style={{width: 20, height: 20, left: -5, top: -2}}
      />
      {Array(8)
        .fill(null)
        .map((item, i) => (
          <View key={i} style={{left: -15, zIndex: -1}}>
            <Bar />
          </View>
        ))}
    </View>
  );
};

const Header = (props) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        paddingLeft: 15,
        borderTopRightRadius: 10,
        backgroundColor: '#ed9873',
      }}>
      <View style={{height: '45%', flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 12}}>Overall Profile Strength:</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 5}}>
          Bronze
        </Text>
      </View>
      <View style={{height: '45%'}}>
        <Bars />
      </View>
    </View>
  );
};

const HeaderMenu = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <View style={{paddingHorizontal: 5}}>
      <View
        style={{
          width: '100%',
          height: 20,
        }}
      />
      <View
        style={{
          width: '100%',
          height: 35,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: 5,
        }}>
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <Text style={{fontWeight: 'bold', paddingVertical: 5}}>
            Time View
          </Text>
          <View
            style={{
              height: 2,
              backgroundColor: selected ? '#fff' : '#40e6ea',
              justifyContent: 'flex-end',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 2,
            height: '100%',
            marginHorizontal: 10,
            backgroundColor: '#000',
          }}
        />
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <Text style={{fontWeight: 'bold', paddingVertical: 5}}>
            List View
          </Text>
          <View
            style={{
              height: 2,
              backgroundColor: selected ? '#40e6ea' : '#fff',
              justifyContent: 'flex-end',
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Text style={{fontSize: 12}}>AiScoins</Text>
          <View
            style={{
              width: 12,
              height: 12,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              backgroundColor: '#d5c35d',
            }}>
            <FIcon name="dollar" size={8} color="#fff" />
          </View>
        </View>
        <Text style={{color: '#95a4bb', fontSize: 14, fontWeight: 'bold'}}>
          80
        </Text>
      </View>
      <View style={{alignItems: 'center', top: -15}}>
        <Text style={{fontWeight: 'bold'}}>Accomodations</Text>
      </View>
      <View style={{top: -15}}>
        <Header />
      </View>
      <View>
        <Image
          source={require('../assets/images/people-social-group.png')}
          style={{
            width: 50,
            height: 50,
            resizeMode: 'contain',
            top: -98,
            left: 15,
          }}
        />
      </View>
    </View>
  );
};

class TreeView extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <ImageBackground
            source={headerImage}
            style={{
              width: '100%',
              height: 200,
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#00000045',
              }}>
              <Text style={{color: '#fff', fontSize: 20, margin: 5}}>
                My activities
              </Text>
              <TextInput
                placeholder="What are you looking for?"
                style={{
                  width: '65%',
                  height: 40,
                  padding: 5,
                  margin: 5,
                  textAlign: 'center',
                  borderRadius: 4,
                  backgroundColor: '#fff',
                }}
              />
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 5,
                }}>
                <View
                  style={{
                    width: 20,
                  }}
                />
                <DateInput placeholder="Start Date" />
                <DateInput placeholder="End Date" />

                <View
                  style={{
                    width: 25,
                    height: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    backgroundColor: '#fff',
                  }}>
                  <MIcon name="refresh" size={25} color="#9ec5bd" />
                </View>
              </View>
              <View style={{height: 10}} />
            </View>
          </ImageBackground>
        </View>
        <View>
          <View
            style={{
              width: '100%',
              height: 200,
              top: -30,
              paddingHorizontal: 5,
            }}>
            <Header />
            <View>
              <HeaderMenu />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TreeView;
