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
  return (
    <View style={progressStepStyles.container}>
      {[...Array(stepCount)].map((_, index) => (
        <View
          key={index}
          style={[
            progressStepStyles.bar,
            {
              backgroundColor:
                index + 1 === currentStep
                  ? theme.palette.primary
                  : theme.palette.gray2,
            },
          ]}
        />
      ))}
    </View>
  );
}

const progressStepStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    backgroundColor: theme.palette.gray2,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  bar: {
    flex: 1,
    height: 10,
    borderRadius: 8,
  },
});
