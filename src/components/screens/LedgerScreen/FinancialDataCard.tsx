import React, {ReactElement, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Typography from 'components/@common/Typography';
import Icon from 'components/@common/Icon';

/**
 * @param children 자식 요소
 */
type ContainerProps = {
  children: ReactElement | ReactElement[];
};

export function Container({children}: ContainerProps) {
  return <View style={financialDataCardStyles.container}>{children}</View>;
}

/**
 * @param children 자식 요소
 */
type TopElementContainerProps = {
  children: ReactElement | ReactElement[];
};

export function TopElementContainer({children}: TopElementContainerProps) {
  return (
    <View style={financialDataCardStyles.topLabelContainer}>{children}</View>
  );
}

/**
 * @param label label 텍스트
 */
type LabelProps = {label: string};

export function Label({label}: LabelProps) {
  return <Typography type={'Title1Semibold1'}>{label}</Typography>;
}

/**
 * @param isVisible 아이콘을 보여줄지 여부
 * @param onPress 아이콘을 눌렀을 때 동작을 정의하는 함수
 */
type TooltipIconProps = {
  isVisible: boolean;
  onPress: (prevState: boolean) => void;
};

export function TooltipIcon({onPress, isVisible}: TooltipIconProps) {
  return (
    isVisible && (
      <Icon
        name={'ExclamationCircle'}
        size={18}
        fill={'gray3'}
        onPress={onPress}
      />
    )
  );
}

/**
 * @param variant 버튼 종류 'detail' | 'time'
 * @param onPress 상세 보기 버튼을 클릭했을 때 동작하는 함수
 */
type DetailButtonProps = {variant?: 'detail' | 'time'; onPress?: () => void};

export function DetailButton({
  variant = undefined,
  onPress,
}: DetailButtonProps) {
  const [currentDate, _] = useState(new Date());

  const getDatePeriod = () => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}.${month}.01-${year}.${month}.${day}`;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {variant === 'detail' ? (
        <Typography
          type={'Body2Regular'}
          color={'gray4'}
          style={financialDataCardStyles.button}>
          거래 더보기
        </Typography>
      ) : (
        variant === 'time' && (
          <View style={financialDataCardStyles.timeDetailButton}>
            <Typography type={'Body2Regular'} color={'gray4'}>
              {getDatePeriod()}
            </Typography>
          </View>
        )
      )}
    </TouchableOpacity>
  );
}

/**
 * @param children 자식 요소
 */
type BottomElementProps = {
  children: ReactElement;
};

export function BottomElement({children}: BottomElementProps) {
  return <View>{children}</View>;
}

/**
 * @param children 자식 요소
 */
type FinancialDataCardProps = {
  children: ReactElement | ReactElement[];
};

export function FinancialDataCard({children}: FinancialDataCardProps) {
  return <>{children}</>;
}

export const FinancialDataCardBase = Object.assign(FinancialDataCard, {
  Container,
  TopElementContainer,
  Label,
  TooltipIcon,
  DetailButton,
  BottomElement,
});

const financialDataCardStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  topLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    textDecorationLine: 'underline',
  },
  timeDetailButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
