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
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {flex: 1},
  scrollViewContent: {
    backgroundColor: theme.palette.gray1,
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
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});
