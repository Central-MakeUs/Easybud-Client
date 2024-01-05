import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  View,
  ScrollViewProps,
} from 'react-native';
import {theme} from 'styles';

type ScreenContainerProps = {
  children: ReactNode;
  loading?: boolean;
} & ScrollViewProps;

/** Use ScrollViewProps */
export default function ScreenContainer({
  children,
  loading,
  ...props
}: ScreenContainerProps) {
  return (
    <SafeAreaView {...props} style={styles.safeArea}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView
          {...props}
          contentContainerStyle={[
            styles.scrollViewContent,
            props.contentContainerStyle,
          ]}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            children
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.palette.gray1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'red',
    padding: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
