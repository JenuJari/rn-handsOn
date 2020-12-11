import React from 'react';
import {StatusBar, SafeAreaView, View, Text} from 'react-native';

export default Root = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{'Hello world'}</Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};
