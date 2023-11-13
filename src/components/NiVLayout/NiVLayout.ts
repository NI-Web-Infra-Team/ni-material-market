export type NiVLayoutProps = {
  /**
   * 是否适应屏幕
   */
  fitScreen?: boolean;
  /**
   * 是否撑满父元素高度
   */
  fullHeight?: boolean;
  /**
   * 视图布局，详见文档
   */
  view?: string;
  leftSideVisible?: boolean;
  rightSideVisible?: boolean;
  drawer?: boolean;
};

export type NiVLayoutDrawerProps = {
  drawer?: boolean;
};
