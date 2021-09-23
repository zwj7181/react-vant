import React, { useRef } from 'react';
import classnames from 'classnames';
import { TabbarProps } from './PropsType';
import { createNamespace, getZIndexStyle } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import useHeight from '../hooks/use-height';
import TabbarContext from './TabbarContext';
import useMergedState from '../hooks/use-merged-state';

const [bem] = createNamespace('tabbar');

const Tabbar: React.FC<TabbarProps> = (props) => {
  const [current, setCurrent] = useMergedState({ value: props.value, defaultValue: props.defaultValue });
  const root = useRef<HTMLDivElement>();
  const height = useHeight(root);

  const renderPlaceholder = (renderContent) => {
    return (
      <div className={classnames(bem('placeholder'))} style={{ height }}>
        {renderContent()}
      </div>
    );
  };

  // enable safe-area-inset-bottom by default when fixed
  const enableSafeArea = () => props.safeAreaInsetBottom ?? props.fixed;

  const setActive = (active: number | string) => {
    if (active !== props.value) {
      props.onChange?.(active);
      setCurrent(active);
    }
  };

  const renderTabbar = () => {
    const { fixed, zIndex, border } = props;
    return (
      <TabbarContext.Provider value={{ parent: { ...props, value: current } }}>
        <div
          ref={root}
          style={{ ...props.style, ...getZIndexStyle(zIndex) }}
          className={classnames(props.className, bem({ fixed }), {
            [BORDER_TOP_BOTTOM]: border,
            'rv-safe-area-bottom': enableSafeArea(),
          })}
        >
          {React.Children.map(props.children, (child: React.ReactElement, index) =>
            React.cloneElement(child, {
              setActive,
              index,
            }),
          )}
        </div>
      </TabbarContext.Provider>
    );
  };

  if (props.fixed && props.placeholder) {
    return renderPlaceholder(renderTabbar);
  }
  return renderTabbar();
};

Tabbar.defaultProps = {
  fixed: true,
  border: true,
  defaultValue: 0
};

export default Tabbar;
