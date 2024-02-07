import {StyleSheet, View} from 'react-native';
import {TextVariant} from 'constants/screens/SettingScreen';
import {VariantType} from 'types/screens/SettingScreen';
import {useLogoutMutation} from 'hooks/mutations/Auth/useLogoutMutation';
import {useWithdrawalMutation} from 'hooks/mutations/Auth/useWithdrawalMutation';
import localStorage from 'libs/async-storage';
import {TokenKeys} from 'libs/async-storage/constants/keys';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

type MemberManagementBottomSheetContentProps = {
  variant: VariantType;
};

export default function MemberManagementBottomSheetContent({
  variant,
}: MemberManagementBottomSheetContentProps) {
  const {logoutMutation} = useLogoutMutation();
  const {withdrawalMutation} = useWithdrawalMutation();

  const handlePressMemberManagementButton = async () => {
    if (variant === 'leave') {
      withdrawalMutation.mutate();
    } else if (variant === 'logout') {
      const refreshToken: string = await localStorage.get(
        TokenKeys.RefreshToken,
      );

      logoutMutation.mutate({refreshToken: refreshToken});
    }
  };

  return (
    <View style={settingScreenStyles.bottomSheetContainer}>
      <Typography type={'Body1Semibold'} color={'gray5'}>
        {TextVariant.warningText[variant]}
      </Typography>
      <Button onPress={handlePressMemberManagementButton}>
        {TextVariant.buttonText[variant]}
      </Button>
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
