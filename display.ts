

//% color=#009ede icon="\uf26c"
//% groups='["Single LED","RGB LED","Light LED","Segment Display"]'
namespace Display {
    export enum State {
        //% block="ON" enumval=0
        ON,
        //% block="OFF" enumval=1
        OFF 
    }

    /**
     * Set led state (on or off).
     * @param pin microbit digital pin
     * @param state led state
     */
    //% blockId=display_set_led_state block="set led |%state| at pin |%port|"
    //% weight=130
    //% group="Single LED"
    export function setLedState(pin: DigitalPin, state: State) {
        if (state == State.ON)
            pins.digitalWritePin(pin, 1);
        else
            pins.digitalWritePin(pin, 0);
    }

    /**
     * Set led brightness.
     * @param pin microbit analog pin
     * @param brightness brightness level to set
     */
    //% blockId=display_set_led_brightness block="set led brightness(0~100) |%brightness| at port |%pin| "
    //% weight=129
    //% brightness.min=0 brightness.max=100    
    //% group="Single LED"
    export function setLedBrightness(pin: AnalogPin, brightness: number) {
        pins.analogWritePin(pin, pins.map(brightness, 0, 100, 0, 1023));
    }

    /**
     * Set light brightness.
     * @param pin microbit analog pin
     * @param brightness brightness level to set
     */
    //% blockId=display_set_light_brightness block="set light led brightness(0~100) |%brightness| at port |%pin| "
    //% weight=129
    //% brightness.min=0 brightness.max=100    
    //% group="Light LED"
    export function setLightBrightness(pin: AnalogPin, brightness: number) {
        pins.analogWritePin(pin, pins.map(brightness, 0, 100, 0, 1023));
    }

    let neoStrip:neopixel.Strip  = null;

    /**
     * set rgb led color to a predefined color. 
     * @param pin microbit digital pin
     * @param color color
    */
    //% blockId="display_set_rgb_led_color" block="set rgb led color |%color| at port |%pin| "
    //% weight=129
    //% group="RGB LED"
    export function setRGBLedColor(pin: DigitalPin, color: Easybit.Colors): void {
        if (neoStrip == null) {
            neoStrip = neopixel.create(pin, 1, NeoPixelMode.RGB);
            neoStrip.setBrightness(75);
        }
        neoStrip.setPixelColor(0, color);
        neoStrip.show();
    }

    /**
     * set rgb led brightness. 
     * @param pin microbit analog pin
     * @param color color
    */
    //% blockId="display_set_rgb_led_brightness" block="set rgb led brightness |%level| at port |%pin| "
    //% weight=129
    //% level.min=0 level.max=100    
    //% group="RGB LED"
    export function setRGBLedsBrightness(pin: DigitalPin, level: number): void {
        if (neoStrip == null) {
            neoStrip = neopixel.create(pin, 1, NeoPixelMode.RGB);
            neoStrip.setBrightness(75);
        }

        neoStrip.setBrightness(pins.map(level, 0, 100, 0, 255));
        neoStrip.show();
    }

    /**
     * turn segment display on
     */
    //% blockId=display_turn_segment_display_on block="turn segment display on"
    //% weight=128
    //% group="Segment Display"
    export function digitalTubeOn() {
        tm1650.on();
    }

    /**
     * turn segment display off
     */
    //% blockId=display_turn_segment_display_off block="turn segment display off"
    //% weight=127
    //% group="Segment Display"
    export function digitalTubeOff() {
        tm1650.off();
    }

    /**
     * clear segment display
     */
    //% blockId=display_clear_segment_display block="clear segment display display"
    //% weight=126
    //% group="Segment Display"
    export function digitalTubeClear() {
        tm1650.clear();
    }

    /**
     * set segment display intensity
     */
    //% blockId=display_set_segment_display_intensity block="set segment display intensity |%value|"
    //% weight=125
    //% value.min=0 value.max=8
    //% group="Segment Display"
    export function digitalTubeSetIntensity(value: number) {
        tm1650.setBrightness(value);
    }

    /**
     * show digital at segment display
     * @param value number to be shown on display
     * @param pos position of number
     */
    //% blockId=display_segment_display_show_digit block="show digit |%value| at bit |%pos|"
    //% weight=124
    //% group="Segment Display"
    export function digitalTubeShowDigit(value: number, pos : number) {
        tm1650.showDigit(value, pos);
    }

    /**
     * show number on segment display
     * @param value number to be shown on display
     */
    //% blockId=display_segment_display_show_number block="show number |%value|"
    //% weight=123
    //% group="Segment Display"
    export function digitalTubeShowNumber(value: number) {
        tm1650.showNumber(value);
    }

    /**
     * set dot point state on segment display
     * @param pos bit to show
     * @param show show or not
     */
    //% blockId=display_segment_display_set_dp_state block="show dot at |%pos| |%show|"
    //% weight=122
    //% group="Segment Display"
    export function digitalTubeSetPoint(pos: number, show: boolean) {
        tm1650.showDotPoint(pos, show);
    }
}