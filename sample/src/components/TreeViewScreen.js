/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import headerImage from '../assets/images/background.jpg';
import API from '../services/api';
import getRequest from '../services/request';

momentDurationFormatSetup(moment);
const screenWidth = Dimensions.get('screen').width;
const barSize = screenWidth / 9;

const Loader = (props) => {
  const {loading} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#00000040',
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: 100,
            width: 100,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <ActivityIndicator color={'skyblue'} size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

const DateInput = (props) => {
  return (
    <View
      style={{
        width: '35%',
        height: 25,
        flexDirection: 'row',
        borderRadius: 4,
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
  const [selected, setSelected] = useState(true);
  useEffect(() => {
    props.viewSelectionHaldler(selected);
  }, [selected]);

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

const CoinInfo = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={[{fontSize: 12}, props.coinStyle]}>
        {props.coin} AiScoins
      </Text>
      <View
        style={{
          width: 12,
          height: 12,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginHorizontal: 2,
          backgroundColor: '#d5c35d',
        }}>
        <FIcon name="dollar" size={8} color="#fff" />
      </View>
    </View>
  );
};

const LocationInfo = (props) => {
  console.log(moment(new Date(props.date)).format('YYYY MM DD'));

  let duration = moment
    .duration(props.duration, 'minutes')
    .format('h[h]: m[m]', {
      trim: false,
    });
  let date = moment(new Date(props.date)).format('YYYY MM DD');

  return (
    <View>
      <Text style={{fontSize: 12, fontWeight: 'bold', textAlign: props.align}}>
        {props.location ? props.location : 'Location'}
      </Text>
      <Text style={{fontSize: 12, textAlign: props.align}}>
        {props.city ? props.city : 'City'}
      </Text>
      <Text style={{fontSize: 12, textAlign: props.align}}>
        {duration ? duration : 'Duration'}
      </Text>
      <Text style={{fontSize: 12, textAlign: props.align}}>
        {props.date ? date : 'Date'}
      </Text>
      {/* <Text style={{fontSize: 12, textAlign: props.align}}> */}
      {props.coin ? <CoinInfo coin={props.coin} /> : <Text>Coins</Text>}
      {/* </Text> */}
    </View>
  );
};

const Location = (props) => {
  const item = props.item;
  const info = {
    location: item.contentName,
    duration: item.totalTimeSpent,
    date: item.eventDateTime,
    coin: item.totalContentCoins,
  };
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: props.left ? 'flex-start' : 'flex-end',
      }}>
      {props.left ? <LocationInfo align="left" {...info} /> : <View />}
      <View style={{width: 40, justifyContent: 'flex-end', paddingVertical: 5}}>
        <View
          style={{
            width: 15,
            height: 12,
            bottom: -55,
            left: 5,
            zIndex: -1,
            borderRadius: 8,
            alignSelf: 'center',
            backgroundColor: '#ffa700',
          }}
        />
        <MIcon
          name="location-on"
          size={50}
          color="#8ca5ce"
          style={{width: 50, height: 50, zIndex: -1}}
        />
      </View>
      {props.right ? <LocationInfo align="right" {...info} /> : <View />}
    </View>
  );
};

const TimeView = (props) => {
  return (
    <View style={{width: '100%', paddingHorizontal: 15}}>
      {props.data.map((item, i) => {
        if (i % 2 == 0) {
          return <Location left={true} key={i} item={item} />;
        } else {
          return <Location right={true} key={i} item={item} />;
        }
      })}
    </View>
  );
};

const VisitHistory = (props) => {
  console.log(props);
  let date = moment(new Date(props.startTime)).format('YYYY MM DD');
  let startTime = moment(new Date(props.startTime)).format('hh:mm');
  let endTime = moment(new Date(props.endTime)).format('hh:mm');
  let coin = props.coinsEarned;
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
        {date}{' '}
      </Text>
      <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
        {startTime}{' '}
      </Text>
      <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
        {endTime}{' '}
      </Text>
      <CoinInfo
        coin={coin}
        coinStyle={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}
      />
    </View>
  );
};

