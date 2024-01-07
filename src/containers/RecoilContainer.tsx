import {ReactElement} from 'react';
import {RecoilRoot} from 'recoil';

type RecoilContainerProps = {children: ReactElement};

export default function RecoilContainer({children}: RecoilContainerProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
