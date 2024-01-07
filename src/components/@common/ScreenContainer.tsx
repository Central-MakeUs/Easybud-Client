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
  fixedBottomComponent?: ReactNode;
} & ScrollViewProps;

/** Use ScrollViewProps */
export default function ScreenContainer({
  children,
  loading,
  fixedBottomComponent,
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
              <ActivityIndicator size="large" color={theme.palette.primary} />
            </View>
          ) : (
            children
          )}
        </ScrollView>
        {fixedBottomComponent && (
          <View style={styles.fixedBottomContainer}>
            {fixedBottomComponent}
          </View>
        )}
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
  fixedBottomContainer: {},
});
