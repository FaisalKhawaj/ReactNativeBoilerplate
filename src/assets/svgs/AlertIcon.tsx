import * as React from 'react';
import Svg, {
  G,
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const AlertIcon = (
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<Svg> &
    Pick<
      Readonly<SvgProps>,
      | 'children'
      | 'hitSlop'
      | 'id'
      | 'needsOffscreenAlphaCompositing'
      | 'onLayout'
      | 'pointerEvents'
      | 'removeClippedSubviews'
      | 'style'
      | 'testID'
      | 'nativeID'
      | 'collapsable'
      | 'renderToHardwareTextureAndroid'
      | 'focusable'
      | 'tabIndex'
      | 'shouldRasterizeIOS'
      | 'isTVSelectable'
      | 'hasTVPreferredFocus'
      | 'tvParallaxProperties'
      | 'tvParallaxShiftDistanceX'
      | 'tvParallaxShiftDistanceY'
      | 'tvParallaxTiltAngle'
      | 'tvParallaxMagnification'
      | 'onStartShouldSetResponder'
      | 'onMoveShouldSetResponder'
      | 'onResponderEnd'
      | 'onResponderGrant'
      | 'onResponderReject'
      | 'onResponderMove'
      | 'onResponderRelease'
      | 'onResponderStart'
      | 'onResponderTerminationRequest'
      | 'onResponderTerminate'
      | 'onStartShouldSetResponderCapture'
      | 'onMoveShouldSetResponderCapture'
      | 'onTouchStart'
      | 'onTouchMove'
      | 'onTouchEnd'
      | 'onTouchCancel'
      | 'onTouchEndCapture'
      | 'onPointerEnter'
      | 'onPointerEnterCapture'
      | 'onPointerLeave'
      | 'onPointerLeaveCapture'
      | 'onPointerMove'
      | 'onPointerMoveCapture'
      | 'onPointerCancel'
      | 'onPointerCancelCapture'
      | 'onPointerDown'
      | 'onPointerDownCapture'
      | 'onPointerUp'
      | 'onPointerUpCapture'
      | 'accessible'
      | 'accessibilityActions'
      | 'accessibilityLabel'
      | 'aria-label'
      | 'accessibilityRole'
      | 'accessibilityState'
      | 'aria-busy'
      | 'aria-checked'
      | 'aria-disabled'
      | 'aria-expanded'
      | 'aria-selected'
      | 'accessibilityHint'
      | 'accessibilityValue'
      | 'aria-valuemax'
      | 'aria-valuemin'
      | 'aria-valuenow'
      | 'aria-valuetext'
      | 'onAccessibilityAction'
      | 'importantForAccessibility'
      | 'aria-hidden'
      | 'aria-modal'
      | 'role'
      | 'accessibilityLabelledBy'
      | 'aria-labelledby'
      | 'accessibilityLiveRegion'
      | 'aria-live'
      | 'accessibilityElementsHidden'
      | 'accessibilityViewIsModal'
      | 'onAccessibilityEscape'
      | 'onAccessibilityTap'
      | 'onMagicTap'
      | 'accessibilityIgnoresInvertColors'
      | 'accessibilityLanguage'
      | 'onPress'
      | 'onPressIn'
      | 'onPressOut'
      | 'onLongPress'
      | 'disabled'
      | 'width'
      | 'height'
      | 'viewBox'
      | 'color'
      | 'title'
      | 'opacity'
      | 'fill'
      | 'fillOpacity'
      | 'fillRule'
      | 'stroke'
      | 'strokeWidth'
      | 'strokeOpacity'
      | 'strokeDasharray'
      | 'strokeDashoffset'
      | 'strokeLinecap'
      | 'strokeLinejoin'
      | 'strokeMiterlimit'
      | 'vectorEffect'
      | 'clipRule'
      | 'clipPath'
      | 'translate'
      | 'translateX'
      | 'translateY'
      | 'origin'
      | 'originX'
      | 'originY'
      | 'scale'
      | 'scaleX'
      | 'scaleY'
      | 'skew'
      | 'skewX'
      | 'skewY'
      | 'rotation'
      | 'x'
      | 'y'
      | 'transform'
      | 'delayPressIn'
      | 'delayPressOut'
      | 'delayLongPress'
      | 'marker'
      | 'markerStart'
      | 'markerMid'
      | 'markerEnd'
      | 'mask'
      | 'font'
      | 'fontStyle'
      | 'fontVariant'
      | 'fontWeight'
      | 'fontStretch'
      | 'fontSize'
      | 'fontFamily'
      | 'textAnchor'
      | 'textDecoration'
      | 'letterSpacing'
      | 'wordSpacing'
      | 'kerning'
      | 'fontFeatureSettings'
      | 'fontVariantLigatures'
      | 'fontVariationSettings'
    > & {readonly preserveAspectRatio?: string | undefined} & {},
) => {
  const {width, height} = props;
  return (
    <Svg width={width || 58} height={height || 61} fill="none" {...props}>
      <G filter="url(#a)" opacity="100%">
        <Rect width={width || 58} height={height || 61} fill="url(#b)" rx={0} />
        <Defs>
          <Pattern
            id="b"
            width={1}
            height={1}
            patternContentUnits="objectBoundingBox">
            <Use href="#c" transform="matrix(.01948 0 0 .01852 -.006 0)" />
          </Pattern>
        </Defs>
      </G>
      <Defs>
        <Image
          id="c"
          width={52}
          height={54}
          href="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};
