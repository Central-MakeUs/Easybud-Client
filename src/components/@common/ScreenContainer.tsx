import React, {ReactNode} from 'react';
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  View,
  ScrollViewProps,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {theme} from 'styles';

/**
 * @param children 자식 요소
 * @param loading 로딩 여부
 * @param style 추가적인 style 속성
 */
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
    <GestureHandlerRootView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollViewContent,
            props?.style,
            props?.contentContainerStyle,
          ]}
          keyboardShouldPersistTaps="handled">
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={theme.palette.primary} />
            </View>
          ) : (
            children
          )}
        </ScrollView>
        {fixedBottomComponent && (
          <View style={styles.fixedBottomComponent}>
            {fixedBottomComponent}
          </View>
        )}
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {flex: 1},
  scrollViewContent: {
    backgroundColor: theme.palette.gray1,
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexGrow: 1,
    gap: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedBottomComponent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});