const Card = (props) => {
  const item = props.item;
  let imageUri = item.contentImgUrl;
  let location = item.contentName;
  let coin = item.totalContentCoins;
  let duration = moment
    .duration(item.totalTimeSpent, 'minutes')
    .format('h[h]: m[m]', {
      trim: false,
    });
  let date = moment(new Date(item.eventDateTime)).format('YYYY MM DD');

  const [expand, setExpand] = useState(false);
  return (
    <View
      style={{
        width: '100%',
        height: expand ? 200 : 100,
        borderRadius: 10,
        // padding: 10,
        backgroundColor: expand ? '#98be57' : '#fff',
      }}>
      <View
        style={{
          width: '100%',
          height: expand ? '50%' : '100%',
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: '#98be57',
        }}>
        <View
          style={{
            width: '28%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Image
            source={{uri: imageUri}}
            style={{
              width: 80,
              height: 80,
              resizeMode: 'contain',
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View
          style={{
            width: '40%',
            justifyContent: 'space-evenly',
            paddingVertical: 10,
            paddingHorizontal: 5,
          }}>
          <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
            {location}
          </Text>
          <Text style={{color: '#fff', fontSize: 12}}>City</Text>
          <Text style={{color: '#fff', fontSize: 12}}>
            {duration} {date}
          </Text>
          {coin ? (
            <CoinInfo coin={coin} coinStyle={{color: '#fff'}} />
          ) : (
            <Text>Coins</Text>
          )}
        </View>
        <View
          style={{
            width: '28%',
            paddingVertical: 10,
            paddingHorizontal: 10,
            alignItems: 'flex-end',
          }}>
          {coin ? (
            <CoinInfo coin={coin} coinStyle={{color: '#fff'}} />
          ) : (
            <Text>Coins</Text>
          )}
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={() => setExpand(!expand)}>
            <FIcon
              name={expand ? 'chevron-down' : 'chevron-up'}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
      {expand && (
        <View
          style={{
            width: '100%',
            height: '50%',
            flexDirection: 'row',
            borderRadius: 10,
            backgroundColor: '#98be57',
          }}>
          <View style={{width: '28%'}} />
          <View
            style={{width: '75%', paddingVertical: 10, paddingHorizontal: 5}}>
            {item.visitHistory.map((history, i) => {
              return <VisitHistory {...history} key={i} />;
            })}
          </View>
        </View>
      )}
    </View>
  );
};

const ListView = (props) => {
  return (
    <View style={{width: '100%', paddingHorizontal: 15}}>
      {props.data.map((item, i) => {
        return (
          <View key={i} style={{paddingVertical: 5}}>
            <Card item={item} />
          </View>
        );
      })}
    </View>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultView: false,
      isLoading: true,
      apiData: [],
    };
  }

  viewSelectionHaldler = (view) => {
    this.setState({
      defaultView: view,
    });
  };

  refreshHandler = () => {
    this.setState({
      isLoading: true,
    });
    this.getApiDate();
  };

  getApiDate = async () => {
    let response = await getRequest(API);
    if (Array.isArray(response)) {
      this.setState({
        apiData: response,
        isLoading: false,
      });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount = () => {
    this.getApiDate();
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Loader loading={this.state.isLoading} />
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

                <TouchableOpacity
                  onPress={this.refreshHandler}
                  style={{
                    width: 25,
                    height: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    backgroundColor: '#fff',
                  }}>
                  <MIcon name="refresh" size={20} color="#9ec5bd" />
                </TouchableOpacity>
              </View>
              <View style={{height: 10}} />
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: '100%',
            height: 200,
            top: -30,
            paddingHorizontal: 5,
          }}>
          <Header />
          <View>
            <HeaderMenu viewSelectionHaldler={this.viewSelectionHaldler} />
          </View>
        </View>
        <View style={{top: -20}}>
          {this.state.defaultView ? (
            <ListView data={this.state.apiData} />
          ) : (
            <TimeView data={this.state.apiData} />
          )}
        </View>
      </View>
    );
  }
}

export default App;

// API URL : https://api.npoint.io/53b1538e188ebed5d432
