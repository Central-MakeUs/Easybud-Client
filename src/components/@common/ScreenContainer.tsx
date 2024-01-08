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
  style?: React.CSSProperties | Array<React.CSSProperties>;
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
          contentContainerStyle={[
            fixedBottomComponent ? {paddingBottom: 100} : {},
            styles.scrollViewContent,
            props?.style,
            props?.contentContainerStyle,
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
          <View style={styles.fixBottomComponent}>{fixedBottomComponent}</View>
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
    padding: 20,
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixBottomComponent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    margin: 20,
    borderRadius: 12,
    shadowColor: theme.palette.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // Android용 그림자 효과
    alignItems: 'center', // 자식 컴포넌트를 중앙에 배치
    justifyContent: 'center', // 자식 컴포넌트를 중앙에 배치
  },
});
