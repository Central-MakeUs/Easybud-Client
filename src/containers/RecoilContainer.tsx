import {ReactNode} from 'react';
import {RecoilRoot} from 'recoil';

type RecoilContainerProps = {children: ReactNode};

export default function RecoilContainer({children}: RecoilContainerProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
