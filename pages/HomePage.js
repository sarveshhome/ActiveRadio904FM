import * as React from 'react';
import { Button, View, Text, SafeAreaView,TouchableOpacity  } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import { Audio } from 'expo-av';

const audio = {
  filename: 'My Awesome Audio',
  uri:
    'http://109.169.14.36:21337/live.mp3',
};

const HomePage = ({ navigation }) => {
  const buttonhandler=()=>{
    console.log('hclick');
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  useEffect(() => {
    if (playbackObject === null) {
      setPlaybackObject(new Audio.Sound());
    }
  }, []);

   const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(
        { uri: audio.uri },
        { shouldPlay: true }
      );
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }

    // It will pause our audio
    if (playbackStatus.isPlaying) {
      const status = await playbackObject.pauseAsync();
      setIsPlaying(false);
      return setPlaybackStatus(status);
    }

    // It will resume our audio
    if (!playbackStatus.isPlaying) {
      const status = await playbackObject.playAsync();
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 15, backgroundColor: '#fff' }}>
      <Ionicons
          style={{
            alignSelf: 'center',
            backgroundColor: 'gray',
            padding: 10,
            borderRadius: 50,
          }}
          name={isPlaying ? 'pause' : 'play'}
          size={24}
          color='white'
          onPress={handleAudioPlayPause}
        />
      </View>       
      <View style={{ flex: 1, padding: 12 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'left',
              marginBottom: 5,
            }}>
            Radio Active 90.4 MHz is Bhagalpur’s first FM Radio Station, operated under parent organization “LOKHIT”. Launched in 2011, the station is a platform for different communities to converge/ unite, share ideas, encourage creative expressions, raise issues (civic and social rights), promote local talent, local business, foster local traditions, sensitize on issues of importance
          </Text>          
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
            http://www.radioactivebhagalpur.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;