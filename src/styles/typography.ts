import {StyleSheet} from 'react-native';

export const typographyStyles = StyleSheet.create({
  /** Title1_m - size: 24, weight: 700 */
  Title1Bold: {
    fontSize: 24,
    fontWeight: '700',
  },
  /** Title1 - size: 24, weight: 600, letter-spacing:-1.2 */
  Title1Semibold1: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -1.2,
  },
  /** Title1_m: size: 20, weight: 600, line-height: 150%(36px) */
  Title1Semibold2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
  },

  /** Title2 - size: 16, weight: 700 */
  Title2Bold: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 36,
  },
  /** Title2_l - size: 16, weight: 400 */
  Title2Regular: {
    fontWeight: '400',
    fontSize: 16,
  },

  /** size: 16, weight: 600 */
  Body1Semibold: {
    fontWeight: '600',
    fontSize: 16,
  },
  /** size: 16, weight: 400 */
  Body1Regular: {
    fontWeight: '400',
    fontSize: 16,
  },

  /** size: 13, weight: 600 */
  Body2Semibold: {
    fontWeight: '600',
    fontSize: 13,
  },
  /** size: 13, weight: 400 */
  Body2Regular: {
    fontWeight: '400',
    fontSize: 13,
  },
});
