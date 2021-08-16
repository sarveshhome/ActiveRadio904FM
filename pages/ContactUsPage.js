// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ContactUsPage = ({ navigation }) => {
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
              textAlign: 'center',
              marginBottom: 16,
            }}>
           Radio Active 90.4 FM, 2nd Floor, Sumrit Mandal Complex, Netaji Subhash Chandra Bose Road, NH-80, Tilka manjhi, Bhagalpur, Bihar 812001
          </Text>          
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

export default ContactUsPage;
