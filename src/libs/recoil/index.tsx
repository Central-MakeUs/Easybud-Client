import {ReactNode} from 'react';
import {RecoilRoot} from 'recoil';

type RecoilSettingProps = {children: ReactNode};

export default function RecoilSetting({children}: RecoilSettingProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
