import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';

/**
 * @param stepCount 총 step 수
 * @param currentStep 현재 step
 */
type ProgressStepProps = {
  stepCount: number;
  currentStep: number;
};

export default function ProgressStep({
  stepCount,
  currentStep,
}: ProgressStepProps) {
  const getProgressBarStyle = (index: number) => {
    return {
      backgroundColor:
        index + 1 <= currentStep ? theme.palette.primary : undefined,
      borderTopRightRadius: index + 1 === currentStep ? 8 : 0,
      borderBottomRightRadius: index + 1 === currentStep ? 8 : 0,
      borderTopLeftRadius: index === 0 ? 8 : 0,
      borderBottomLeftRadius: index === 0 ? 8 : 0,
    };
  };

  return (
    <View style={progressStepStyles.container}>
      {[...Array(stepCount)].map((_, index) => (
        <View
          key={index}
          style={[progressStepStyles.bar, getProgressBarStyle(index)]}
        />
      ))}
    </View>
  );
}

const progressStepStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 4,
    backgroundColor: theme.palette.gray2,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  bar: {
    flex: 1,
    height: 4,
  },
});
