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
  style?: React.CSSProperties | Array<React.CSSProperties>;
} & ScrollViewProps;

/** Use ScrollViewProps */
export default function ScreenContainer({
  children,
  loading,
  ...props
}: ScreenContainerProps) {
  return (
    <SafeAreaView {...props} style={[styles.safeArea, props.style]}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollViewContent,
            props.contentContainerStyle,
          ]}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={theme.palette.primary} />
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
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
