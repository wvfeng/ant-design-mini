import { GuideTourDefaultProps, IGuideTour } from './props';
import { Component, View, Slot, InternalData, TSXMLProps } from 'tsxml';
import Mask from '../Mask/index.axml';
import Button from '../Button/index.axml';
import Icon from '../Icon/index.axml';
import utils from './index.sjs';

export default (
  {
    className,
    style,
    maskStyle,
    maskClassName,
    items,
    visible,
    swiperable,
  }: TSXMLProps<IGuideTour>,
  { value }: InternalData
) => (
  <Component>
    {visible && (
      <View class={`ant-guide-tour ${className || ''}`} style={style || ''}>
        <Mask
          show
          className={maskClassName}
          style={`z-index:9999;${maskStyle || ''}`}
        />
        <Icon
          type="CloseOutline"
          className="ant-guide-tour-clear"
          onTap="onCancel"
        />
        <View class="ant-guide-tour-button">
          {utils.checkShowJump(value, items) && (
            <Button inline size="small" onTap="onCancel">
              跳过
            </Button>
          )}
          {utils.checkShowPrev(value, items) && (
            <Button
              inline
              size="small"
              onTap="onPrev"
              data-currentValue={value}
            >
              上一步
            </Button>
          )}
          {utils.checkShowNext(value, items) && (
            <Button
              inline
              size="small"
              onTap="onNext"
              data-currentValue={value}
            >
              下一步
            </Button>
          )}
          {utils.checkShowKnow(value, items) && (
            <Button inline size="small" onTap="onCancel">
              知道了
            </Button>
          )}
        </View>
        {swiperable ? (
          <>
            <View class="ant-guide-tour-indicator">
              {items.map((_, index) => (
                <View
                  key={index}
                  class={`ant-guide-tour-indicator-dot ${
                    index === value ? 'ant-guide-tour-indicator-dot-active' : ''
                  }`}
                ></View>
              ))}
            </View>
            <swiper
              class="ant-guide-tour-swiper"
              current={value}
              adjust-height="none"
              style="height: 100vh"
              disable-touch="true"
              onChange="onSwiperChange"
            >
              {items.map((item, index) => (
                <swiper-item key={index}>
                  {value === index && (
                    <View
                      class={`ant-guide-tour-item ${item.className || ''}`}
                      style={`top:${item.top}px; left:${item.left}px`}
                    >
                      {/* #if ALIPAY */}
                      <Slot name="step" index={value}>
                        {/* #endif */}
                        {item.imageUrl && (
                          <image
                            class="ant-guide-tour-item-img"
                            src={item.imageUrl}
                            style={item.imageStyle}
                            mode={item.imageMode}
                          />
                        )}
                        {/* #if ALIPAY */}
                      </Slot>
                      {/* #endif */}
                    </View>
                  )}
                </swiper-item>
              ))}
            </swiper>
          </>
        ) : (
          items.map(
            (item, index) =>
              value === index && (
                <View
                  key={index}
                  class={`ant-guide-tour-item ${item.className || ''}`}
                  style={`top:${item.top}px; left:${item.left}px`}
                >
                  {/* #if ALIPAY */}
                  <Slot name="step" index={index}>
                    {/* #endif */}
                    {item.imageUrl && (
                      <image
                        class="ant-guide-tour-item-img"
                        src={item.imageUrl}
                        style={item.imageStyle}
                        mode={item.imageMode}
                      />
                    )}
                    {/* #if ALIPAY */}
                  </Slot>
                  {/* #endif */}
                </View>
              )
          )
        )}
      </View>
    )}
  </Component>
);
