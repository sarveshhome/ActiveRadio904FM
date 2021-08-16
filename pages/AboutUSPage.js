// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const AboutUSPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'left',
              marginBottom: 5,
            }}>
           Radio Active provides the wholesale program to entertain and enrich the lives of its listeners by promoting peace, co-existence, secularism, information, and entertainment. Overall we can say that our vision is to touch lives and spread happiness to the underprivileged on a sustainable basis and to use the Radio Station as a medium to reach this goal.
          </Text>
          {/* <Button
            title="Go to First Page"
            onPress={() => navigation.navigate('HomePage')}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate('ContactUsPage')}
          /> */}
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
         
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.radioactivebhagalpur.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutUSPage;
