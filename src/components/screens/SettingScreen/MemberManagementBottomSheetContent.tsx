import {StyleSheet, View} from 'react-native';
import {TextVariant} from 'constants/screens/SettingScreen';
import {VariantType} from 'types/screens/SettingScreen';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

type MemberManagementBottomSheetContentProps = {
  variant: VariantType;
};

export default function MemberManagementBottomSheetContent({
  variant,
}: MemberManagementBottomSheetContentProps) {
  return (
    <View style={settingScreenStyles.bottomSheetContainer}>
      <Typography type={'Body1Semibold'} color={'gray5'}>
        {TextVariant.warningText[variant]}
      </Typography>
      <Button>{TextVariant.buttonText[variant]}</Button>
    </View>
  );
}

const settingScreenStyles = StyleSheet.create({
  bottomSheetContainer: {
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
