import {View, StyleSheet} from 'react-native';
import Typography from 'components/@common/Typography';
import {theme} from 'styles';

/**
 * @param isVisible 툴팁을 보여줄지 여부
 * @param text 툴팁 텍스트
 * @param position 툴팁 위치
 */
type TooltipProps = {
  isVisible: boolean;
  text: string;
  position: {
    top: number;
    left: number;
  };
};

export default function Tooltip({isVisible, text, position}: TooltipProps) {
  return (
    isVisible && (
      <View
        style={[
          tooltipStyles.backgroundContainer,
          {top: position.top, left: position.left},
        ]}>
        <View style={tooltipStyles.triangleContainer} />
        <View style={tooltipStyles.container}>
          <Typography type={'Body1Regular'} color={'gray2'}>
            {text}
          </Typography>
        </View>
      </View>
    )
  );
}

const tooltipStyles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    alignItems: 'flex-start',
  },
  triangleContainer: {
    left: '50%',
    marginLeft: -2.5,
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderBottomWidth: 7,
    borderBottomColor: theme.palette.primary,
    borderTopWidth: 0,
  },
  container: {
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: theme.palette.primary,
  },
});
