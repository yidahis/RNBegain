// @flow

import {Animated, Dimensions} from 'react-native';
import Animation, {type AnimationConfig} from './Animation';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

type SlideFrom = 'top' | 'bottom' | 'left' | 'right';
type SlideAnimationConfig = AnimationConfig & {
    slideFrom?: SlideFrom
}

export default class SlideAnimation extends Animation {
    slideFrom : SlideFrom;

    static SLIDE_FROM_TOP = 'top';
    static SLIDE_FROM_BOTTOM = 'bottom';
    static SLIDE_FROM_LEFT = 'left';
    static SLIDE_FROM_RIGHT = 'right';

    constructor({
        initialValue = 0,
        useNativeDriver = true,
        slideFrom = SlideAnimation.SLIDE_FROM_BOTTOM
    } : SlideAnimationConfig = {}) {
        super({initialValue, useNativeDriver});
        this.slideFrom = SlideAnimation.SLIDE_FROM_BOTTOM;
    }; 
    
    in(onFinished?: Function = () => {}) : void {
        Animated
            .spring(this.animate, {
            toValue: 1,
            velocity: 0,
            tension: 65,
            friction: 10,
            useNativeDriver: this.useNativeDriver
        })
            .start(onFinished);
    }

    out(onFinished?: Function = () => {}) : void {
        Animated
            .spring(this.animate, {
            toValue: 0,
            velocity: 0,
            tension: 65,
            friction: 10,
            useNativeDriver: this.useNativeDriver
        })
            .start(onFinished);
    }

    getAnimations() : Object {
        const transform = [];
        transform.push({
            translateY: this.animate.interpolate({
                inputRange: [0, 1],
                outputRange: [SCREEN_HEIGHT, -4*44],
            }),
        });
        return {transform};
    }
}
